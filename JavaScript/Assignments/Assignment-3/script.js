const getUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const userArray = await response.json();
  
      let temp = '';
  
      userArray.map((user, index) => {
        temp += `<tr
                  class="bg-white border-b"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onclick="getCharDetails(${
                      index + 1
                    })">${user?.name ?? 'N/A'}</button>
                  </th>
                  <td class="px-6 py-4">${user?.username ?? 'Unknown'}</td>
                  <td class="px-6 py-4">${user?.email ?? 'Unknown'}</td>
                  <td class="px-6 py-4">${user?.address?.suite ?? 'Unknown'}, ${user?.address?.street ?? 'Unknown'}, ${user?.address?.city ?? 'Unknown'}, ${user?.address?.zipcode ?? 'Unknown'} </td>
                  <td class="px-6 py-4">${user?.phone ?? 'Unknown'}</td>
                  <td class="px-6 py-4">${user?.website ?? 'Unknown'}</td>
                  <td class="px-6 py-4">${user?.company?.name ?? 'Unknown'}</td>
                </tr>`;
        document.getElementById('userDetails').innerHTML = temp;
      });
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  };
  
  window.onload = function () {
    getUser();
  };