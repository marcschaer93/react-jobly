export const registerOptions = {
  firstName: {
    required: "Please enter your name!",
    minLength: {
      value: 2,
      message: "must be at least 2 characters!",
    },
  },
  gender: {
    required: "Plese choose gender!",
  },
  username: {
    required: "Enter username!",
  },
  password: {
    required: "Enter password!",
    minLength: {
      value: 6,
      message: "must be at least 6 characters!",
    },
  },
};
