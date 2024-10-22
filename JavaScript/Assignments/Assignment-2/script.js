const getCharacter = () => {
  fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9')
    .then(response => response.json())
    .then(charArray => {
      let temp = '';
      charArray.map((char, index) => {
        temp =
          temp +
          `<tr
                class="bg-white border-b"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onclick="getCharDetails(${
                    index + 1
                  })">${char.name}</button>
                </th>
                <td class="px-6 py-4">${char.status}</td>
                <td class="px-6 py-4">${char.species}</td>
                <td class="px-6 py-4">${char.gender}</td>
                <td class="px-6 py-4">${char.location.name}</td>
              </tr>`;
        console.log(char.name);
      });
      document.getElementById('charDetails').innerHTML = temp;
    });
};


const getCharDetails = index => {
  document.getElementById('modal').classList.remove('hidden');
  let url = 'https://rickandmortyapi.com/api/character/' + index;
  fetch(url)
    .then(response => response.json())
    .then(char => {
      let temp = `<p class="text-center text-gray-700 opacity-80 mb-4">Please click on below card to close.</p>
      <div
      class="flex flex-row font-sans w-[650px] h-min bg-gray-700 text-white rounded-xl shadow-2xl"
      onclick = "removeCharDetails()"
    >
      <!-- Image Section -->
      <div class="w-[265px]">
        <img
          src="${char.image}"
          alt="Brad Anderson Image"
          class="w-full h-full object-cover overflow-hidden rounded-l-xl"
        />
      </div>
      <div class="flex flex-col space-y-4 p-4">
        <div>
          <!-- Name -->
          <h2 class="text-4xl font-bold">${char.name}</h2>
          <!-- Status indicator -->
          <label id="color" class="text-sm">●</label>
          <span class="block text-sm text-white-500 mb-1"
            > ${char.status} - ${char.species}</span
          >
        </div>
        <!-- Last known location -->
        <div class="mt-4">
          <p class="text-gray-400 text-sm">Last known location:</p>
          <p class="text-lg text-white">${char.origin.name}</p>
        </div>
        <!-- First seen in -->
        <div class="mt-4">
          <p class="text-gray-400 text-sm">First seen in:</p>
          <p class="text-lg text-white">${char.location.name}</p>
        </div>
      </div>
    </div>`;
      document.getElementById('modal').innerHTML = temp;
      
      if(char.status === 'Alive') 
        document.getElementById('color').classList.add('text-green-600');
      else if (char.status === 'Dead') 
        document.getElementById('color').classList.add('text-red-600');
    });
};

const removeCharDetails = () => {

  document.getElementById('modal').classList.add('hidden');
}

window.onload = function () {
  getCharacter();
};
