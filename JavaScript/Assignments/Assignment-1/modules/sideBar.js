import {boolean, keysPressed, textAreaDown} from '../script.js'



// Reset
export const reset = () => {
  document.getElementById('text-area').value = '';
  keysPressed = {};
  document.getElementById('keysTable').innerHTML = '';
  document.getElementById('tableContent').style.opacity = '0';
};

//-------------------------------------------------------

// Show-Count
export const showCount = () => {
  document.getElementById('tableContent').style.opacity = '1';
  document.getElementById('keysTable').innerHTML = '';
  const tableBody = document.getElementById('keysTable');
  if (boolean) {
    for (const key in keysPressed) {
      const row = document.createElement('tr');
      row.classList.add('border-b');

      const keyCell = document.createElement('td');
      keyCell.classList.add('py-2', 'px-4', 'text-gray-700');
      keyCell.textContent = key;

      const countCell = document.createElement('td');
      countCell.classList.add('py-2', 'px-4', 'text-gray-700');
      countCell.textContent = keysPressed[key];

      row.appendChild(keyCell);
      row.appendChild(countCell);

      tableBody.appendChild(row);
    }
    boolean = false;
  }
};

//-------------------------------------------------------

// Hide Count
export const hideCount = () => {
  boolean = true;
  document.getElementById('keysTable').innerHTML = '';
  document.getElementById('tableContent').style.opacity = '0';
};