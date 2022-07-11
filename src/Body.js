import { useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Button, IconButton } from "@mui/material";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@mui/material/TextField";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

let deckOfCards = [
  "A H",
  "2 H",
  "3 H",
  "4 H",
  "5 H",
  "6 H",
  "7 H",
  "8 H",
  "9 H",
  "10 H",
  "J H",
  "Q H",
  "K H",
  "A S",
  "2 S",
  "3 S",
  "4 S",
  "5 S",
  "6 S",
  "7 S",
  "8 S",
  "9 S",
  "10 S",
  "J S",
  "Q S",
  "K S",
  "A C",
  "2 C",
  "3 C",
  "4 C",
  "5 C",
  "6 C",
  "7 C",
  "8 C",
  "9 C",
  "10 C",
  "J C",
  "Q C",
  "K C",
  "A D",
  "2 D",
  "3 D",
  "4 D",
  "5 D",
  "6 D",
  "7 D",
  "8 D",
  "9 D",
  "10 D",
  "J D",
  "Q D",
  "K D",
];
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
  const setRandomBounds = useCallback((gameType) => {
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
      if (deckOfCards.length <= 2) {
        resetGames(gameType);
        setOpen(true);
        return;
      }
      let randomIndex = Math.floor(Math.random() * deckOfCards.length);
      let chosenLeft = deckOfCards[randomIndex];
      deckOfCards.splice(randomIndex, 1);
      let randomIndex2 = Math.floor(Math.random() * deckOfCards.length);
      let chosenRight = deckOfCards[randomIndex2];
      deckOfCards.splice(randomIndex2, 1);
      setLeftCard(chosenLeft);
      setRightCard(chosenRight);
      setMiddleCard("");
      setMiddleShown(false);
    }
  }, []);
  const resetGames = () => {
    deckOfCards = [
      "A H",
      "2 H",
      "3 H",
      "4 H",
      "5 H",
      "6 H",
      "7 H",
      "8 H",
      "9 H",
      "10 H",
      "J H",
      "Q H",
      "K H",
      "A S",
      "2 S",
      "3 S",
      "4 S",
      "5 S",
      "6 S",
      "7 S",
      "8 S",
      "9 S",
      "10 S",
      "J S",
      "Q S",
      "K S",
      "A C",
      "2 C",
      "3 C",
      "4 C",
      "5 C",
      "6 C",
      "7 C",
      "8 C",
      "9 C",
      "10 C",
      "J C",
      "Q C",
      "K C",
      "A D",
      "2 D",
      "3 D",
      "4 D",
      "5 D",
      "6 D",
      "7 D",
      "8 D",
      "9 D",
      "10 D",
      "J D",
      "Q D",
      "K D",
    ];
    setRandomBounds(gameType);
  };
  const displayMiddleCard = (gameType) => {
    if (gameType === "Infinite") {
      let randomMiddle =
        middleCards[Math.floor(Math.random() * middleCards.length)];
      setMiddleCard(randomMiddle);
      setMiddleShown(true);
    } else if (gameType === "Standard") {
      let randomIndex = Math.floor(Math.random() * deckOfCards.length);
      let selectedCard = deckOfCards[randomIndex];
      deckOfCards.splice(randomIndex, 1);
      setMiddleCard(selectedCard);
      setMiddleShown(true);
    }
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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    deckOfCards = [
      "A H",
      "2 H",
      "3 H",
      "4 H",
      "5 H",
      "6 H",
      "7 H",
      "8 H",
      "9 H",
      "10 H",
      "J H",
      "Q H",
      "K H",
      "A S",
      "2 S",
      "3 S",
      "4 S",
      "5 S",
      "6 S",
      "7 S",
      "8 S",
      "9 S",
      "10 S",
      "J S",
      "Q S",
      "K S",
      "A C",
      "2 C",
      "3 C",
      "4 C",
      "5 C",
      "6 C",
      "7 C",
      "8 C",
      "9 C",
      "10 C",
      "J C",
      "Q C",
      "K C",
      "A D",
      "2 D",
      "3 D",
      "4 D",
      "5 D",
      "6 D",
      "7 D",
      "8 D",
      "9 D",
      "10 D",
      "J D",
      "Q D",
      "K D",
    ];
    setRandomBounds(gameType);
  }, [gameType, setRandomBounds]);
  return (
    <div className="body">
      <Grid container spacing={2} className="card-container">
        <Grid item xs={3} className="cardGrid">
          <Card className="cards" style={{ backgroundColor: "skyblue" }}>
            {leftCard}
          </Card>
        </Grid>
        <Grid item xs={3} className="cardGrid">
          <Card className="cards" style={{ backgroundColor: "grey" }}>
            {middleCard}
          </Card>
        </Grid>
        <Grid item xs={3} className="cardGrid">
          <Card className="cards" style={{ backgroundColor: "skyblue" }}>
            {rightCard}
          </Card>
        </Grid>
      </Grid>
      <Grid container mt={4} className="action-buttons">
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            className="buttons"
            onClick={() => displayMiddleCard(gameType)}
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          severity="success"
          onClose={() => {
            setOpen(false);
          }}
        >
          Deck of cards reset!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Body;
