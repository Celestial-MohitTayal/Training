const formValidation = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmailValid = emailRegex.test(email);

  if (!isEmailValid) return "Email Id is not valid";

  return null;
};

export default formValidation;
