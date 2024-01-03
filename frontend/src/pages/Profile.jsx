import { EditForm } from "../componets/EditForm";
import { useContext } from "react";
import { CurrentUserContext } from "../utils/UserContext";
import { Navigate } from "react-router-dom";

/**
 * Profile Component
 *
 * Renders the EditForm if a user is logged in.
 *
 * @returns {JSX.Element} - EditForm component or redirection to home page
 */

export const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser) return <Navigate to="/" />;

  return (
    <>
      <EditForm />
    </>
  );
};
