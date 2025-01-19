import { useState } from "react";

export default function Accordian({ qna }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <p className="accordian">
        {qna.question}
        <span onClick={() => setShow(!show)}>{show ? "+" : "-"}</span>

        {show ? <p> {qna.answer} </p> : ""}
      </p>
    </>
  );
}
