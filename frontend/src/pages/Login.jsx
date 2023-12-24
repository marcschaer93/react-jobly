import { LoginForm } from "../componets/LoginForm";
import { RegisterForm } from "../componets/RegisterForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Login = () => {
  const { formType } = useParams();

  // const [currentForm, setCurrentForm] = useState(formType);

  // useEffect(() => {
  //   setCurrentForm(formType);
  // }, [formType]);

  return <div>{formType === "login" ? <LoginForm /> : <RegisterForm />}</div>;
};

// import { LoginForm } from "../componets/LoginForm";
// import { RegisterForm } from "../componets/RegisterForm";
// import { useState } from "react";

// export const Login = () => {
//   const [currentForm, setCurrentForm] = useState("login");

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   };

//   return (
//     <div>
//       {currentForm === "login" ? (
//         <LoginForm onFormSwitch={toggleForm} />
//       ) : (
//         <RegisterForm onFormSwitch={toggleForm} />
//       )}
//     </div>
//   );
// };
