import Accordian from "./Accordian";
import data from "../data.json";

export default function Faq() {
  console.log(data);
  return (
    <>
      <h1>Faq</h1>
      <h3>
        {data.faqs.map((obj, index) => {
          return <Accordian key={index} qna={obj} />;
        })}
      </h3>
    </>
  );
}
