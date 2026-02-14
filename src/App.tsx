import { useState } from "react";
import "./App.css";

const phrase = [
  "No",
  "Serious ah va",
  "Poda pota, Please",
  "Ennaku vara yaru irrukangha",
  "Ego ahhh",
  "Please purinjiko",
  "Dai unnaku vara enna valia",
  "En mela cheat pannriya",
  "Adingu",
  "Un vettuku vandhudvan",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrase[Math.min(noCount, phrase.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGowczR6dWtnZGV0MHI3eTM1cXJuejNzODFlM2QxYnN2Z29mdzYyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rik9n81Vda3rzr5F8h/giphy.gif"
          />
          <div className="text">AWW BABY! YAY! </div>
        </>
      ) : (
        <>
          <img
            alt="bear with flowers"
            src="http://media.tenor.com/2xHbZ6Z8wqEAAAAd/bear-with-flowers.gif"
          />

          <div>Will you be my Valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
