`use strict`;

/* 
Football betting app!

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players; // state both teams
const [gk, ...fieldPlayers] = players1; // gk is the first and spread operator states the rest are feild players
const allPlayers = [...players1, ...players2]; // use spread operator to make 2 arrays of teams onto one big one
const players1Subs = ["Thiago", "Coutinho", "Perisic"]; // players1 subs
const players1Final = [...players1, ...players1Subs]; // adding subs to the team

const {
  odds: { team1, x: draw, team2 }, // nested destructuring
} = game;

const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// if it a falsey then it will be ignored, || will be the direct oppisite
team1 < team2 && console.log("Team 1 is more likely to win"); // team1 > team2 is truey then short circuit to print
team1 > team2 && console.log("Team 2 is more likely to win"); // team1 < team2 is truey then print and if they are the same don't print at all

const scoreEntries = Object.entries(game.scored);
const oddsEntries = Object.entries(game.odds);

for (const [key, playerName] of scoreEntries) {
  console.log(`Goal ${key} - ${playerName}`);
}

console.log(...oddsEntries);

// NOTE: Calculate the average!! task 2
for (const [, oddsNum] of oddsEntries) {
  console.log(oddsNum);
}
