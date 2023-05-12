import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from 'Components/AuthForm/AuthForm';
import ModalCongrats from './ModalCongrats';
import Header from 'Components/Header/Header';
import Section from 'Components/Section/Section';
import Container from 'Components/Container/Container';

const RegisterPage = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState('');

  const handleRegistration = async formData => {
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
      <Section>
        <Header></Header>
      </Section>
      <Section>
        <Container>
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
        </Container>
      </Section>
    </div>
  );
};

export default RegisterPage;
