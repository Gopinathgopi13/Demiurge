import React from "react";
import SearchEO from "../../../../assets/web1.jpg";
import SearchEO2 from "../../../../assets/wev2.jpg";
import phone from "../../../../assets/SVG/phone.svg";
import cross from '../../../../assets/Mobile App Development/platform.png'
import ios from '../../../../assets/Mobile App Development/apple.png'
import android from '../../../../assets/Mobile App Development/android.png'
import ux from '../../../../assets/Mobile App Development/ux-interface.png'
import iosApp from '../../../../assets/Mobile App Development/IOS.jpg'
import androidApp from '../../../../assets/Mobile App Development/Android.avif'
import crossPlatform from '../../../../assets/Mobile App Development/Cross.jpg'
function MobileSecondContainer() {
  return (
    <div className="max-w-[1280px] mx-auto space-y-10 py-20">
      <div className="text-white space-y-10 px-5">
        <div className="md:text-4xl font-semibold primaryColor text-3xl">
          Crafting modern designs is our specialty. As a professional mobile app
          design agency, we excel in delivering top-notch solutions
        </div>
        <div className="text-xl">
          <p>
            At our core, we're masters at crafting mobile apps that stand out
            for their performance, design, and value. With a talented team of
            developers, we create cutting-edge apps rooted in strong UI
            principles and captivating user experiences. Our research-centric
            approach ensures that businesses can extract maximum value from
            their users through winning applications. As a comprehensive mobile
            app design company, here are the solutions we offer:
          </p>
        </div>
      </div>

      {/* Mobile App UX Design*/}
      <div className="w-[95%] grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-[#0c2d57]  rounded-xl ">
        <div className="w-full rounded-xl overflow-hidden">
          <img src={SearchEO} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div>
            <img src={ux} className="h-28 " alt="" />
          </div>
          <div className="font-semibold text-2xl primaryColor">
            Mobile App UX Design
          </div>
          <p className="text-white">
            Crafting mobile apps with intuitive layouts, seamless navigation,
            and an effortless user journey is our specialty. From eye-catching
            app icons to thoughtful screen transitions and innovative gestures,
            we obsess over every detail that contributes to an exceptional
            mobile experience.
          </p>
        </div>
      </div>

      {/* Cross-Platform App Development */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-[#0c2d57] rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={crossPlatform} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div>
            <img src={cross} className="h-28" alt="" />
          </div>
          <div className="font-semibold text-2xl primaryColor">
            Cross-Platform App Development
          </div>
          <p className="text-white">
            We excel in crafting hybrid applications that seamlessly operate
            across multiple platforms such as Windows, Android, and iOS. Our
            designs ensure uniformity and optimal performance across different
            operating systems.
          </p>
        </div>
      </div>

      {/*  IOS App Development */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-[#0c2d57] rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={iosApp} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div>
            <img src={ios} className="h-28" alt="" />
          </div>
          <div className="font-semibold text-2xl primaryColor">
            IOS App Development
          </div>
          <p className="text-white">
            At an affordable cost, we engineer iOS applications that boast
            extensive compatibility across the Apple ecosystem, spanning
            iPhones, iPads, and even Apple Watches. Our solutions ensure
            seamless integration and optimal performance across various Apple
            devices.
          </p>
        </div>
      </div>

      {/* Android App Development */}
      <div className="w-[95%]  grid sm:grid-cols-2 mx-auto py-10 md:px-10 px-5 gap-5 bg-[#0c2d57] rounded-xl ">
        <div className="rounded-xl overflow-hidden">
          <img src={androidApp} className="w-full h-full" alt="" />
        </div>
        <div className="space-y-5 flex flex-col justify-center px-5">
          <div>
            <img src={android} className="h-28" alt="" />
          </div>
          <div className="font-semibold text-2xl primaryColor">
            Android App Development
          </div>
          <p className="text-white">
            Our native Android apps are tailored to enhance your web-based
            platforms, catering to your users' needs while they're on the move.
            They resonate with your users' preferences, ensuring a seamless
            experience wherever they are.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileSecondContainer;
