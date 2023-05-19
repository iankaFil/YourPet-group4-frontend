import React, { useState, useEffect } from 'react';
import Section from 'Components/Section';
import Container from 'Components/Container/';
import Background from 'Components/Background/Background';
import Loader from 'Components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Вместо задержки здесь может быть ваша асинхронная операция загрузки данных
    // Например, вызов API для получения данных

    // Предположим, что загрузка данных завершена
    // В этом случае, установите isLoading в false
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   // Здесь вы можете выполнить асинхронные операции, такие как загрузка данных или задержка
  //   // В данном случае, просто задержим загрузку на 2 секунды для демонстрации лоадера
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <Section className={css.section}>
      <Background />
      <Container className={css.wrapp}>
        {isLoading ? (
          <Loader />
        ) : (
          <h1 className={css.title}>
            Take good care {'\n'}of your small {'\n'}pets
          </h1>
        )}
      </Container>
    </Section>
  );
};

export default HomePage;
