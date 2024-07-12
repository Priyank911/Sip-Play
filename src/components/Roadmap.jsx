import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";

const gamesList = [
  "13 Days",
  "20 second showdown",
  "221B Baker Street",
  "5 Second Rule",
  "5 Second Rule: Jr.",
  "5 Second Rule: Uncensored",
  "5-Minute Dungeon",
  "5-Minute MARVEL",
  "7 Wonders",
  "7 Wonders: Duel",
  "8 Minute Empire: Legends",
  "8 Minute Empire: Lost Lands",
  "A Game of Thrones: The Board Game",
  "Above and Below",
  "Acquire",
  "Agricola",
  "Apples to Apples",
  "Ascension Deck Building Game",
  "Attack of the killer kittens",
  "Attack of the killer kittens (NSFW)",
  "Axis & Allies: Pacific",
  "Azul: Stained glass of Sintra",
  "Badmoji",
  "Bananagrams",
  "Bang!",
  "Bang! Dice Expansion: Old Saloon",
  "Bang! The Dice Game"
];

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10 text-black">
        <Heading tag="Ready to Play" title="Our Board Games" />

        <div className="mt-12 text-center">
          <p>Welcome to our collection of board games. Whether you are a seasoned gamer or new to the world of tabletop games, we have something for everyone. Browse through our diverse selection of games listed below.</p>
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Menu</Button>
        </div>

        <div className="mt-12">
          <table className="mt-4 table-auto w-full border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black px-4 py-2">Games in Alphabetical Order</th>
              </tr>
            </thead>
            <tbody>
              {gamesList.map((game, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2">{game}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
