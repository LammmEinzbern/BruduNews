import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";

const InternationalNews = () => {
  const [berita, setBerita] = useState([]);
  const getBerita = async () => {
    const response = await axios.get(
      "https://berita-indo-api-next.vercel.app/api/cnn-news/internasional"
    );

    setBerita(response.data.data);
  };

  useEffect(() => {
    getBerita();
  });
  return (
    <>
      <Header />
      <main className="p-10 ">
        <h2 className="text-center text-2xl font-bold">Berita Hari ini</h2>
        <div className="grid grid-cols-3 my-5 gap-5">
          {berita.map((news, index) => (
            <Card news={news} index={index} />
          ))}
          ;
        </div>
      </main>
    </>
  );
};

export default InternationalNews;
