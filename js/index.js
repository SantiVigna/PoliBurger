const requestURL = '../json/products.json' ;

async function fetchBurgerJson(){
    try{
        const response = await fetch(requestURL);
        if (!response.ok) {
            throw new Error(`Error en la petacion ${response.status}`);
        }
        return await response.json();
    }
    catch (error){
        console.error(`Error al obtener los burgers de la API : `,error);
        return null;
    }
}

function creatBurgerCard () {
    return `<!-- component -->
<div class="h-screen w-full flex bg-gray-800">
      <nav class="w-24 flex flex-col items-center bg-gray-900 py-4">
        <div class="text-lg font-semibold text-white">Le Festin</div>
        <!-- nav content -->
        <ul class="mt-2 text-gray-300 font-semibold">
          <li class="mt-3 t">
            <a href="#" class="flex flex-col items-center text-sm capitalize">
              <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                ></path>
              </svg>
              <span>pizza</span>
            </a>
          </li>
          <li class="mt-3 t">
            <a href="#" class="flex flex-col items-center text-sm capitalize">
              <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                ></path>
              </svg>
              <span>Drink</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- main -->
      <main class="w-full overflow-y-auto">
        <div class="px-10 mt-5">
          <span class="uppercase font-bold text-2xl text-white"
            >special food</span
          >
        </div>
        <div class="px-10 grid grid-cols-4 gap-4">
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
          >
            <div class="bg-white rounded-lg mt-5">
              <img
                src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
                class="h-40 rounded-md"
                alt=""
              />
            </div>
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-800 text-lg">Geek Pizza</span>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-600 font-light">
                    Size : Regular
                  </div>
                  <div class="text-2xl text-red-600 font-bold">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->
        </div>
      </main>
    </div>`;
}
async function displayBurger( {id, description, name, image, price}) {
    const burgerSection = document.getElementById(`burgerSection`);
    const burgersData = await fetchBurgerJson();

    if (burgersData && burgersData.burgers){
        const burgerCards = burgersData.map(creatBurgerCard).join('');
        burgerSection.innerHTML = burgerCards;
    }
    else{
        burgerSection.innerHTML = `<p>No se ha podido cargar el Json de los burgers</p>`
    }
}
displayBurger();