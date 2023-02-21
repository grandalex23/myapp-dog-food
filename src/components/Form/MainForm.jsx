import React, { useState } from "react";

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import ResetForm from "./ResetForm";

const MainForm = () => {
   const [formType, setFormType] = useState("login");

   if (formType === "registration") {
      return <RegistrationForm onChangeType={setFormType}></RegistrationForm>;
   }

   if (formType === "login") {
      return <LoginForm onChangeType={setFormType}></LoginForm>;
   }

   if (formType === "reset") {
      return <ResetForm onChangeType={setFormType}></ResetForm>;
   }
};

export default MainForm;
