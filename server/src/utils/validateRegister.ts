import { UserInput } from "../resolver/user";

export const validateRegister = (input: UserInput) => {
  if (input.username.length <= 3) {
    return [
      {
        field: "username",
        message: "username length should be greater than 3",
      },
    ];
  }

  if (input.username.includes("@")) {
    return [
      {
        field: "username",
        message: "Username cannot include the '@' sign",
      },
    ];
  }

  if (input.email.length === 0) {
    return [
      {
        field: "email",
        message: "Email field can not be empty",
      },
    ];
  }

  if (!input.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Please use a valid email. eg 'john@gmail.com'",
      },
    ];
  }

  if (input.password.length <= 3) {
    return [
      {
        field: "password",
        message: "password length should be greater than 3",
      },
    ];
  }

  return null;
  //return null if no errors are found
};
