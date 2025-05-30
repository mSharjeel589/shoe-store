import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[url(./src/assets/shoeBG.png)] bd-cover md:bg-contain bg-no-repeat bg-right pt-36 section-container"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between px-12 mx-auto max-w-6xl">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-[48px] md:leading-[72px]">
          THE <br />
          SHOE <br />
          COMPANY
        </h1>
        <div className="max-w-xl">
          <img className="w-full" src="./src/assets/heroShoe.png" alt="" />
        </div>
      </div>
    </section>
  );
}
