import Bg from "../assets/BG 1.png";
import Sambutan from "../assets/sambutan.png";
import Kahim from "../assets/kahim.png";
import Wakahim from "../assets/wakahim.png";
import Tag from "../assets/tag.png";
import { useState } from "react";

const Welcome = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="-mt-16 md:-mt-32"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="py-10 px-5">
          <div>
            <img className="pt-16 mx-auto lg:pt-28" src={Sambutan} alt="" />
          </div>
          <div className="grid flex-col mx-auto pt-10 md:grid-cols-2 md:justify-center md:gap-2 lg:grid-cols-4 lg:pt-20">
            <div className="flex flex-col items-center w-full">
              <img
                className="mx-auto w-[195px] md:w-[230px] lg:h-[355px] lg:w-[210px]"
                src={Kahim}
                alt=""
              />
              <button className="bg-[#D98020] text-white text-lg font-semibold rounded-full px-16 py-1.5 md:text-2xl">
                Jalu Tri Atmaja
              </button>
              <div>
                <img
                  className="mx-auto w-[160px] -mt-2 md:w-[200px] md:-mt-3"
                  src={Tag}
                  alt=""
                />
                <p className="text-center text-white text-lg font-semibold -mt-9 md:text-2xl md:-mt-10">
                  Kahim
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-12 lg:order-last">
              <img
                className="mx-auto w-[290px] -mt-2 md:-mt-10 md:w-[340px]"
                src={Wakahim}
                alt=""
              />
              <button className="bg-[#D98020] text-white text-lg font-semibold rounded-full px-10 py-1.5 md:text-2xl">
                Satriyo Imam Arifin
              </button>
              <div>
                <img
                  className="mx-auto w-[160px] -mt-2 md:w-[200px] md:-mt-3"
                  src={Tag}
                  alt=""
                />
                <p className="text-center text-white text-lg font-semibold -mt-9 md:text-2xl md:-mt-10">
                  Wakahim
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10 px-5 text-justify text-[16px] md:col-span-2 md:mt-10 md:text-[20px] lg:text-[24px] lg:mt-0">
              <span className="font-extrabold text-black">
                Assalamualaikum Wr. Wb., Shalom, Om Swastyastu, Namo Buddhaya,
                Salam Kebajikan Bagi Kita Semua.
              </span>
              <br />
              <span className={`text-black ${open ? null : "line-clamp-[9]"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eveniet accusamus alias veritatis a. Dolor officia
                accusamus ipsum ducimus numquam, consectetur recusandae fugit
                iste facere consequuntur quidem neque tempore architecto aut,
                natus quaerat atque. Error nostrum repellendus, quibusdam
                eveniet veniam culpa consequatur labore deleniti, cupiditate
                voluptas quam illum, atque esse commodi dolorem sapiente ex
                natus! Est quas temporibus voluptatem ullam dolorem iusto
                voluptates dolore similique. Explicabo distinctio facilis
                recusandae totam pariatur soluta minima, eaque quisquam
                laudantium veniam eius et reprehenderit doloribus, praesentium
                expedita vel laborum earum nemo, assumenda delectus dignissimos
                inventore qui. Unde fuga alias nisi nihil, a omnis fugit.
              </span>
              <button
                className="text-orange-500 text-start"
                onClick={() => setOpen(!open)}
              >
                {open ? "Lebih sedikit" : "Selengkapnya"}
              </button>
              <br />
              <span className="font-extrabold text-black">
                HMP SI UNESA 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
