const getCharacter = () => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9")
    .then(response => response.json())
    .then(charArray => {
        let temp = "";
        charArray.map((char, index) => {
            temp = temp + `<tr
                class="bg-white border-b"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onclick="getCharDetails(${index+1})">${char.name}</a>
                </th>
                <td class="px-6 py-4">${char.status}</td>
                <td class="px-6 py-4">${char.species}</td>
                <td class="px-6 py-4">${char.gender}</td>
                <td class="px-6 py-4">${char.location.name}</td>
              </tr>`
            console.log(char.name); 
        })
        document.getElementById('charDetails').innerHTML = temp
    })
}


const getCharDetails = (index) => {
    console.log(index);
    let url = "https://rickandmortyapi.com/api/character/" + index;
    fetch(url)
    .then(response => response.json())
    .then(char => {
        console.log(char.name);
    })
}

window.onload = function () {
    getCharacter();
  };
  