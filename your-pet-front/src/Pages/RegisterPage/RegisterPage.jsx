import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from './AuthForm';
import ModalCongrats from './ModalCongrats';

const RegisterPage = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState('');

  const handleRegistration = async (formData) => {
    // Отправляем запрос на бекенд для регистрации пользователя
    try {
      // Ваш код для отправки запроса на бекенд
      setShowModal(true); // Показываем модальное окно
      setNotification('Регистрация прошла успешно!'); // Устанавливаем уведомление
    } catch (error) {
      setNotification('Ошибка регистрации'); // Устанавливаем уведомление
    }
  };

  const handleLoginNavigation = () => {
    history.push('/login'); // Перенаправляем на страницу логина
  };

  return (
    <div>
      <AuthForm
        onSubmit={handleRegistration}
        submitText="Registration"
        onNavigate={handleLoginNavigation}
        navigateText="Login"
        notification={notification}
      />
      {showModal && (
        <ModalCongrats
          onClose={() => setShowModal(false)}
          message="Регистрация прошла успешно!"
        />
      )}
    </div>
  );
};

export default RegisterPage;
