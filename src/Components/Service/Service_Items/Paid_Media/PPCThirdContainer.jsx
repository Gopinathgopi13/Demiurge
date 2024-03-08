import React from "react";
// import google from "../../../../assets/PM SVG/google.svg";
// import googleShopping from "../../../../assets/PM SVG/shopping.svg";
// import Meta from "../../../../assets/PM SVG/meta.svg";
// import YouTube from "../../../../assets/PM SVG/youTube.svg";
// import LinkedIn from "../../../../assets/PM SVG/linkedIn.svg";
// import Bing from "../../../../assets/PM SVG/bing.svg";
// import Twitter from "../../../../assets/PM SVG/twitter.svg";
// import Amazon from "../../../../assets/PM SVG/amazon.svg";
// import Sharechat from "../../../../assets/PM SVG/sharechat.svg";

function PPCThirdContainer() {
  return (
    <div className="max-w-[1280px] sm:flex sm:flex-col sm:justify-center  mx-auto px-4">
      <div className="lg:text-6xl text-3xl font-medium my-5 py-5 primaryColor">
        Our Platforms
      </div>
      <div className="grid lg:grid-cols-3 my-10">
        <div
          className="flex flex-col h-52 gap-5 border-r-2 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            {/* <img src={google} className="h-[40%]" /> */}
            <div className="text-xl font-semibold primaryColor">Google Ads</div>
          </div>
          <div className="text-white">
            We craft targeted ad campaigns on Google's expansive network to
            boost your visibility, drive website traffic, and increase
            conversions.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8 ">
            {/* <img src={googleShopping} className="h-[40%]" /> */}
            <div className="text-xl font-semibold primaryColor">
              Google Shopping Ads
            </div>
          </div>
          <div className="text-white">
            Utilizing Google's shopping platform, we showcase your products to
            potential customers, driving qualified leads and maximizing sales.
          </div>
        </div>
        <div
          className="flex flex-col h-52 gap-5 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            {/* <img src={Meta} className="h-[40%]" /> */}
            <div className="text-xl font-semibold primaryColor">Meta Ads</div>
          </div>
          <div className="text-white">
            With Meta Ads, we engage your audience across Facebook and
            Instagram, leveraging precise targeting to deliver impactful
            messages and drive results.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            {/* <img src={YouTube} className="h-[40%]" /> */}
            <div className="text-xl font-semibold primaryColor">
              YouTube Ads
            </div>
          </div>
          <div className="text-white">
            Harnessing the power of video, we create compelling YouTube ad
            campaigns to captivate audiences, drive brand awareness, and inspire
            action.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            {/* <img src={LinkedIn} className="h-[40%]" /> */}
            <div className="text-xl font-semibold primaryColor">
              LinkedIn Ads
            </div>
          </div>
          <div className="text-white">
            Targeting professionals on LinkedIn, we deliver tailored ads that
            resonate with your B2B audience, driving leads and fostering
            business growth.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-b-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            {/* <img src={Bing} className="h-[40%]" /> */}
            <div className="text-xl font-semibold primaryColor">Bing Ads</div>
          </div>
          <div className="text-white">
            Expand your reach beyond Google with Bing Ads, reaching a diverse
            audience and driving targeted traffic to your website or products.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            {/* <img src={Twitter} className="h-[40%]" /> */}
            <div>
              <svg
              
                xmlns="http://www.w3.org/2000/svg"
               className="h-12 w-12"
                fill="none"
                viewBox="0 0 512 512"
                id="twitter"
              >
                <g clip-path="url(#clip0_84_15698)">
                  <rect width="512" height="512" fill="#fff" rx="60"></rect>
                  <path
                    fill="#000"
                    d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_84_15698">
                    <rect width="512" height="512" fill="#fff"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-xl font-semibold primaryColor">
              Twitter Ads
            </div>
          </div>
          <div className="text-white">
            Engage with your audience in real-time with Twitter Ads, delivering
            timely messages and promotions to drive engagement and boost brand
            visibility.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 border-r-2 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            {/* <img src={Amazon} className="h-[40%]" /> */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                id="amazon"
              >
                <path
                  fill="#626A84"
                  d="M49.419 38.3c-.036-.07-.169-.139-.21-.206C47.707 36.176 46 34.531 46 30.837v-12.32c0-5.2.612-9.992-3.218-13.548C39.637 2.099 34.906 1 31.075 1h-1.644c-6.974.405-14.359 3.418-16.009 12.042-.271 1.099.552 1.507 1.097 1.643l7.664.958c.82-.138 1.233-.996 1.368-1.674C24.233 10.956 26.624 9 29.432 9h.55c1.644 0 3.264.858 4.219 2.229 1.093 1.641.799 4.006.799 5.924v1.094c-1 .135-3.675.27-5.727.54-3.146.417-6.212.963-8.81 2.196-5.062 2.054-8.445 6.434-8.445 12.864 0 1.653.247 3.133.65 4.453 1.564 5.126 5.922 7.73 11.15 7.73 2.188 0 3.97-.277 5.608-.681 2.605-.825 4.792-2.331 7.391-5.071 1.505 2.053 1.921 3.016 4.518 5.205.687.27 1.371.27 1.914-.134 1.645-1.373 4.521-3.838 6.022-5.205.619-.493.469-1.21.148-1.844zM29.273 25.085c1.777-.408 3.727-.547 5.727-.547v1.645c0 3.147.294 5.61-1.346 8.349-.958 1.915-2.524 3.147-4.301 3.562-.271 0-.643.136-1.055.136-3.007 0-4.845-2.326-4.845-5.748 0-4.384 2.538-6.433 5.82-7.397z"
                ></path>
                <path
                  fill="#4B506D"
                  d="M13.423 13.042c-.271 1.099.552 1.507 1.097 1.643l7.664.958c.82-.138 1.233-.996 1.368-1.674C24.233 10.956 26.567 9 29.432 9h.55c1.644 0 3.264.858 4.219 2.229 1.093 1.641.799 4.006.799 5.924v1.094c-1 .135-3.675.27-5.727.54-3.146.417-6.212.963-8.81 2.196-5.062 2.054-8.445 6.434-8.445 12.864 0 1.653.247 3.133.65 4.453 1.564 5.126 5.922 7.73 11.15 7.73 2.188 0 3.97-.277 5.608-.681 2.605-.825 4.792-2.331 7.391-5.071 1.505 2.053 1.921 3.016 4.518 5.205.687.27 1.371.27 1.914-.134 1.645-1.373 4.521-3.838 6.022-5.205.618-.493.468-1.211.147-1.845-.036-.07-.169-.139-.21-.206C47.707 36.176 46 34.531 46 30.837v-12.32c0-5.2.612-9.992-3.218-13.548M29.273 25.085c1.777-.408 3.727-.547 5.727-.547v1.645c0 3.147.294 5.61-1.346 8.349-.958 1.915-2.524 3.147-4.301 3.562-.271 0-.643.136-1.055.136-3.007 0-4.845-2.326-4.845-5.748 0-4.384 2.538-6.433 5.82-7.397z"
                ></path>
                <path
                  fill="#EA7B0C"
                  d="M56.359 49.018c.556-.004 1.106.036 1.45.108.17.038.325.082.393.117a.425.425 0 0 1 .07.026c.014.047.043.171.04.343.006.655-.267 1.874-.651 3.063-.371 1.188-.823 2.381-1.121 3.173-.072.182-.12.383-.12.602-.006.317.125.822.403 1.076.27.255.62.474.911.474h.015c.438 0 .811-.296 1.131-.546 3.024-2.723 4.082-7.128 4.125-9.574L63 47.431v-.004c0-.645-.168-1.138-.438-1.545l-.031-.042-.033-.039c-.273-.3-.537-.412-.821-.536-.851-.329-2.19-.504-3.678-.508-.602 0-1 .039-2 .112v4.153l.36-.004z"
                ></path>
                <path
                  fill="#FA9826"
                  d="M54.062 50.594c-.31-.004-.924.113-1.219.25-.332.131-.648.323-.969.457l-.625.371-.775.328s.185 0 0 0h5.357c-.284-.469-.957-1.406-1.769-1.406z"
                ></path>
                <path
                  fill="#FA9826"
                  d="M55.831 52h-5.357c-6.486 3-13.268 4.318-19.556 4.453C24.682 56.457 18.442 55 13.165 52 10.601 51 8 49.955 6 48.576c-1-.409-1.684-.82-2.425-1.231a2.317 2.317 0 0 0-.987-.235c-.375 0-.812.143-1.092.405-.281.266-.474.649-.47 1.041-.004.505.257.972.641 1.274C9.521 56.656 18.126 62.993 29.708 63c.225 0 .452-.007.681-.011 7.367-.164 15.695-2.655 22.163-6.719l.039-.023a22.838 22.838 0 0 0 2.49-1.723c.496-.368.838-1.188.838-1.788-.005-.175-.041.264-.088-.736zM54.57 45.118c-1.882.413-3.188 1.314-3.854 1.799-.416.31-.814.723-.831 1.353-.012.344.136.737.424.97a1.415 1.415 0 0 0 1.092.298l.055-.004.042-.007c.584-.122 1.327-.207 2.323-.347.765-.084 1.18-.145 2.18-.158v-4.153c-.001.058-.916.136-1.431.249z"
                ></path>
                <path
                  fill="#2A2B35"
                  d="M49.419 38.3C47.917 36.382 46 34.531 46 30.837V19.729c-3 2.194-8.259 3.88-13.3 4.883.746-.045 2.3-.073 2.3-.073v1.645c0 3.147.294 5.61-1.346 8.349-.958 1.915-2.524 3.147-4.301 3.562-.271 0-.643.136-1.055.136-3.007 0-4.766-2.326-4.766-5.748 0-4.122 2.11-6.164 5.113-7.195a53.089 53.089 0 0 1-6.364.368c-2.971 0-5.938.598-8.694 1.416-1.032 1.93-1.568 4.133-1.568 6.776 0 1.653.267 3.133.67 4.453 1.564 5.126 5.912 7.73 11.14 7.73 2.188 0 3.965-.277 5.604-.681 2.605-.825 4.789-2.331 7.389-5.071 1.505 2.053 1.92 3.016 4.517 5.205.687.27 1.37.27 1.913-.134 1.645-1.373 4.521-3.838 6.022-5.205.617-.494.466-1.211.145-1.845-.036-.071.041.067 0 0z"
                ></path>
                <path
                  fill="#EA7B0C"
                  d="M55.831 52h-5.357c-6.486 3-14.694 7.482-20.983 7.619-.236.008.231 0 0 0-6.236.004-11.048-.873-16.325-3.316L6.83 53.089a15.377 15.377 0 0 1-3.439-1.788c7.395 6.229 15.576 11.686 26.311 11.691.225 0 .455-.003.685-.007 7.367-.164 15.696-2.653 22.164-6.717l.039-.022a22.838 22.838 0 0 0 2.49-1.723c.496-.367.839-1.268.839-1.867a7.61 7.61 0 0 0-.088-.656z"
                ></path>
              </svg>
            </div>
            <div className="text-xl font-semibold primaryColor">Amazon Ads</div>
          </div>
          <div className="text-white">
            Tap into the massive e-commerce audience on Amazon with targeted ad
            campaigns, increasing product visibility and driving sales.
          </div>
        </div>

        <div
          className="flex flex-col h-52 gap-5 p-5"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="h-[40%] flex items-center gap-8">
            {/* <img src={Sharechat} className="h-[40%]" /> */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12"
                viewBox="0 0 375.16 375.16"
                id="sharechat"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path
                      fill="#494949"
                      d="M 375.23,187.61 C 375.23,135.16 299.43,48.44 234.92,14.38 217.79,5.36 201.5,0 187.61,0 170.83,0 150.46,7.76 129.52,20.45 109.07,32.78 88,49.85 69,68.88 49.76,88.13 32.55,109.42 20.14,130.08 7.73,150.74 0,170.9 0,187.54 c 0,66.35 121.27,187.62 187.61,187.62 16.78,0 37,-7.76 58,-20.38 20.44,-12.34 41.6,-29.47 60.7,-48.51 19.1,-19.04 36.38,-40.47 48.72,-61 12.51,-20.85 20.2,-41.02 20.2,-57.66 z"
                    ></path>
                    <path
                      fill="#40c9ff"
                      d="M 249.16,126.06 A 706.84,706.84 0 0 0 187.82,68.6 C 169.82,53.8 151.3,40.54 132.76,30.04 113.51,41.67 93.63,57.74 75.65,75.72 l 111.89,111.89 z"
                    ></path>
                    <path
                      fill="#9661ba"
                      d="M 232.24,24.25 C 216.1,15.72 200.73,10.72 187.61,10.72 c -15.86,0 -35,7.33 -54.78,19.32 18.54,10.43 37.09,23.76 55.07,38.56 z"
                    ></path>
                    <path
                      fill="#ffa233"
                      d="M 245.92,245.92 187.61,187.61 75.72,75.72 C 57.53,93.84 41.32,114 29.61,133.47 67.05,198.19 138.26,263 188.11,303.73 Z"
                    ></path>
                    <path
                      fill="#ff5a7e"
                      d="m 242.25,345.26 c -4.51,-3.17 -25.94,-18.54 -54.14,-41.6 C 138.26,263 67.05,198.19 29.61,133.47 17.91,153 10.72,172 10.72,187.61 c 0,62.54 114.36,176.9 176.89,176.9 15.8,0 34.9,-7.33 54.64,-19.25 z"
                    ></path>
                    <path
                      fill="#ffd91d"
                      d="M 364.51,187.61 C 364.51,138.19 293.02,56.4 232.24,24.25 L 187.9,68.6 a 707.26,707.26 0 0 1 61.26,57.46 l -61.55,61.55 58.31,58.31 -57.81,57.81 c 28.27,23.06 49.63,38.36 54.14,41.6 19.32,-11.63 39.2,-27.78 57.25,-45.76 18.05,-17.98 34.27,-38.14 46,-57.6 11.82,-19.67 19.01,-38.63 19.01,-54.36 z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-xl font-semibold primaryColor">
              Sharechat Ads
            </div>
          </div>
          <div className="text-white">
            Reach India's diverse and engaged audience on ShareChat with
            targeted ads that drive brand awareness and engagement.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PPCThirdContainer;
