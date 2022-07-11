import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Button, IconButton } from "@mui/material";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@mui/material/TextField";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const suites = ["Spades", "Hearts", "Diamonds", "Clubs"];

const leftSideCards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const rightSideCards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const middleCards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

function Body({ gameType }) {
  const setRandomBounds = (gameType) => {
    if (gameType === "Infinite") {
      let randomLeft =
        leftSideCards[Math.floor(Math.random() * leftSideCards.length)];
      let randomRight =
        rightSideCards[Math.floor(Math.random() * rightSideCards.length)];
      setLeftCard(randomLeft);
      setRightCard(randomRight);
      setMiddleCard("");
      setMiddleShown(false);
    } else if (gameType === "Standard") {
      let randomLSuite = suites[Math.floor(Math.random() * suites.length)];
      let randomRSuite = suites[Math.floor(Math.random() * suites.length)];
      setLeftSuite(randomLSuite);
      setRightSuite(randomRSuite);
      let randomLeft =
        leftSideCards[Math.floor(Math.random() * leftSideCards.length)];
      let randomRight =
        rightSideCards[Math.floor(Math.random() * rightSideCards.length)];
      setLeftCard(randomLeft);
      setRightCard(randomRight);
      setMiddleCard("");
      setMiddleSuite("");
      setMiddleShown(false);
    }
  };
  const displayMiddleCard = () => {
    let randomMiddle =
      middleCards[Math.floor(Math.random() * middleCards.length)];
    setMiddleCard(randomMiddle);
    setMiddleShown(true);
  };
  const adjustPot = (type) => {
    if (type) {
      if (!isNaN(inputPot)) {
        let newPot = parseInt(potAmount) + parseInt(inputPot);
        setPotAmount(newPot);
        setInputPot("");
      }
    } else {
      if (!isNaN(inputPot)) {
        let newPot = parseInt(potAmount) - parseInt(inputPot);
        setPotAmount(newPot);
        setInputPot("");
      }
    }
  };
  const [leftCard, setLeftCard] = useState("");
  const [rightCard, setRightCard] = useState("");
  const [middleCard, setMiddleCard] = useState("");
  const [potAmount, setPotAmount] = useState(0);
  const [inputPot, setInputPot] = useState("");
  const [middleShown, setMiddleShown] = useState(false);
  const [leftSuite, setLeftSuite] = useState("");
  const [middleSuite, setMiddleSuite] = useState("");
  const [rightSuite, setRightSuite] = useState("");
  useEffect(() => setRandomBounds(gameType), [gameType]);
  return (
    <div className="body">
      <Grid container spacing={2} className="card-container">
        <Grid item xs={3} className="cardGrid">
          <Card className="cards" style={{ backgroundColor: "skyblue" }}>
            {gameType === "Infinite" ? leftCard : `${leftCard} ${leftSuite}`}
          </Card>
        </Grid>
        <Grid item xs={3} className="cardGrid">
          <Card className="cards" style={{ backgroundColor: "grey" }}>
            {gameType === "Infinite"
              ? middleCard
              : `${middleCard} ${middleSuite}`}
          </Card>
        </Grid>
        <Grid item xs={3} className="cardGrid">
          <Card className="cards" style={{ backgroundColor: "skyblue" }}>
            {gameType === "Infinite" ? rightCard : `${rightCard} ${rightSuite}`}
          </Card>
        </Grid>
      </Grid>
      <Grid container mt={4} className="action-buttons">
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            className="buttons"
            onClick={() => displayMiddleCard()}
            disabled={middleShown}
          >
            Show card
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="info"
            className="buttons"
            onClick={() => {
              setRandomBounds(gameType);
            }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
      <Grid container mt={4} className="pot-buttons">
        <Grid item xs={4} className="decrease-button">
          <IconButton color="warning" onClick={() => adjustPot(0)}>
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="+/- Pot"
            variant="outlined"
            value={inputPot}
            onChange={(e) => setInputPot(e.target.value)}
          />
        </Grid>
        <Grid item xs={4} className="increase-button">
          <IconButton color="success" onClick={() => adjustPot(1)}>
            <AddCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
      <div className="pot-amount">
        <div>Pot amount</div>
        <div>$ {potAmount}</div>
        <div>
          <IconButton color="info" onClick={() => setPotAmount(0)}>
            <RestartAltIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Body;
