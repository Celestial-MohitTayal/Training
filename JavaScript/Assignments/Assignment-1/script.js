const desktop = () => {
  let temp = `<div
          class="mx-auto mt-40 w-min flex flex-col space-y-4 m-auto border-8 rounded-xl border-black justify-center items-center"
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
          <div class="p-4 w-full h-56 bg-white border-none">Text Area</div>
          <!-- Keyboard -->
          <!-- Flex-Col Container -->
          <div class="flex flex-col w-full space-y-1 p-4 bg-slate-100">
            <!-- Row-1 -->
            <div class="flex flex-row space-x-2">
              <div class="w-14 text-center bg-white shadow-lg rounded">esc</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F1</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F2</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F3</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F4</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F5</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F6</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F7</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F8</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F9</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F10</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F11</div>
              <div class="w-11 text-center bg-white shadow-lg rounded">F12</div>
            </div>
            <!-- Row-2 -->
            <div class="flex flex-row space-x-2">
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                ~ 
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                ! <br />
                1
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                @ <br />
                2
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                # <br />3
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                $ <br />
                4
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                % <br />
                5
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                ^ <br />
                6
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                & <br />
                7
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                * <br />
                8
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                ( <br />
                9
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                ) <br />
                10
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                _ <br />
                -
              </div>
              <div class="w-10 text-sm bg-white text-center shadow-lg rounded">
                + <br />
                =
              </div>
              <div class="w-14 text-center text-sm bg-white shadow-lg rounded">
                back space
              </div>
            </div>
            <!-- Row-3 -->
            <div class="flex flex-row space-x-2">
              <div class="w-14 bg-white text-center shadow-lg rounded">tab</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">Q</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">W</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">E</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">R</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">T</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">Y</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">U</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">I</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">O</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">P</div>
              <div class="w-10 text-xs bg-white text-center shadow-lg rounded">
                { <br />
                [
              </div>
              <div class="w-10 text-xs bg-white text-center shadow-lg rounded">
                } <br />
                ]
              </div>
              <div class="w-10 text-xs bg-white text-center shadow-lg rounded">
                | <br />
                \
              </div>
            </div>
            <!-- Row-4 -->
            <div class="flex flex-row space-x-2">
              <div class="w-20 bg-white text-center shadow-lg rounded">
                caps lock
              </div>
              <div class="w-10 bg-white text-center shadow-lg rounded">A</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">S</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">D</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">F</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">G</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">H</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">J</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">K</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">L</div>
              <div class="w-10 text-xs bg-white text-center shadow-lg rounded">
                : <br />
                ;
              </div>
              <div class="w-10 text-xs bg-white text-center shadow-lg rounded">
                " <br />
                '
              </div>
              <div class="w-16 text-center bg-white shadow-lg rounded">
                enter
              </div>
            </div>
            <!-- Row-5 -->
            <div class="flex flex-row space-x-2">
              <div class="w-24 bg-white text-center shadow-lg rounded-md">
                shift
              </div>
              <div class="w-10 bg-white text-center shadow-lg rounded">Z</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">X</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">C</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">V</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">B</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">N</div>
              <div class="w-10 bg-white text-center shadow-lg rounded">M</div>
              <div class="w-10 text-xs bg-white text-center shadow-lg rounded">
                < <br />
                ,
              </div>
              <div class="w-10 text-xs bg-white text-center shadow-xl rounded">
                > <br />
                .
              </div>
              <div class="w-10 text-xs bg-white text-center shadow-xl rounded">
                " <br />
                /
              </div>
              <div class="w-24 bg-white text-center shadow-xl rounded">
                shift
              </div>
            </div>
            <!-- Row-6 -->
            <div class="flex flex-row space-x-2">
              <div class="w-16 h-8 bg-white text-center shadow-xl rounded">
                ctrl
              </div>
              <div class="w-14 h-8 bg-white text-center shadow-xl rounded">
                win
              </div>
              <div class="w-14 h-8 bg-white text-center shadow-xl rounded">
                alt
              </div>
              <div
                class="w-72 h-8 bg-white text-center shadow-xl rounded"
              ></div>
              <div class="w-12 h-8 bg-white text-center shadow-xl rounded">
                alt
              </div>
              <div class="w-14 h-8 bg-white text-center shadow-xl rounded">
                win
              </div>
              <div class="w-16 h-8 bg-white text-center shadow-xl rounded">
                ctrl
              </div>
            </div>
          </div>
        </div>`;

  document.getElementById('container').innerHTML = temp;
};

// -----------------------------

const tablet = () => {
  let temp = `<div
      class="mx-auto mt-40 w-min rounded-2xl border-black border-[16px]"
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
            <div class="p-6 w-11/12 h-56 bg-white rounded-lg mb-16">Text Area</div>
        <!-- Keyboard -->
        <div class="flex flex-col bg-slate-100 p-4 space-y-2 w-full">
            <div class="flex flex-row space-x-2 justify-center">
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">1</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">2</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">3</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">4</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">5</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">6</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">7</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">8</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">9</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">0</div>
            </div>
            <div class="flex flex-row space-x-2 justify-center">
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">Q</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">W</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">E</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">R</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">T</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">Y</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">U</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">I</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">O</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">P</div>
            </div>
            <div class="flex flex-row space-x-2 justify-center">
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">A</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">S</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">D</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">F</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">G</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">H</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">J</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">K</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">L</div>
            </div>
            <div class="flex flex-row space-x-2 justify-center">
    
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">^</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">Z</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">X</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">C</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">V</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">B</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">N</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">M</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">,</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">.</div>
            </div>
            <div class="flex flex-row space-x-2 justify-center">
                <div class="w-12 text-sm bg-white text-center shadow-md rounded">123</div>
                <div class="w-40 text-sm bg-white text-center shadow-md rounded"></div>
                <div class="w-16 text-sm bg-white text-center shadow-md rounded">ENTER</div>
            </div>
        </div>
      </div>
    </div>`;

  document.getElementById('container').innerHTML = temp;
};

// ------------------------------------------------------

const mobile = () => {
  let temp = `<div class="relative mx-auto my-40 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
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
            <div class="p-6 w-11/12 h-48 bg-white rounded-lg mb-16">Text Area</div>
        <!-- Keyboard -->
        <div class="flex flex-col bg-slate-100 p-2 space-y-3 w-full">
            <div class="flex flex-row space-x-1 justify-center">
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">1</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">2</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">3</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">4</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">5</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">6</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">7</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">8</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">9</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">0</div>
            </div>
            <div class="flex flex-row space-x-1 justify-center">
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">Q</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">W</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">E</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">R</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">T</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">Y</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">U</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">I</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">O</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">P</div>
            </div>
            <div class="flex flex-row space-x-1 justify-center">
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">A</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">S</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">D</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">F</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">G</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">H</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">J</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">K</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">L</div>
            </div>
            <div class="flex flex-row space-x-1 justify-center">
    
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">^</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">Z</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">X</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">C</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">V</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">B</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">N</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">M</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">,</div>
                <div class="w-7 text-sm bg-white text-center shadow-md rounded">.</div>
            </div>
            <div class="flex flex-row space-x-1 justify-center">
                <div class="w-10 text-sm bg-white text-center shadow-md rounded">123</div>
                <div class="w-28 text-sm bg-white text-center shadow-md rounded"></div>
                <div class="w-14 text-xs bg-white text-center shadow-md rounded">ENTER</div>
            </div>
        </div>
      </div>
    </div>
</div>`;

  document.getElementById('container').innerHTML = temp;
};
