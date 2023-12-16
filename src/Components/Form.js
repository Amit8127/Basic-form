import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const validatePassword = () => {
    setIsPasswordValid(password.length >= 8);
  };

  const validateConfirmPassword = () => {
    setIsConfirmPasswordValid(confirmPassword === password);
  };

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Form cannot be submitted");
    }
  };
  
  return (
    <div className="form">
      <label>Email:</label>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
        style={{ border: isEmailValid ? '2px solid green' : '2px solid red' }}
      />
      {!isEmailValid && <p>Invalid email format</p>}

      <label>Password:</label>
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={validatePassword}
        style={{ border: isEmailValid ? '2px solid green' : '2px solid red' }}
      />
      {!isPasswordValid && <p>Password must be at least 8 characters long</p>}

      <label>Confirm Password:</label>
      <input 
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={validateConfirmPassword}
        style={{
          border: isConfirmPasswordValid ? '2px solid green' : '2px solid red',
        }}
      />
      {!isConfirmPasswordValid && <p>Passwords do not match</p>}

      {/* Submit button */}
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );

};

export default Form;
