import React from "react";
import ModalComponents from "./ModalComponents";

const Card = ({ news, index }) => {
  return (
    <div key={index} className="shadow 2xl p-1 rounded-lg bg-white">
      <img
        src={news.image.small}
        alt={news.title}
        className="rounded-lg w-full"
      />

      <div className="p-3 mt-3">
        <p className="text-black">{news.isoDate.slice(0, 10)}</p>
        <h2 className="font-bold text-xl truncate text-black">{news.title}</h2>
        <p className="mt-3 truncate text-black">{news.contentSnippet}</p>
        <ModalComponents news={news} />
      </div>
    </div>
  );
};

export default Card;
