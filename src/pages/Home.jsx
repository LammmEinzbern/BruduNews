import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import useDate from "../hooks/useDate";
import Loading from "../components/Loading";

const Home = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dayName, date, monthName, years } = useDate();
  const [countBerita, setCountBerita] = useState(6);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const loadBerita = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountBerita((prev) => prev + 3);
      setLoadingBtn(false);
    }, 2000);
  };

  const getBerita = async () => {
    try {
      const response = await axios.get(
        "https://berita-indo-api-next.vercel.app/api/cnn-news/"
      );

      setBerita(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBerita();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className="p-4 sm:p-6 lg:p-10 bg-gray-800">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Berita Hari ini {dayName}, {date} {monthName} {years}
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-4 lg:gap-5">
            {berita.slice(0, countBerita).map((news, index) => (
              <Card key={index} news={news} index={index} />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            {loadingBtn ? (
              <h2 className="text-white font-bold">Loading...</h2>
            ) : (
              <button
                className="text-white font-bold py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded"
                onClick={loadBerita}
              >
                Lihat lebih banyak
              </button>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
