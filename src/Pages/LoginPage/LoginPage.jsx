import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "./AuthForm";

const LoginPage = () => {
  const history = useHistory();

  // Состояние для данных формы
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // состояние для ошибок проверки
  const [errors, setErrors] = useState({});

  // Функция для обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка ошибок проверки формы
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: Отправить запрос на вход в бэкэнд с данными формы
    // Если вход в систему выполнен успешно, перенаправить на UserPage
    // Если не удается войти, показать уведомление об ошибке

    history.push("/user");
  };

  // Функция для обработки изменения ввода формы
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Функция проверки данных формы
  const validateForm = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password should be at least 6 characters";
    }

    return errors;
  };

  return (
    <div>
      <AuthForm
        title="Login"
        buttonText="Login"
        formType="login"
        formData={formData}
        errors={errors}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        navigationLink="/register"
        navigationText="Don't have an account? Register here"
      />
    </div>
  );
};

export default LoginPage;
