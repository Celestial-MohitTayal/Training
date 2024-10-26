// document.getElementById('delete').addEventListener('click', (index) => {
//     console.log();
// })

// document.getElementById('edit').addEventListener('click', (index) => {
//     console.log();
// })

//------------Get User---------------------
let arrayParsed = [];
const getUser = async () => {
  try {
    // fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userArray = await response.json();
    // local storage
    let stringifiedUserArray = JSON.stringify(userArray);
    localStorage.setItem('array', stringifiedUserArray);
    let arrayFromStorage = localStorage.getItem('array');
    arrayParsed = arrayParsed.concat(JSON.parse(arrayFromStorage));
    console.log(arrayParsed);

    //table data
    let temp = '';
    arrayParsed.map((user, index) => {
      temp += `<tr
      class="bg-white border-b"
    >
      <td class="font-medium text-gray-600 dark:text-gray-500">${
        user?.name ?? 'N/A'
      }</td>
      <td class="px-6 py-4">${user?.username ?? 'Unknown'}</td>
      <td class="px-6 py-4">${user?.email ?? 'Unknown'}</td>
      <td class="px-6 py-4">${user?.address?.suite ?? 'Unknown'}, ${
        user?.address?.street ?? 'Unknown'
      }, ${user?.address?.city ?? 'Unknown'} - ${
        user?.address?.zipcode ?? 'Unknown'
      } </td>
      <td class="px-6 py-4">${user?.phone ?? 'Unknown'}</td>
      <td class="px-6 py-4">${user?.website ?? 'Unknown'}</td>
      <td class="px-6 py-4">${user?.company?.name ?? 'Unknown'}</td>
      <td class="px-6 py-4 text-right">
         <a href="#" id="edit" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
      <td class="px-6 py-4 text-right">
         <a href="#" id="delete" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
      </td>
      </tr>`;
      document.getElementById('userDetails').innerHTML = temp;
    });
  } catch (error) {
    console.error('Error fetching character data:', error);
  }
};

//----------Update-User-------------------
const updateUser = (keyword = '') => {
  console.log(arrayParsed);
  //table data
  let temp = '';
  arrayParsed.map((user, index) => {
    if (user.name.toLowerCase().match(keyword.toLowerCase())) {
      temp += `<tr
      class="bg-white border-b"
    >
      <td class="font-medium text-gray-600 dark:text-gray-500">${
        user?.name ?? 'N/A'
      }</td>
      <td class="px-6 py-4">${user?.username ?? 'Unknown'}</td>
      <td class="px-6 py-4">${user?.email ?? 'Unknown'}</td>
      <td class="px-6 py-4">${user?.address?.suite ?? 'Unknown'}, ${
        user?.address?.street ?? 'Unknown'
      }, ${user?.address?.city ?? 'Unknown'} - ${
        user?.address?.zipcode ?? 'Unknown'
      } </td>
      <td class="px-6 py-4">${user?.phone ?? 'Unknown'}</td>
      <td class="px-6 py-4">${user?.website ?? 'Unknown'}</td>
      <td class="px-6 py-4">${user?.company?.name ?? 'Unknown'}</td>
      <td class="px-6 py-4 text-right">
         <a href="#" id="edit" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
      <td class="px-6 py-4 text-right">
         <a href="#" id="delete" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
      </td>
      </tr>`;
    }
    document.getElementById('userDetails').innerHTML = temp;
  });
};

//-------------Add New Button--------------
let addNewButton = document.getElementById('addNewUser');
let formTemplate = document.getElementById('form');
let container = document.getElementById('container');

addNewButton.addEventListener('click', e => {
  //pop-up effect
  formTemplate.classList.remove('hidden');
  container.classList.add('blur-lg');
  console.log(arrayParsed);
  e.preventDefault();
});

//-------------Save Button---------------
let saveButton = document.getElementById('saveUser');

saveButton.addEventListener('click', e => {
  // console.log(arrayParsed);

  //save feature
  let name = document.getElementById('name').value;
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let company = document.getElementById('company').value;
  let website = document.getElementById('website').value;
  let address = document.getElementById('address').value;
  let phonenumber = document.getElementById('phonenumber').value;
  let newuser = {
    id: arrayParsed.length + 1,
    name: name,
    username: username,
    email: email,
    address: address,
    phone: phonenumber,
    website: website,
    company: company,
  };

  arrayParsed.push(newuser);
  console.log(arrayParsed);
  updateUser();
  //pop-up effect
  container.classList.remove('blur-lg');
  formTemplate.classList.add('hidden');

  e.preventDefault();
});

//-----on load-----
window.onload = function () {
  getUser();
};
