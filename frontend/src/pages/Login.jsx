import { LoginForm } from "../componets/LoginForm";
import { RegisterForm } from "../componets/RegisterForm";
import { useState } from "react";

export const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === "login" ? (
        <LoginForm onFormSwitch={toggleForm} />
      ) : (
        <RegisterForm onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
