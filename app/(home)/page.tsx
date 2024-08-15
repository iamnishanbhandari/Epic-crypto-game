import React from "react";
import GameCard from "../components/GameCard";

const HomePage: React.FC = () => {
  const games = [
    { src: "/images/game_icon-1.png", alt: "Game 1" },
    { src: "/images/game_icon-2.png", alt: "Game 2" },
    { src: "/images/game_icon-3.png", alt: "Game 3" },
    { src: "/images/game_icon-4.png", alt: "Game 4" },
    { src: "/images/game_icon-5.png", alt: "Game 5" },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/images/background-image4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-start pt-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-white font-press-start">
          Epic Crypto Games
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} imageSrc={game.src} altText={game.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
