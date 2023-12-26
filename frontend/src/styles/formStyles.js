const formStyles = {
  formContainer: {
    width: "600px",
    margin: "auto",
    paddingBottom: "30px",
    marginTop: "30px",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    marginTop: "30px",
    paddingTop: "30px",
  },
  underline: {
    width: "61px",
    height: "6px",
    backgroundColor: "#6e5494",
    borderRadius: "9px",
    marginBottom: "5px", // Adjust this margin as needed to position it under the text
  },
  inputs: {
    marginTop: "55px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    display: "flex",
    alignItems: "center",
    width: "480px",
  },
  submitContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "50px auto 0",
  },
  submitButton: {
    borderRadius: "50px",
    width: "480px",
    fontWeight: "bold",
  },
  switchContainer: {
    display: "flex",
    justifyContent: "center",
    color: "#797979",
    fontSize: "18px",
    marginTop: "15px",
    gap: "10px",
  },
  lostPasswordContainer: {
    display: "flex",
    justifyContent: "left",
    color: "#797979",
    fontSize: "12px",
    paddingLeft: "5px",
    cursor: "pointer",
    marginLeft: "60px",
    marginTop: "5px",
  },
  link: {
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#d41b64",
  },
};

export const {
  formContainer,
  titleContainer,
  underline,
  inputs,
  input,
  submitContainer,
  switchContainer,
  lostPasswordContainer,
  link,
  submitButton,
} = formStyles;