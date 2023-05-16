import React from 'react';
// import css from 'Pages/NoticesPage/NoticesPage.module.css';
import Section from 'Components/Section';
import Title from 'Components/Title/Title';
import NoticesSearch from 'Components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'Components/Notices/NoticesFilters/NoticesFilters';
import CategoryList from 'Components/Notices/NoticesCategoriesList/NoticesCategoriesList';
// import CategoryItem from 'Components/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem';
import Container from 'Components/Container/Container';

const NoticesPage = () => {
  return (
    <Section>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <NoticesCategoriesNav />
        <CategoryList />
      </Container>
    </Section>
  );
};

export default NoticesPage;
