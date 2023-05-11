import React, { useState } from "react";

const AuthForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Валидация введенных данных
    let emailIsValid = true;
    let passwordIsValid = true;

    if (!email.includes("@")) {
      setEmailError("Введите действительный email");
      emailIsValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim().length < 6) {
      setPasswordError("Пароль должен быть не менее 6 символов");
      passwordIsValid = false;
    } else {
      setPasswordError("");
    }

    // Если все данные валидны, отправляем их на сервер
    if (emailIsValid && passwordIsValid) {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError && <div className="error">{emailError}</div>}
      </label>
      <label>
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <div className="error">{passwordError}</div>}
      </label>
      <button type="submit">Войти</button>
    </form>
  );
};

export default AuthForm;
