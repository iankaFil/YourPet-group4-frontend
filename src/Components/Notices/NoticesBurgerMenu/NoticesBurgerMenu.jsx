import React, { useState } from 'react';
import { Checkbox, Collapse } from 'antd';
import { ReactComponent as Down } from 'Components/SvgIcons/Down.svg';
import cn from 'classnames';
import css from './NoticesBurgerMenu.module.css';

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
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = checkedValues => {
    setSelectedOptions(checkedValues);
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
            value={selectedOptions}
            onChange={handleOptionChange}
            className={css.checkbox}
          />
        </Panel>
        <Panel header="By gender" key="2" className={css.title}>
          <Checkbox.Group
            options={optionsByGender}
            value={selectedOptions}
            onChange={handleOptionChange}
            className={css.checkbox}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoticesBurgerMenu;
