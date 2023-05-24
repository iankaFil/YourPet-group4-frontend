import React, { useEffect, useState } from 'react';
import { Checkbox, Collapse } from 'antd';
import { ReactComponent as Down } from 'Components/SvgIcons/Down.svg';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import css from './NoticesBurgerMenu.module.css';
import { fetchNoticesByTitle } from 'Redux/notices/notices-operations';

import { setFilter } from 'Redux/filters/filters-slice';

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
  const [selectedOptionsSex, setSelectedOptionsSex] = useState([]);
  const [selectedOptionsAge, setSelectedOptionsAge] = useState([]);
  const [isFilterChanged, setIsFilterChanged] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFilterChanged) {
      return;
    }

    const handleFilterChange = (filterName, filterValue) => {
      dispatch(setFilter({ filterName, filterValue }));
    };

    handleFilterChange('sex', selectedOptionsSex);
    handleFilterChange('age', selectedOptionsAge);

    const sendData = {
      age: selectedOptionsAge,
      sex: selectedOptionsSex,
    };
    console.log('sendData', sendData);
    dispatch(
      fetchNoticesByTitle({
        gender: selectedOptionsSex,
        age: selectedOptionsAge,
      })
    ); //category, searchQuery,

    setIsFilterChanged(false);
  }, [dispatch, selectedOptionsSex, selectedOptionsAge, isFilterChanged]);

  const handleOptionChange = (name, checkedValues) => {
    if (name === 'sex') {
      setSelectedOptionsSex(checkedValues);
    } else if (name === 'age') {
      setSelectedOptionsAge(checkedValues);
    }

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
          {optionsByAge.map(option => (
            <Checkbox
              key={option.value}
              checked={selectedOptionsAge === option.value}
              onChange={() => handleOptionChange('age', option.value)}
              className={css.checkbox}
            >
              {option.label}
            </Checkbox>
          ))}
        </Panel>
        <Panel header="By gender" key="2" className={css.title}>
          {optionsByGender.map(option => (
            <Checkbox
              key={option.value}
              checked={selectedOptionsSex === option.value}
              onChange={() => handleOptionChange('sex', option.value)}
              className={css.checkbox}
            >
              {option.label}
            </Checkbox>
          ))}
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoticesBurgerMenu;
