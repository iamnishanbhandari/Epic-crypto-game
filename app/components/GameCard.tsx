import React from "react";

interface GameCardProps {
  imageSrc: string;
  altText: string;
}

const GameCard: React.FC<GameCardProps> = ({ imageSrc, altText }) => {
  return (
    <div className="group relative p-4 rounded-lg">
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={altText}
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110 rounded-lg"
        />
      </div>
      <div className="absolute inset-0 rounded-lg border-4 border-transparent group-hover:border-neon-blue transition duration-300 ease-in-out"></div>
    </div>
  );
};

export default GameCard;
