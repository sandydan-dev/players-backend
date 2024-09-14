const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const players = [
  {
    id: 1,
    name: "Virat Kohli",
    country: "India",
    role: "Batsman",
    runs: 12000,
    wickets: 4,
  },
  {
    id: 2,
    name: "James Anderson",
    country: "England",
    role: "Bowler",
    runs: 1243,
    wickets: 600,
  },
  {
    id: 3,
    name: "Kane Williamson",
    country: "New Zealand",
    role: "Batsman",
    runs: 7000,
    wickets: 29,
  },
  {
    id: 4,
    name: "Pat Cummins",
    country: "Australia",
    role: "Bowler",
    runs: 750,
    wickets: 250,
  },
  {
    id: 5,
    name: "Ben Stokes",
    country: "England",
    role: "All-rounder",
    runs: 4500,
    wickets: 150,
  },
];

//   Exercise 2: Get all players
function getAllPlayers() {
  return { players };
}
app.get("/players", (req, res) => {
  let response = getAllPlayers();
  if (!response) {
    res.status(404).json({ message: "No players found" });
  }
  return res.status(200).json(response);
});

// Exercise 3: Get player by ID
function getPlayerById(id){
    let player = players.find(player => player.id === id);
    return { player };
  
}
app.get('/players/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    let response = getPlayerById(id)
    if(!response){
        res.status(404).json({ message: 'Player id not found' });
    }
    return res.status(200).json(response)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
