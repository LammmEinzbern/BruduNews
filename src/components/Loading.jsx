import React from "react";
import { Vortex } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center flex-col p-10 sm:p-20 md:p-32 lg:p-52">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
      <h2 className="text-center text-sm sm:text-base md:text-lg lg:text-xl mt-5">
        Tapi tunggu dulu jangan terbulu-bulu...
      </h2>
    </div>
  );
}
