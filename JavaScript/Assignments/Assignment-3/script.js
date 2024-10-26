// document.getElementById('delete').addEventListener('click', (index) => {
//     console.log();
// })

// document.getElementById('edit').addEventListener('click', (index) => {
//     console.log();
// })

//-------------Add New Button--------------
let addNewButton = document.getElementById('addNewUser');
let formTemplate = document.getElementById('form');
let container = document.getElementById('container')

addNewButton.addEventListener('click', () => {
    //pop-up effect
    formTemplate.classList.remove('hidden');
    container.classList.add('blur-lg')
})

//-------------Save Button---------------
let saveButton = document.getElementById('saveUser');

saveButton.addEventListener('click', () => {
    //pop-up effect
    container.classList.add('hidden')
    formTemplate.classList.remove('blur-lg');
})


//------------Get User---------------------
const getUser = async (keyword = '') => {
    try {
      // fetch
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const userArray = await response.json();
      // local storage
      let stringifiedUserArray = JSON.stringify(userArray);
      localStorage.setItem('array', stringifiedUserArray)
      let arrayFromStorage = localStorage.getItem('array');
      let arrayParsed = JSON.parse(arrayFromStorage);
      //table data
      let temp = '';
      arrayParsed.map((user, index) => {
        if (user.name.toLowerCase().match(keyword.toLowerCase())) {
        temp += `<tr
        class="bg-white border-b"
      >
        <td class="font-medium text-gray-600 dark:text-gray-500">${user?.name ?? 'N/A'}</td>
        <td class="px-6 py-4">${user?.username ?? 'Unknown'}</td>
        <td class="px-6 py-4">${user?.email ?? 'Unknown'}</td>
        <td class="px-6 py-4">${user?.address?.suite ?? 'Unknown'}, ${user?.address?.street ?? 'Unknown'}, ${user?.address?.city ?? 'Unknown'} - ${user?.address?.zipcode ?? 'Unknown'} </td>
        <td class="px-6 py-4">${user?.phone ?? 'Unknown'}</td>
        <td class="px-6 py-4">${user?.website ?? 'Unknown'}</td>
        <td class="px-6 py-4">${user?.company?.name ?? 'Unknown'}</td>
        <td class="px-6 py-4 text-right">
           <a href="#" id="edit" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
        <td class="px-6 py-4 text-right">
           <a href="#" id="delete" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
        </td>
        </tr>`};
      document.getElementById('userDetails').innerHTML = temp;
      });
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  };
  
  //-----on load-----
  window.onload = function () {
    getUser();
  };



