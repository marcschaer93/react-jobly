import { Typography } from "@mui/material";
import { EditForm } from "../componets/EditForm";
import { useContext } from "react";
import { CurrentUserContext } from "../utils/UserContext";
import { Navigate } from "react-router-dom";

export const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser) return <Navigate to="/" />;

  return (
    <>
      <EditForm />
    </>
  );
};
