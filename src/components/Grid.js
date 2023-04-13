import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { nanoid } from "nanoid";
import * as React from "react";
import Confetti from "react-confetti";
import Die from "./Die";

export default function FullBorderedGrid() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    let allHeld = true;
    let sameValue = true;

    dice.forEach((die) => {
      if (!die.isHeld) allHeld = false;
    });

    for (let i = 0; i < dice.length - 1; i++) {
      if (dice[i].value !== dice[i + 1].value) sameValue = false;
    }

    if (allHeld && sameValue) {
      setTenzies(true);
    } else {
      setTenzies(false);
    }
  }, [dice]);

  function diceClick(id) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }
  const dieElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      handleClick={() => diceClick(die.id)}
      isHeld={die.isHeld}
    />
  ));

  function generateNewDie() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    return {
      id: nanoid(),
      value: randomNumber,
      isHeld: false,
    };
  }
  function allNewDice() {
    const array = [];

    for (let i = 0; i < 10; i++) {
      array.push(generateNewDie());
    }

    return array;
  }

  function rollDice(id) {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    }
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      });
    });
  }

  return (
    <div>
      {tenzies && <Confetti />}
      <div className="div--title">
        <h1 className="title-text">Tenzies</h1>
        <p className="description-text">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <Grid
        sx={{ m: "auto" }}
        container
        spacing={5}
        justifyContent={"center"}
        // sm={12}
        lg={8}
        // xs={12}
        md={8}
      >
        {dieElement}
      </Grid>
      <Button
        variant="contained"
        size="Large"
        fullWidth
        sx={{ mt: 3, height: "4rem", fontSize: "1.5rem" }}
        onClick={rollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </Button>
    </div>
  );
}
