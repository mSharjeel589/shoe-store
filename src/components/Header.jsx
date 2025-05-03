import React from "react";

export default function Header() {
  return (
    // <section className="max-w-screen-[1920px]">
    //   <img src="./src/assets/shoeBG.png" alt="" className="absolute right-0
    //   2xl:h-[100%]
    //   " />

    //   <div className="flex flex-row items-center justify-between gap-4">
    //     <img src="./src/assets/siteLogo.png" alt="LOGO" className="ml-8 
    //     [@media(min-width:1920px)]:w-52 [@media(min-width:1920px)]:h-48
    //     2xl:w-42 2xl: h-38
    //     " />
    //     <nav className="space-x-12 mr-8 text-white text-3xl">
    //       <a href="#hero">Home</a>
    //       <a href="#">How it works?</a>
    //       <a href="#">About</a>
    //       <a href="#">Testimonials</a>
    //       <a href="#">Contact Us</a>
    //     </nav>
    //   </div>

    //   <div id="hero" className="relative">
    //     <div className="flex flex-row items-center justify-center 
    //     [@media(min-width:1920px)]:gap-60
    //     2xl: gap-32">
    //       <p className="
    //       [@media(min-width:1920px)]:text-9xl
    //       2xl: text-8xl
    //        font-bold text-white leading-none">
    //         THE <br />
    //         SHOE <br />
    //         COMPANY
    //       </p> 
    //       <img src="./src/assets/heroShoe.png" alt="SHOE" className="2xl: w-[40%]" />
    //     </div>
    //   </div>
    // </section>
    <header className="flex items-center justify-between px-6 md:px-12 fixed w-full max-w-[1440px] left-[50%] -translate-x-[50%]">
      <a href="#">
        <img className="w-24 md:w-32" src="./src/assets/siteLogo.png" alt="" />
      </a>
      <nav className="hidden md:block space-x-6 lg:space-x-8 text-white font-bold lg:text-2xl">
        <a href="#">Home</a>
        <a href="how-it-works">How It Works</a>
        <a href="#about">About</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <button className="text-white text-5xl md:hidden">
      ☰
      </button>
    </header>
  );
}
