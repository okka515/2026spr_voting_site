import React from "react";
import { mentors } from "../data/mentors";
import top_left from "../assets/key_left.svg";
import top_right from "../assets/Gemini_Generated_Image_h8s2cah8s2cah8s2.png";
import top_background from "../assets/key_visual.png";

const sortedMentors = [...mentors].sort((a, b) => a.id - b.id);

const FirstSection: React.FC = () => {
  // URL の末尾が "/ayapo" なら true
  const useJokeImages = window.location.hash.endsWith("/ayapo");

  // useJokeImages が true なら固定画像、false なら mentor.img を利用
  const getImageSrc = (mentor: { id: number; img: string }) =>
    useJokeImages
      ? "/assets/mentors-joke/ayapo.svg"
      : `/assets/mentors/${mentor.img}`;

  return (
    <section className="relative overflow-hidden">
      <img src={top_background} alt="Key Visual" className="w-full" />
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        <div className="grid grid-cols-8 grid-rows-3 transform scale-80 mt-[2%]">
          {/* Row 0 */}
          {/* 左側: top_left（2列分） */}
          <div className="col-span-2 flex items-start">
            <img
              src={top_left}
              alt="Top Left"
              className="w-full object-contain opacity-0 scale-[2.2] -translate-x-[5vw] -translate-y-[2vw]"
              style={{
                animation: "fadeInUp 0.5s forwards",
                animationDelay: "1000ms",
              }}
            />
          </div>
          {/* 中央: 4セル分、sortedMentors の先頭4件を順に表示 */}
          {sortedMentors.slice(0, 4).map((mentor, i) => (
            <img
              key={`center-${mentor.id}`}
              src={getImageSrc(mentor)}
              alt={mentor.img}
              className="w-full object-cover opacity-0"
              style={{
                animation: "fadeInUp 0.5s forwards",
                animationDelay: `${i * 50}ms`,
              }}
            />
          ))}
          {/* 右側: top_right（2列分） */}
          <div className="col-span-2 flex items-start">
            <img
              src={top_right}
              alt="Top Right"
              className="w-full object-contain opacity-0 scale-[2.2] translate-x-[5vw] -translate-y-[6vw]"
              style={{
                animation: "fadeInUp 0.5s forwards",
                animationDelay: "1200ms",
              }}
            />
          </div>

          {/* Row 1: 残り全員を1行で中央揃え */}
          <div className="col-span-8 flex flex-nowrap justify-center items-start">
            {sortedMentors.slice(4).map((mentor, i) => {
              const cellIndex = 8 + i;
              return (
                <img
                  key={`r1c${mentor.id}`}
                  src={getImageSrc(mentor)}
                  alt={mentor.img}
                  className="w-[12.5%] object-cover opacity-0"
                  style={{
                    animation: "fadeInUp 0.5s forwards",
                    animationDelay: `${cellIndex * 50}ms`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
