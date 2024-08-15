import React from "react";
import Layout from "./layout";
import GameCard from "./components/GameCard";

const HomePage = () => {
  const games = [
    { src: "/images/game_icon-1.png", alt: "Game 1" },
    { src: "/images/game_icon-2.png", alt: "Game 2" },
    { src: "/images/game_icon-3.png", alt: "Game 3" },
    { src: "/images/game_icon-4.png", alt: "Game 4" },
    { src: "/images/game_icon-5.png", alt: "Game 5" },
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen pt-8">
        <h1 className="text-center text-3xl font-bold mb-8">
          Epic Crypto Games
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} imageSrc={game.src} altText={game.alt} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
