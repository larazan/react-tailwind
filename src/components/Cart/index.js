import React from "react";

const Cart = ({ cartOpen, cartToggle }) => {
  return (
    <>
      <aside
        className={`px-8 transform top-0 right-0 w-full md:w-1/4 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="mt-4">
            <button className="h-8 w-8" onClick={cartToggle}>
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white">
          <div>
            <div className="">
              <div className="font-semibold text-base text-center">
                <p>Your Cart</p>
              </div>
              <div className="border-t mt-4"></div>
            </div>
          </div>
          <div className="border-t-0 z-10">
            <div className="mx-auto">
              <div className="py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="h-20 w-20">
                  <img
                    src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WZ1MMET_SHOE_ANGLE_GLOBAL_MENS_WOOL_DASHER_MIZZLE_LOW_METEORITE_GREY.png?v=1604598983"
                    alt="img product"
                  />
                </div>
                <div className="px-4 flex-auto text-sm w-32">
                  <div className="font-semibold">Women's Wool Dasher Mizzles</div>
                  <div className="text-xs font-light">Meteorite (Grey Sole)</div>
                  <div className="text-xs font-light">Size: 5.5</div>
                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                  <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                    <button className="h-4 w-4">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <span className="font-light">$135</span>
                </div>
              </div>
              <div className="py-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="h-20 w-20">
                  <img
                    src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_200,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WZ1MMET_SHOE_ANGLE_GLOBAL_MENS_WOOL_DASHER_MIZZLE_LOW_METEORITE_GREY.png?v=1604598983"
                    alt="img product"
                  />
                </div>
                <div className="px-4 flex-auto text-sm w-32">
                  <div className="font-semibold">Women's Wool Dasher Mizzles</div>
                  <div className="text-xs font-light">Meteorite (Grey Sole)</div>
                  <div className="text-xs font-light">Size: 5.5</div>
                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                  <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                    <button className="h-4 w-4">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <span className="font-light">$135</span>
                </div>
              </div>

              <div className="py-4 flex bg-white border-b border-gray-100">
                <div>
                  <button className="h-8 w-8">
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </button>
                </div>
                <div className="px-4 flex-auto w-32 items-center">
                  <div className="text-sm font-light">Gifting? <a href="#" className="underline">Add a Note</a></div>
                </div>
              </div>

              <div className="py-4">
                <div className="py-1 flex">
                  <div className="flex-auto"><p className="font-semibold">Subtotal</p></div>
                  <div className="flex flex-col w-18 font-medium items-end"><p className="font-light">$135 USD</p></div>
                </div>

                <div className="py-1 flex">
                  <div className="flex-auto"><p className="font-semibold">Shipping</p></div>
                  <div className="flex flex-col w-18 font-medium items-end"><p className="font-light">Free</p></div>
                </div>
              </div>

              <div className="py-4 w-full flex">
                <button
                  className="
                    text-base 
                    hover:scale-110  
                    w-full 
                    justify-center 
                    uppercase 
                    text-white 
                    px-4 py-2 
                    rounded 
                    font-semibold 
                    cursor-pointer 
                    bg-gray-800
                    hover:border-gray-800 hover:bg-white transition hover:text-gray-700
                    border duration-200 ease-in-out 
                  "
                >
                  Checkout
                </button>
                {/* <button
                  className="text-base  undefined  hover:scale-110  flex w-full justify-center uppercase text-white px-4 py-2 rounded font-semibold cursor-pointer 
        
        bg-gray-800
        focus:border-white focus:ring-0 transition
        border duration-200 ease-in-out 
        "
                >
                  Checkout
                </button> */}
                
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Cart;
