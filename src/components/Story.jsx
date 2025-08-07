import React from "react";
import AnimatedTitle from "./AnimatedTitle";

function Story() {
  return (
    <div className="mix-w-dvh w-screen bg-black text-blue-50 ">
      <div className="flex size-full flex-col items-center py-10pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
            sectionId="#story"
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
