const formValidation = (email, password) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isEmailValid = emailRegex.test(email); 
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isPassValid = passRegex.test(password);

    if(!isEmailValid) return 'Email Id is not valid';
    if(!isPassValid) return 'Password is not valid';

    return null;
}

export default formValidation;