import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useDate from "../hooks/useDate";
import Loading from "../components/Loading";

const Berita = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { dayName, date, monthName, years } = useDate();
  const location = useLocation();
  const [countBerita, setCountBerita] = useState(6);
  const navigate = useNavigate();
  const [loadingBtn, setLoadingBtn] = useState(false);

  const loadBerita = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setCountBerita((prev) => prev + 3);
      setLoadingBtn(false);
    }, 2000);
  };

  const getBerita = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://berita-indo-api-next.vercel.app/api/cnn-news/${id}`
      );
      setBerita(response.data.data);
    } catch (error) {
      if (error.response.status === 400) {
        navigate("/not-found");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBerita();
  }, [id]);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className="p-4 sm:p-6 lg:p-10 bg-gray-800">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold capitalize text-white">
            Berita {location.pathname.substring(1)} {dayName}, {date}{" "}
            {monthName} {years}
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

export default Berita;
