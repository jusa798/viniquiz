import { useState } from "react";
import "./App.css";
import AnswerChoice from "./Components/AnswerChoice/AnswerChoice";
import Title from "./Components/Title/Title";

function App() {
  const [activatedLetter, setActivatedLetter] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [letterWrong, setLetterWrong] = useState();

  const question0 = {
    title: "Who Wrote 'Yellow'?",
    A: "BrockHampton",
    B: "Coldplay",
    C: "Mana",
    D: "Bad Bunny",
    correctAnswer: "B",
  };

  const question1 = {
    title: "How old was Eddie Santiago when he wrote Lluvia?",
    A: "33",
    B: "29",
    C: "45",
    D: "26",
    correctAnswer: "A",
  };

  const bank = [question0, question1];

  const setActiveChoiceHandler = (letter) => {
    setActivatedLetter(letter);
  };

  // To increase question number and render a different question
  const setQuestionHandler = () => {
    setQuestionNumber((prevQuestion) => prevQuestion + 1);
  };

  const isWrongValidator = () => {
    setLetterWrong(activatedLetter);
    setActivatedLetter(question0.correctAnswer);
    return console.log("iswrong");
  };

  return (
    <div className='App'>
      <div className='quiz-container'>
        <Title content={bank[questionNumber].title}></Title>
        <AnswerChoice
          active={"A" === activatedLetter}
          isWrong={"A" == letterWrong}
          content={bank[questionNumber].A}
          callback={setActiveChoiceHandler}
          letter='A'></AnswerChoice>
        <AnswerChoice
          active={"B" === activatedLetter}
          isWrong={"B" == letterWrong}
          content={bank[questionNumber].B}
          callback={setActiveChoiceHandler}
          letter='B'></AnswerChoice>
        <AnswerChoice
          active={"C" === activatedLetter}
          content={bank[questionNumber].C}
          isWrong={"C" == letterWrong}
          callback={setActiveChoiceHandler}
          letter='C'></AnswerChoice>
        <AnswerChoice
          active={"D" === activatedLetter}
          isWrong={"D" == letterWrong}
          content={bank[questionNumber].D}
          callback={setActiveChoiceHandler}
          letter='D'></AnswerChoice>
        <button onClick={() => setQuestionHandler()}>submit</button>
      </div>
    </div>
  );
}

export default App;
