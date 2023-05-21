import React, { useEffect, useState } from 'react';
import { Checkbox, Collapse } from 'antd';
import { ReactComponent as Down } from 'Components/SvgIcons/Down.svg';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import css from './NoticesBurgerMenu.module.css';
import {fetchNoticesByTitle} from "Redux/notices/notices-operations"

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

const dispatch = useDispatch();
  useEffect(() => {
    // console.log(selectedOptionsSex, selectedOptionsAge);
    const sendData = {
      age: selectedOptionsAge,
      sex: selectedOptionsSex
    };
    console.log(sendData);
    dispatch(fetchNoticesByTitle({  sendData })); //category, searchQuery,
  }, [dispatch, selectedOptionsSex, selectedOptionsAge]);
  

  // const handleOptionChange = checkedValues => {
  //   console.log("ghbgynhnnnnn",checkedValues);
  //   setSelectedOptions(prevstate => [...prevstate, ...checkedValues]);
  // };

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
            value={selectedOptionsAge}
            onChange={e => setSelectedOptionsAge(e)}
            className={css.checkbox}
          />
        </Panel>
        <Panel header="By gender" key="2" className={css.title}>
          <Checkbox.Group
            options={optionsByGender}
            value={selectedOptionsSex}
            onChange={e => setSelectedOptionsSex(e)}
            className={css.checkbox}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoticesBurgerMenu;
