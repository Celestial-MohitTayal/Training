const SignUpValidation = (users, name, email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  if (name == "") {
    return "Invalid Name";
  }
  if (email == "" || !isEmailValid) {
    return "Invalid Email";
  }
  if (password == "") {
    return "Invalid Password";
  }

  const user = users?.find((user) => user.email === email);

  console.log(user);
  if (!user) {
    const currUser = {
      name: name,
      email: email,
      password: password,
    };
    users.push(currUser);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    return "User Exists!";
  }
};

export default SignUpValidation;
