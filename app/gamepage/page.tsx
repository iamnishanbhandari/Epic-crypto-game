"use client";
import React, { useEffect, useState } from "react";

type GameOption = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

type LeaderboardEntry = {
  number: number;
  name: string;
  points: number;
  medal: boolean;
};

const GamePage: React.FC = () => {
  const gameOptions: GameOption[] = [
    { id: 1, name: "Game 1", src: "/images/game_icon-1.png", alt: "Game 1" },
    { id: 2, name: "Game 2", src: "/images/game_icon-2.png", alt: "Game 2" },
    { id: 3, name: "Game 3", src: "/images/game_icon-3.png", alt: "Game 3" },
    { id: 4, name: "Game 4", src: "/images/game_icon-4.png", alt: "Game 4" },
    { id: 5, name: "Game 5", src: "/images/game_icon-5.png", alt: "Game 5" },
  ];

  const handleGameClick = (gameName: string) => {
    console.log(`${gameName} clicked`);
  };

  const [data, setData] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const localData: LeaderboardEntry[] = [
      { number: 1, name: "Lee Taeyong", points: 258.244, medal: true },
      { number: 2, name: "Mark Lee", points: 258.242, medal: false },
      { number: 3, name: "Xiao Dejun", points: 258.223, medal: false },
      { number: 4, name: "Qian Kun", points: 258.212, medal: false },
      { number: 5, name: "Johnny Suh", points: 258.208, medal: false },
    ];

    setData(localData);
  }, []);

  return (
    <div className="flex flex-col h-screen p-4 space-y-4">
      <div className="flex-1 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Main game screen */}
        <div className="flex-1 bg-gray-800 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">Main Game Screen</h1>
        </div>

        {/* Leaderboard */}
        <div className="md:w-1/4 bg-gray-800 flex flex-col justify-center items-center md:sticky md:top-4">
          <main className="w-full max-w-[40rem] bg-gray-800 shadow-lg flex flex-col items-center rounded-lg">
            <div
              id="header"
              className="w-full flex items-center justify-between p-6 bg-[#5c5be5] rounded-t-lg"
            >
              <h1 className="font-rubik text-[1.7rem] text-white uppercase cursor-default">
                Ranking
              </h1>
              <button className="w-[3.5rem] h-[2.5rem] bg-[#f55e77] border-0 border-b-[0.2rem] border-[#c0506a] rounded-full cursor-pointer active:border-b-0">
                <i className="ph ph-share-network text-white text-xl"></i>
              </button>
            </div>
            <div id="leaderboard" className="w-full relative px-4 py-8">
              <div className="w-full h-[3rem] bg-[#5c5be5] absolute top-[-1.5rem] left-0 shadow-md rounded-sm" />
              <table className="w-full mt-8 border-collapse table-fixed text-[#141a39] cursor-default">
                <tbody>
                  {data.map((entry, index) => (
                    <tr
                      key={index}
                      className={`${
                        index === 0
                          ? "bg-[#5c5be5] text-white"
                          : "bg-gray-800 text-white"
                      } transition-all duration-200 ease-in-out rounded-md ${
                        index !== 0
                          ? "hover:bg-gray-700 hover:scale-105 shadow-md"
                          : ""
                      } border-b border-gray-700`}
                    >
                      <td className="w-[3rem] text-left font-bold text-[1.8rem] pl-4">
                        {entry.number}
                      </td>
                      <td className="text-left text-[1.1rem] pl-2">
                        {entry.name}
                      </td>
                      <td className="flex justify-end items-center font-bold text-[1.3rem] pr-4">
                        {entry.points.toFixed(3)}
                        {entry.medal && (
                          <img
                            className="h-[2rem] ml-2"
                            src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                            alt="gold medal"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                id="buttons"
                className="w-full mt-8 flex justify-center gap-6"
              >
                <button className="w-[9rem] h-[2.5rem] font-rubik text-[1rem] uppercase text-[#7e7f86] bg-gray-800 rounded-full cursor-pointer hover:border-[#5c5be5] hover:border">
                  Exit
                </button>
                <button className="w-[9rem] h-[2.5rem] font-rubik text-[1rem] uppercase text-white bg-[#5c5be5] border-0 border-b-[0.2rem] border-[#3838b8] rounded-full cursor-pointer active:border-b-0">
                  Continue
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Game options */}
      <div className="flex flex-wrap md:space-x-4 md:space-y-0 space-y-4">
        {gameOptions.map(({ id, name, src, alt }) => (
          <div
            key={id}
            className="flex-1 bg-gray-700 text-white p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition md:h-64 h-40 flex flex-col items-center"
            onClick={() => handleGameClick(name)}
          >
            <img
              src={src}
              alt={alt}
              className="mb-2 w-full h-full object-cover"
            />
            <h3 className="text-center text-xl">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
