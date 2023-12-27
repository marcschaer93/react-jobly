const cardStyles = {
  card: {
    width: "70vW",
    border: "solid #CCCCCC 1px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
  },
  cardSmall: {
    width: "50vW",
    border: "solid #CCCCCC 1px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
  },
  cardAnimated: {
    width: "70vW",
    border: "solid #CCCCCC 1px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardContent: {
    padding: "30px",
  },
};

// export default cardStyles;

export const { card, cardAnimated, cardContainer, cardContent, cardSmall } =
  cardStyles;
