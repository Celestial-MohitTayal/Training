const desktop = () => {
  let temp = `<div
      class="w-min flex flex-col space-y-4 m-auto border-8 rounded-xl border-black justify-center items-center"
    >
      <!-- Heading -->
      <div class="flex flex-col justify-center items-center m-10">
        <h3 class="text-lg text-black font-mono font-semibold">
          Keyboard Tester
        </h3>
        <p class="text-sm text-black font-mono">
          Test your keyboard easy and fast in any device.
        </p>
      </div>
      <!-- TextArea -->
          <textarea  autofocus id="text-area" class="p-4 w-11/12 h-56 bg-white border-none outline-none" onkeydown = "textAreaDown(event)" placeholder="tap here first.."></textarea>
      <!-- Keyboard -->
      <!-- Flex-Col Container -->
      <div class="flex flex-col w-full space-y-2 p-2 bg-slate-200 items-center justify-center">
        <!-- Row-1 -->
        <div class="flex flex-row space-x-2">
          <div id="ESCAPE" class="w-16 h-8 content-center text-center bg-white shadow-lg rounded">esc</div>
          <div id="F1" class="w-12 content-center text-center bg-white shadow-md rounded">F1</div>
          <div id="F2" class="w-12 content-center text-center bg-white shadow-md rounded">F2</div>
          <div id="F3" class="w-12 content-center text-center bg-white shadow-md rounded">F3</div>
          <div id="F4" class="w-12 content-center text-center bg-white shadow-md rounded">F4</div>
          <div id="F5" class="w-12 content-center text-center bg-white shadow-md rounded">F5</div>
          <div id="F6" class="w-12 content-center text-center bg-white shadow-md rounded">F6</div>
          <div id="F7" class="w-12 content-center text-center bg-white shadow-md rounded">F7</div>
          <div id="F8" class="w-12 content-center text-center bg-white shadow-md rounded">F8</div>
          <div id="F9" class="w-12 content-center text-center bg-white shadow-md rounded">F9</div>
          <div id="F10" class="w-12 content-center text-center bg-white shadow-md rounded">F10</div>
          <div id="F11" class="w-12 content-center text-center bg-white shadow-md rounded">F11</div>
          <div id="F12" class="w-12 content-center text-center bg-white shadow-md rounded">F12</div>
        </div>
        <!-- Row-2 -->
        <div class="flex flex-row space-x-2">
          <div id="~" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            ~
          </div>
          <div id="1" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            ! <br />
            1
          </div>
          <div id="2" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            @ <br />
            2
          </div>
          <div id="3" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            # <br />3
          </div>
          <div id="4" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            $ <br />
            4
          </div>
          <div id="5" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            % <br />
            5
          </div>
          <div id="6" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            ^ <br />
            6
          </div>
          <div id="7" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            & <br />
            7
          </div>
          <div id="8" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            * <br />
            8
          </div>
          <div id="9" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            ( <br />
            9
          </div>
          <div id="0" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            ) <br />
            0
          </div>
          <div id="-" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            _ <br />
            -
          </div>
          <div id="=" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            + <br />
            =
          </div>
          <div id="BACKSPACE" class="w-16 h-11 content-center text-center text-sm bg-white shadow-md rounded">
            back space
          </div>
        </div>
        <!-- Row-3 -->
        <div class="flex flex-row space-x-2">
          <div id="TAB" class="w-16 h-11 content-center bg-white text-center shadow-md rounded">tab</div>
          <div id="Q" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">Q</div>
          <div id="W" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">W</div>
          <div id="E" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">E</div>
          <div id="R" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">R</div>
          <div id="T" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">T</div>
          <div id="Y" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">Y</div>
          <div id="U" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">U</div>
          <div id="I" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">I</div>
          <div id="O" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">O</div>
          <div id="P" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">P</div>
          <div id="[" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            { <br />
            [
          </div>
          <div id="]" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            } <br />
            ]
          </div>
          <div id="" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            | <br />
            \
          </div>
        </div>
        <!-- Row-4 -->
        <div class="flex flex-row space-x-2">
          <div id="CAPSLOCK" class="w-20 h-11 content-center bg-white text-center shadow-md rounded">
            caps lock
          </div>
          <div id="A" class="w-11 h-11 content-center bg-white text-center content-center shadow-md rounded">A</div>
          <div id="S" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">S</div>
          <div id="D" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">D</div>
          <div id="F" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">F</div>
          <div id="G" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">G</div>
          <div id="H" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">H</div>
          <div id="J" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">J</div>
          <div id="K" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">K</div>
          <div id="L" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">L</div>
          <div id=";" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            : <br />
            ;
          </div>
          <div id="'" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            " <br />
            '
          </div>
          <div id="ENTER" class="w-20 h-11 content-center text-center bg-white shadow-md rounded">enter</div>
        </div>
        <!-- Row-5 -->
        <div class="flex flex-row space-x-2">
          <div id="SHIFTLEFT" class="w-24 h-11 content-center bg-white text-center shadow-md rounded-md">
            shift
          </div>
          <div id="Z" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">Z</div>
          <div id="X" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">X</div>
          <div id="C" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">C</div>
          <div id="V" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">V</div>
          <div id="B" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">B</div>
          <div id="N" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">N</div>
          <div id="M" class="w-11 h-11 content-center bg-white text-center shadow-md rounded">M</div>
          <div id="," class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            < <br />
            ,
          </div>
          <div id="." class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            > <br />
            .
          </div>
          <div id="/" class="w-11 h-11 content-center text-sm bg-white text-center shadow-md rounded">
            " <br />
            /
          </div>
          <div id="SHIFTRIGHT" class="w-24 h-11 content-center bg-white text-center shadow-md rounded">shift</div>
        </div>
        <!-- Row-6 -->
        <div class="flex flex-row space-x-2">
          <div id="CONTROLLEFT" class="w-20 h-11 content-center bg-white text-center shadow-md rounded">
            ctrl
          </div>
          <div id="METALEFT" class="w-16 h-11 content-center bg-white text-center shadow-md rounded">win</div>
          <div id="ALTLEFT" class="w-14 h-11 content-center bg-white text-center shadow-md rounded">alt</div>
          <div id=" " class="w-72 h-11 content-center bg-white text-center shadow-md rounded"></div>
          <div id="ALTRIGHT" class="w-14 h-11 content-center bg-white text-center shadow-md rounded">alt</div>
          <div id="METARIGHT" class="w-16 h-11 content-center bg-white text-center shadow-md rounded">win</div>
          <div id="CONTROLRIGHT" class="w-20 h-11 content-center bg-white text-center shadow-md rounded">
            ctrl
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('container').innerHTML = temp;
  keysPressed = {};
  document.getElementById('keysTable').innerHTML = '';
};

// -----------------------------

const tablet = () => {
  let temp = `<div
      class="mx-auto w-min rounded-2xl border-black border-[16px]"
    >
    <!-- Content -->
      <div class="flex flex-col justify-center items-center bg-yellow-300">
        <!-- Heading -->
        <div class="flex flex-col justify-center items-center p-4 mb-8">
          <h3 class="text-lg text-black font-mono font-semibold">
            Keyboard Tester
          </h3>
          <p class="text-sm text-black font-mono">
            Test your keyboard easy and fast in any device.
          </p>
        </div>
        <!-- TextArea -->
            <textarea autofocus id="text-area" class="p-6 w-11/12 h-56 bg-white rounded-lg mb-16 outline-none" onkeydown = "textAreaDown(event)" placeholder="tap here first.."></textarea>
        <!-- Keyboard -->
        <div class="flex flex-col bg-slate-100 p-4 space-y-2 w-full">
            <div class="flex flex-row space-x-2 justify-center">
                <div id="1" class="w-7 text-sm bg-white text-center shadow-md rounded">1</div>
                <div id="2" class="w-7 text-sm bg-white text-center shadow-md rounded">2</div>
                <div id="3" class="w-7 text-sm bg-white text-center shadow-md rounded">3</div>
                <div id="4" class="w-7 text-sm bg-white text-center shadow-md rounded">4</div>
                <div id="5" class="w-7 text-sm bg-white text-center shadow-md rounded">5</div>
                <div id="6" class="w-7 text-sm bg-white text-center shadow-md rounded">6</div>
                <div id="7" class="w-7 text-sm bg-white text-center shadow-md rounded">7</div>
                <div id="8" class="w-7 text-sm bg-white text-center shadow-md rounded">8</div>
                <div id="9" class="w-7 text-sm bg-white text-center shadow-md rounded">9</div>
                <div id="0" class="w-7 text-sm bg-white text-center shadow-md rounded">0</div>
            </div>
            <div class="flex flex-row space-x-2 justify-center">
                <div id="Q" class="w-7 text-sm bg-white text-center shadow-md rounded">Q</div>
                <div id="W" class="w-7 text-sm bg-white text-center shadow-md rounded">W</div>
                <div id="E" class="w-7 text-sm bg-white text-center shadow-md rounded">E</div>
                <div id="R" class="w-7 text-sm bg-white text-center shadow-md rounded">R</div>
                <div id="T" class="w-7 text-sm bg-white text-center shadow-md rounded">T</div>
                <div id="Y" class="w-7 text-sm bg-white text-center shadow-md rounded">Y</div>
                <div id="U" class="w-7 text-sm bg-white text-center shadow-md rounded">U</div>
                <div id="I" class="w-7 text-sm bg-white text-center shadow-md rounded">I</div>
                <div id="O" class="w-7 text-sm bg-white text-center shadow-md rounded">O</div>
                <div id="P" class="w-7 text-sm bg-white text-center shadow-md rounded">P</div>
            </div>
            <div class="flex flex-row space-x-2 justify-center">
                <div id="A" class="w-7 text-sm bg-white text-center shadow-md rounded">A</div>
                <div id="S" class="w-7 text-sm bg-white text-center shadow-md rounded">S</div>
                <div id="D" class="w-7 text-sm bg-white text-center shadow-md rounded">D</div>
                <div id="F" class="w-7 text-sm bg-white text-center shadow-md rounded">F</div>
                <div id="G" class="w-7 text-sm bg-white text-center shadow-md rounded">G</div>
                <div id="H" class="w-7 text-sm bg-white text-center shadow-md rounded">H</div>
                <div id="J" class="w-7 text-sm bg-white text-center shadow-md rounded">J</div>
                <div id="K" class="w-7 text-sm bg-white text-center shadow-md rounded">K</div>
                <div id="L" class="w-7 text-sm bg-white text-center shadow-md rounded">L</div>
            </div>
            <div class="flex flex-row space-x-2 justify-center">
    
                <div id="CAPSLOCK" class="w-7 text-sm bg-white text-center shadow-md rounded">^</div>
                <div id="Z" class="w-7 text-sm bg-white text-center shadow-md rounded">Z</div>
                <div id="X" class="w-7 text-sm bg-white text-center shadow-md rounded">X</div>
                <div id="C" class="w-7 text-sm bg-white text-center shadow-md rounded">C</div>
                <div id="V" class="w-7 text-sm bg-white text-center shadow-md rounded">V</div>
                <div id="B" class="w-7 text-sm bg-white text-center shadow-md rounded">B</div>
                <div id="N" class="w-7 text-sm bg-white text-center shadow-md rounded">N</div>
                <div id="M" class="w-7 text-sm bg-white text-center shadow-md rounded">M</div>
                <div id="." class="w-7 text-sm bg-white text-center shadow-md rounded">.</div>
                <div id="BACKSPACE" class="w-7 text-sm bg-white text-center shadow-md rounded"><-</div>
            </div>
            <div class="flex flex-row space-x-2 justify-center">
                <div id="num" class="w-12 text-sm bg-white text-center shadow-md rounded">123</div>
                <div id=" " class="w-40 text-sm bg-white text-center shadow-md rounded"></div>
                <div id="ENTER" class="w-16 text-sm bg-white text-center shadow-md rounded">ENTER</div>
            </div>
        </div>
      </div>
    </div>`;

  document.getElementById('container').innerHTML = temp;
  keysPressed = {};
  document.getElementById('keysTable').innerHTML = '';
};

// ------------------------------------------------------

const mobile = () => {
  let temp = `<div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <!-- Content -->
      <div class="flex flex-col justify-center items-center bg-yellow-300">
        <!-- Heading -->
        <div class="flex flex-col space-y-3 justify-center items-center p-8 mb-4">
          <h3 class="text-base text-black font-mono font-semibold">
            Keyboard Tester
          </h3>
          <p class="text-xs text-black font-mono">
            Test your keyboard easy and fast in any device.
          </p>
        </div>
        <!-- TextArea -->
            <textarea autofocus id="text-area" class="p-6 w-11/12 h-48 bg-white rounded-lg mb-16 font-mono outline-none" onkeydown = "textAreaDown(event)" placeholder="tap here first.."></textarea>
        <!-- Keyboard -->
        <div class="flex flex-col bg-slate-100 p-2 space-y-3 w-full">
            <div class="flex flex-row space-x-1 justify-center">
                <div id="1" class="w-7 text-sm bg-white text-center shadow-md rounded">1</div>
                <div id="2" class="w-7 text-sm bg-white text-center shadow-md rounded">2</div>
                <div id="3" class="w-7 text-sm bg-white text-center shadow-md rounded">3</div>
                <div id="4" class="w-7 text-sm bg-white text-center shadow-md rounded">4</div>
                <div id="5" class="w-7 text-sm bg-white text-center shadow-md rounded">5</div>
                <div id="6" class="w-7 text-sm bg-white text-center shadow-md rounded">6</div>
                <div id="7" class="w-7 text-sm bg-white text-center shadow-md rounded">7</div>
                <div id="8" class="w-7 text-sm bg-white text-center shadow-md rounded">8</div>
                <div id="9" class="w-7 text-sm bg-white text-center shadow-md rounded">9</div>
                <div id="0" class="w-7 text-sm bg-white text-center shadow-md rounded">0</div>
            </div>
            <div class="flex flex-row space-x-1 justify-center">
                <div id="Q" class="w-7 text-sm bg-white text-center shadow-md rounded">Q</div>
                <div id="W" class="w-7 text-sm bg-white text-center shadow-md rounded">W</div>
                <div id="E" class="w-7 text-sm bg-white text-center shadow-md rounded">E</div>
                <div id="R" class="w-7 text-sm bg-white text-center shadow-md rounded">R</div>
                <div id="T" class="w-7 text-sm bg-white text-center shadow-md rounded">T</div>
                <div id="Y" class="w-7 text-sm bg-white text-center shadow-md rounded">Y</div>
                <div id="U" class="w-7 text-sm bg-white text-center shadow-md rounded">U</div>
                <div id="I" class="w-7 text-sm bg-white text-center shadow-md rounded">I</div>
                <div id="O" class="w-7 text-sm bg-white text-center shadow-md rounded">O</div>
                <div id="P" class="w-7 text-sm bg-white text-center shadow-md rounded">P</div>
            </div>
            <div class="flex flex-row space-x-1 justify-center">
                <div id="A" class="w-7 text-sm bg-white text-center shadow-md rounded">A</div>
                <div id="S" class="w-7 text-sm bg-white text-center shadow-md rounded">S</div>
                <div id="D" class="w-7 text-sm bg-white text-center shadow-md rounded">D</div>
                <div id="F" class="w-7 text-sm bg-white text-center shadow-md rounded">F</div>
                <div id="G" class="w-7 text-sm bg-white text-center shadow-md rounded">G</div>
                <div id="H" class="w-7 text-sm bg-white text-center shadow-md rounded">H</div>
                <div id="J" class="w-7 text-sm bg-white text-center shadow-md rounded">J</div>
                <div id="K" class="w-7 text-sm bg-white text-center shadow-md rounded">K</div>
                <div id="L" class="w-7 text-sm bg-white text-center shadow-md rounded">L</div>
            </div>
            <div class="flex flex-row space-x-1 justify-center">
    
                <div id="CAPSLOCK" class="w-7 text-sm bg-white text-center shadow-md rounded">^</div>
                <div id="Z" class="w-7 text-sm bg-white text-center shadow-md rounded">Z</div>
                <div id="X" class="w-7 text-sm bg-white text-center shadow-md rounded">X</div>
                <div id="C" class="w-7 text-sm bg-white text-center shadow-md rounded">C</div>
                <div id="V" class="w-7 text-sm bg-white text-center shadow-md rounded">V</div>
                <div id="B" class="w-7 text-sm bg-white text-center shadow-md rounded">B</div>
                <div id="N" class="w-7 text-sm bg-white text-center shadow-md rounded">N</div>
                <div id="M" class="w-7 text-sm bg-white text-center shadow-md rounded">M</div>
                <div id="." class="w-7 text-sm bg-white text-center shadow-md rounded">.</div>
                <div id="BACKSPACE" class="w-7 text-sm bg-white text-center shadow-md rounded"><-</div>
            </div>
            <div class="flex flex-row space-x-1 justify-center">
                <div id="num" class="w-10 text-sm bg-white text-center shadow-md rounded">123</div>
                <div id=" " class="w-28 text-sm bg-white text-center shadow-md rounded"></div>
                <div id="ENTER" class="w-14 text-xs bg-white text-center shadow-md rounded">ENTER</div>
            </div>
        </div>
      </div>
    </div>
</div>`;

  document.getElementById('container').innerHTML = temp;
  keysPressed = {};
  document.getElementById('keysTable').innerHTML = '';
};

window.onload = function () {
  desktop();
};

let keysPressed = {};
let boolean = true;

const textAreaDown = event => {
  // console.log(event); // - check

  boolean = true;
  let { key, code } = event;

  if (keysPressed[key]) {
    keysPressed[key] += 1;
  } else {
    keysPressed[key] = 1;
  }

  // Escape-Key1Reset
  if (key == 'Escape') {
    reset();
  }

  if (key == 'Shift' || key == 'Alt' || key === 'Meta' || key == 'Control') {
    console.log(code.toUpperCase());

    document.getElementById(code.toUpperCase()).style.backgroundColor =
      '#7FFF00';

    setTimeout(() => {
      document.getElementById(code.toUpperCase()).style.backgroundColor =
        'white';
    }, 200);
  } else {
    console.log(key.toUpperCase());

    document.getElementById(key.toUpperCase()).style.backgroundColor =
      '#7FFF00';

    setTimeout(() => {
      document.getElementById(key.toUpperCase()).style.backgroundColor =
        'white';
    }, 200);
  }
};

// Reset
const reset = () => {
  document.getElementById('text-area').value = '';
  keysPressed = {};
  document.getElementById('keysTable').innerHTML = '';
  document.getElementById('tableContent').style.opacity = '0';
};

// Show-Count
const showCount = () => {
  document.getElementById('tableContent').style.opacity = '1';
  document.getElementById('keysTable').innerHTML = ''
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

const hideCount = () => {
  boolean = true;
  document.getElementById('keysTable').innerHTML = '';
  document.getElementById('tableContent').style.opacity = '0';
};
