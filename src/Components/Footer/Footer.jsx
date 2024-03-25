import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
function Footer() {
  const handlePhoneNumberClick = ({ phoneNumber = 6369907822 }) => {
    console.log(phoneNumber);
    window.open(`tel:${phoneNumber}`);
  };
  const handleClick = () => {
    window.location.href = `mailto:john@demiurge.in`;
  };
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Get the latest news!
                </h2>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  non cupiditate quae nam molestias.
                </p>
              </div>
            </div> */}

            {/* <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="$$$$$$$@gmail.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent outline-none sm:text-sm dark:bg-gray-900 dark:text-white"
                  />

                  <button className="mt-1 w-full bg-[#0c2d57] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div> */}

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 ">
                Services
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    SEO Optimisation
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Graphic Design
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Brand Development
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Youtube Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    PPC Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 ">
                Company
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 ">
                Industries
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Small Business
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    eCommerce
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Mobile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Startup
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    B2B
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 ">
                Contact Us
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="text-gray-700 transition hover:opacity-75  flex items-center gap-2 cursor-pointer">
                  <IoMdMail />{" "}
                  <div onClick={handleClick}>john@demiurge.in</div>
                </li>

                <li className="text-gray-700 transition hover:opacity-75  flex items-center gap-2 cursor-pointer">
                  <FaPhone />{" "}
                  <div onClick={handlePhoneNumberClick}>9627396283</div>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 ">
                Address
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="text-gray-700 transition hover:opacity-75 flex gap-2">
                  <div className="pt-1">
                    <FaLocationDot />
                  </div>
                  <div>
                    Phase 1, workflows by oyo, GREETA TOWERS, Greeta Techpark,
                    99, Rajiv Gandhi Salai, Industrial Estate, Perungudi,
                    Chennai, Tamil Nadu 600096
                  </div>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#E48F45] transition hover:opacity-75 "
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#E48F45] transition hover:opacity-75 "
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#E48F45] transition hover:opacity-75 "
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#E48F45] transition hover:opacity-75 "
                >
                  <span className="sr-only">Youtube</span>
                  <svg
                    fill="currentColor"
                    className="h-6 w-6"
                    version="1.1"
                    viewBox="0 0 310 310"
                  >
                    <path
                      d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
          C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
          C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
          c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
          c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
          C204.394,157.263,202.325,160.684,199.021,162.41z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 ">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 ">
              &copy; 2024. Demiurge. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 "
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 "
                >
                  Privacy Policy
                </a>
              </li>

              {/* <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 "
                >
                  Cookies
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
