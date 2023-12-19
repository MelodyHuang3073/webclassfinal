"use client";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function TestEmail() {
  const [message, setMessage] = useState({
    email: "qampusai@gmail.com",
    subject: "",
    html: "",
  });
  const [response, setResponse] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setResponse("送信中...");
    try {
      const response = await axios({
        method: "post",
        url: "/email",
        data: message,
      });
      setResponse(response.data.message);
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setResponse(error.message);
      } else {
        setResponse("錯誤");
      }
    }
  };
  return (
    <div>
      <div>
        <h1>意見反應區</h1>
      </div>
      <div>
        <h3>如果覺得這個系統有任何可以改進的地方，歡迎來信反饋~~~</h3>
      </div>
      <div>主旨</div>
      <div>
        <TextField
          type="text"
          name="subject"
          value={message.subject}
          placeholder="請輸入信件主題..."
          onChange={handleChange}
        />
      </div>
      <div>具體建議(我們可能會寄信回覆您喔~)</div>
      <div>
        <TextField
          type="text"
          name="html"
          value={message.html}
          placeholder="請輸入信件內容..."
          onChange={handleChange}
        />
      </div>
      <div>{response}</div>
      <Button onClick={handleClick}>送出</Button>
    </div>
  );
}
