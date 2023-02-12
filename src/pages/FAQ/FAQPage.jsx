import React from "react";
import Accordion from "../../components/Accordion/Accordion";

const data = [
   {
      title: "TITLE",
      text: "text text text text text text text text text text text text text text text text text text text text text text text text",
   },
   {
      title: "TITLE",
      text: "text text text text text text text text text text text text text text text text text text text text text text text text",
   },
   {
      title: "TITLE",
      text: "text text text text text text text text text text text text text text text text text text text text text text text text",
   },
   {
      title: "TITLE",
      text: "text text text text text text text text text text text text text text text text text text text text text text text text",
   },
];

const FAQPage = () => {
   return (
      <div>
         {data.map((el) => (
            <Accordion {...el} />
         ))}
      </div>
   );
};

export default FAQPage; 