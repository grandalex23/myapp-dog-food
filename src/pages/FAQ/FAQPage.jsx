import React from "react";

import Accordion from "../../components/Accordion/Accordion";
import PageHeader from "../../components/PageHeader/PageHeader";

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
         <PageHeader title={"Часто спрашивают"} buttonText="На главную" link={"/"}></PageHeader>
         {data.map((el) => (
            <Accordion {...el} />
         ))}
      </div>
   );
};

export default FAQPage; 