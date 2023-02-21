import React from "react";

import NotFound from "../../components/NotFound/NotFound";

const NotFoundPage = ({ }) => {

   return (
      <>
         <NotFound title={"Страница не найдена"} buttonText={"На главную"} link={"/"}></NotFound>
      </>);
};

export default NotFoundPage;





