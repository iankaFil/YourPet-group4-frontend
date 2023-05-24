import React, { useEffect, useState } from 'react';

import { Checkbox, Collapse } from 'antd';
import { ReactComponent as Down } from 'Components/SvgIcons/Down.svg';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import css from './NoticesBurgerMenu.module.css';
import { fetchNoticesByTitle } from 'Redux/notices/notices-operations';
import { setFilter } from 'Redux/filters/filters-slice';

import { selectFilters } from 'Redux/filters/filters-selectors';

const { Panel } = Collapse;

const optionsByAge = [
  {
    label: '3-12 m',
    value: '3-12m',
  },
  {
    label: '1 year',
    value: '1year',
  },
  {
    label: '2 year',
    value: '2year',
  },
];

const optionsByGender = [
  {
    label: 'female',
    value: 'female',
  },
  {
    label: 'male',
    value: 'male',
  },
];

const NoticesBurgerMenu = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const [isFilterChanged, setIsFilterChanged] = useState(false);

  useEffect(() => {
    if (!isFilterChanged) {
      return;
    }
    const handleFilterChange = (filterName, filterValue) => {
      dispatch(setFilter({ filterName, filterValue }));
    };

    handleFilterChange('sex', filters.sex);
    handleFilterChange('age', filters.age);

    dispatch(
      fetchNoticesByTitle({
        gender: filters.sex,
        age: filters.age,
      })
    );
    setIsFilterChanged(false);
  }, [dispatch, filters.sex, filters.age]);

  const handleOptionChange = (name, checkedValues) => {
    dispatch(setFilter({ filterName: name, filterValue: checkedValues }));
    setIsFilterChanged(true);
  };

  return (
    <div className={css.dropdown}>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <Down className={cn(css.down_icon, { [css.active]: isActive })} />
        )}
        className={css.filterWrapper}
      >
        <Panel header="By age" key="1" className={css.title}>

          <Checkbox.Group
            options={optionsByAge}
            value={filters.age}
            onChange={checkedValues => handleOptionChange('age', checkedValues)}
            className={css.checkbox}
          />

        </Panel>

        <Panel header="By gender" key="2" className={css.title}>

          <Checkbox.Group
            options={optionsByGender}
            value={filters.sex}
            onChange={checkedValues => handleOptionChange('sex', checkedValues)}
            className={css.checkbox}
          />

        </Panel>
      </Collapse>
    </div>
  );
};

export default NoticesBurgerMenu;
