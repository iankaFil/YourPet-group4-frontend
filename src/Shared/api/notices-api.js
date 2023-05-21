import instance from './auth-api';

const CATEGORIES = ['sell', 'in-good-hands', 'lost-found'];

export const getNoticesByCategory = async category => {
  if (!CATEGORIES.includes(category)) {
    throw new Error(
      `Invalid category: ${category}. Allowed categories are: ${CATEGORIES.join(
        ', '
      )}`
    );
  }

  const { data } = await instance.get(`/notices/${category}`);
  return data;
};

export const getNoticesByTitleInCategory = async (category, query) => {
  if (!CATEGORIES.includes(category)) {
    throw new Error(
      `Invalid category: ${category}. Allowed categories are: ${CATEGORIES.join(
        ', '
      )}`
    );
  }

  const { data } = await instance.get(`/notices/category/q=${query}`);
  return data;
};

export const getNoticesById = async id => {
  const { data } = await instance.get(`/notices/notice/${id}`);
  return data;
};
