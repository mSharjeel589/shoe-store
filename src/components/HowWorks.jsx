import React from "react";

export default function HowWorks() {
  return (
    <section
      id="how-it-works"
      className="section-container text-white pt-12 relative"
    >
      <h2 className=" text-center text-3xl font-bold max-w-md mx-auto">
        Have they finally made the perfect workout shoe?
      </h2>

      <div className="max-w-2xl mx-auto mt-12">
        <img className="w-full" src="./src/assets/workShoe.png" alt="" />
      </div>

      <div className="max-w-xs mx-auto absolute top-0 translate-y-1/2">
        <h3 className="text-2xl font-bold">THE HEEL</h3>
        <p className="text-lg">
          The heel is well-built, has appropriate elevation and is not too
          rigid.
        </p>
        <img className="ml-auto" src="./src/assets/heel.png" alt="THE HEEL" />
      </div>

      <div className="max-w-xs absolute top-0 right-60 translate-y-1/2">
        <img
          className="-ml-24 mt-10"
          src="./src/assets/front.png"
          alt="THE FRONT"
        />
        <h3 className="text-2xl font-bold">THE FRONT</h3>
        <p className="text-lg">
          The front is comfortable and <br />
          adjusts well to the shape of <br /> your foot.
        </p>
      </div>

      <div className="max-w-md mx-auto absolute bottom-0 left-44 flex">
        <div className="mt-16 ml-8">
          <h3 className="text-2xl font-bold">TRACTION</h3>
          <p className="text-lg">
            The shoe has good traction and doesn't slip easily.
          </p>
        </div>

        <img
          className="w-44 mb-5"
          src="./src/assets/traction.png"
          alt="THE HEEL"
        />
      </div>
    </section>
  );
}
