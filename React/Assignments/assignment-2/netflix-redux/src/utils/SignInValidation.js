const SignInValidation = (users, email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (email == "" || !isEmailValid) {
    return "Invalid Email";
  }
  if (password == "") {
    return "Invalid Password";
  }
  const user = users?.find(
    (user) => user.email === email && user.password === password
  );

  if (user == undefined) {
    return "Incorrect Email or Password";
  } else {
    return "DataOk";
  }
};

export default SignInValidation;
