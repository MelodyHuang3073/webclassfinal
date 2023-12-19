"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import useQA from "../../_hooks/useQA";
import axios from "axios";
type Message = {
  question: string;
  answer: string;
  confidenceScore: number;
  questionsOrgin: string;
  source: string;
};
export default function Message() {
  const [question, setQuestion] = useState("");
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [
    QaListFilter,
    createQA,
    deleteQA,
    updateQA,
    select,
    setSelect,
    search,
    setSearch,
    officeList,
    loading,
    recoverQA,
  ] = useQA();
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await axios.post("/api", {
      question,
    });
    const answer = result.data.message.answers[0].answer;
    const confidenceScore = result.data.message.answers[0].confidenceScore;
    const questionsOrgin = result.data.message.answers[0].questions[0];
    const source = result.data.message.answers[0].source;
    setMessageList(() => [
      ...messageList,
      { answer, question, confidenceScore, questionsOrgin, source },
    ]);
    if (confidenceScore < 0.7) {
      createQA({
        question,
        answer,
      });
    }
  };

  const keyPress = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(`Pressed keyCode ${ev.key}`);
    if (ev.key === "Enter") {
      handleSubmit();
      setQuestion("");
    }
  };
  return (
    <>
      {messageList.map((x, index) => (
        <div key={index}>
          {x.question}
          <br />
          {x.answer}
          <br />
          {x.confidenceScore}
          <br />
          {x.questionsOrgin}
          <br />
          {x.source}
        </div>
      ))}
      <TextField
        id="fullWidth"
        fullWidth
        label="問啥?"
        variant="filled"
        value={question}
        onKeyUp={keyPress}
        onChange={handleClick}
      />
    </>
  );
}
