const getCharacter = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    const charArray = data.results;

    let temp = '';

    charArray.map((char, index) => {
      temp += `<tr
                class="bg-white border-b"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onclick="getCharDetails(${
                    index + 1
                  })">${char?.name ?? 'N/A'}</button>
                </th>
                <td class="px-6 py-4">${char?.status ?? 'Unknown'}</td>
                <td class="px-6 py-4">${char?.species ?? 'Unknown'}</td>
                <td class="px-6 py-4">${char?.gender ?? 'Unknown'}</td>
                <td class="px-6 py-4">${char?.location?.name ?? 'Unknown'}</td>
              </tr>`;
      document.getElementById('charDetails').innerHTML = temp;
    });
  } catch (error) {
    console.error('Error fetching character data:', error);
  }
};

const getCharDetails = async (index) => {
  try {
    document.getElementById('modal').classList.remove('hidden');
    const url = `https://rickandmortyapi.com/api/character/${index}`;
    const response = await fetch(url);
    const char = await response.json();

    let temp = ``;

    temp += `<p class="text-center text-gray-700 opacity-80 mb-4 mt-40">Please click on below card to close.</p>
                <div
                class="flex flex-row font-sans w-[650px] h-min bg-gray-700 text-white rounded-xl shadow-2xl"
                onclick = "removeCharDetails()"
              >
                <!-- Image Section -->
                <div class="w-[265px]">
                  <img
                    src="${char?.image ?? ''}"
                    alt="${char?.name ?? 'N/A'} Image"
                    class="w-full h-full object-cover overflow-hidden rounded-l-xl"
                  />
                </div>
                <div class="flex flex-col space-y-4 p-4">
                  <div>
                    <!-- Name -->
                    <h2 class="text-4xl font-bold">${
                      char?.name ?? 'Unknown'
                    }</h2>
                    <!-- Status indicator -->
                    <label id="color" class="text-sm">●</label>
                    <span class="block text-sm text-white-500 mb-1"
                      > ${char?.status ?? 'Unknown'} - ${
      char?.species ?? 'Unknown'
    }</span
                    >
                  </div>
                  <!-- Last known location -->
                  <div class="mt-4">
                    <p class="text-gray-400 text-sm">Last known location:</p>
                    <p class="text-lg text-white">${
                      char?.origin?.name ?? 'Unknown'
                    }</p>
                  </div>
                  <!-- First seen in -->
                  <div class="mt-4">
                    <p class="text-gray-400 text-sm">First seen in:</p>
                    <p class="text-lg text-white">${
                      char?.location?.name ?? 'Unknown'
                    }</p>
                  </div>
                </div>
              </div>`;

    document.getElementById('modal').innerHTML = temp;

    if (char.status === 'Alive')
      document.getElementById('color').classList.add('text-green-600');
    else if (char.status === 'Dead')
      document.getElementById('color').classList.add('text-red-600');
  } catch (error) {
    console.error('Error fetching character data:', error);
  }
};

const removeCharDetails = () => {
  document.getElementById('modal').classList.add('hidden');
};

window.onload = function () {
  getCharacter();
};
