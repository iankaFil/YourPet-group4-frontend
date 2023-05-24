// import React, { useEffect, useState } from 'react';
// import { Checkbox, Collapse } from 'antd';
// import { ReactComponent as Down } from 'Components/SvgIcons/Down.svg';
// import { useDispatch } from 'react-redux';
// import cn from 'classnames';
// import css from './NoticesBurgerMenu.module.css';
// import { fetchNoticesByTitle } from 'Redux/notices/notices-operations';

// import { setFilter } from 'Redux/filters/filters-slice';

// const { Panel } = Collapse;

// const optionsByAge = [
//   {
//     label: '3-12 m',
//     value: '3-12m',
//   },
//   {
//     label: '1 year',
//     value: '1year',
//   },
//   {
//     label: '2 year',
//     value: '2year',
//   },
// ];

// const optionsByGender = [
//   {
//     label: 'female',
//     value: 'female',
//   },
//   {
//     label: 'male',
//     value: 'male',
//   },
// ];

// const NoticesBurgerMenu = () => {
//   const [selectedOptionsSex, setSelectedOptionsSex] = useState([]);
//   const [selectedOptionsAge, setSelectedOptionsAge] = useState([]);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     // console.log(selectedOptionsSex, selectedOptionsAge);
//     // if (selectedOptionsSex.length === 0 && selectedOptionsAge.length === 0) {
//     //   return;
//     // }

//     const handleFilterChange = (filterName, filterValue) => {
//       dispatch(setFilter({ filterName, filterValue }));
//     };

//     handleFilterChange('sex', selectedOptionsSex);
//     handleFilterChange('age', selectedOptionsAge);

//     const sendData = {
//       age: selectedOptionsAge,
//       sex: selectedOptionsSex,
//     };
//     console.log('sendData', sendData);
//     dispatch(
//       fetchNoticesByTitle({
//         gender: selectedOptionsSex,
//         age: selectedOptionsAge,
//       })
//     ); //category, searchQuery,
//   }, [dispatch, selectedOptionsSex, selectedOptionsAge]);

//   // const handleOptionChange = checkedValues => {
//   //   console.log("ghbgynhnnnnn",checkedValues);
//   //   setSelectedOptions(prevstate => [...prevstate, ...checkedValues]);
//   // };

//   return (
//     <div className={css.dropdown}>
//       <Collapse
//         bordered={false}
//         expandIcon={({ isActive }) => (
//           <Down className={cn(css.down_icon, { [css.active]: isActive })} />
//         )}
//         className={css.filterWrapper}
//       >
//         <Panel header="By age" key="1" className={css.title}>
//           <Checkbox.Group
//             options={optionsByAge}
//             value={selectedOptionsAge}
//             onChange={e => setSelectedOptionsAge(e)}
//             className={css.checkbox}
//           />
//         </Panel>
//         <Panel header="By gender" key="2" className={css.title}>
//           <Checkbox.Group
//             options={optionsByGender}
//             value={selectedOptionsSex}
//             onChange={e => setSelectedOptionsSex(e)}
//             className={css.checkbox}
//           />
//         </Panel>
//       </Collapse>
//     </div>
//   );
// };

// export default NoticesBurgerMenu;

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
          <Checkbox.Group
            options={optionsByAge}
            value={selectedOptionsAge}
            onChange={checkedValues => handleOptionChange('age', checkedValues)}
            className={css.checkbox}
          />
        </Panel>
        <Panel header="By gender" key="2" className={css.title}>
          <Checkbox.Group
            options={optionsByGender}
            value={selectedOptionsSex}
            onChange={checkedValues => handleOptionChange('sex', checkedValues)}
            className={css.checkbox}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoticesBurgerMenu;

// import React, { useEffect } from 'react';
// import { Checkbox, Collapse } from 'antd';
// import { ReactComponent as Down } from 'Components/SvgIcons/Down.svg';
// import { useDispatch, useSelector } from 'react-redux';
// import cn from 'classnames';
// import css from './NoticesBurgerMenu.module.css';
// import { fetchNoticesByTitle } from 'Redux/notices/notices-operations';

// import { setFilter } from 'Redux/filters/filters-slice';
// import {
//   selectSelectedOptionsSex,
//   selectSelectedOptionsAge,
// } from 'Redux/filters/filters-selectors';

// const { Panel } = Collapse;

// const optionsByAge = [
//   {
//     label: '3-12 m',
//     value: '3-12m',
//   },
//   {
//     label: '1 year',
//     value: '1year',
//   },
//   {
//     label: '2 year',
//     value: '2year',
//   },
// ];

// const optionsByGender = [
//   {
//     label: 'female',
//     value: 'female',
//   },
//   {
//     label: 'male',
//     value: 'male',
//   },
// ];

// const NoticesBurgerMenu = () => {
//   const dispatch = useDispatch();
//   const selectedOptionsSex = useSelector(selectSelectedOptionsSex);
//   const selectedOptionsAge = useSelector(selectSelectedOptionsAge);

//   console.log('selectedOptionsSex----------------', selectedOptionsSex);
//   console.log('selectedOptionsAge--------------++', selectedOptionsAge);

//   useEffect(() => {
//     const handleFilterChange = (filterName, filterValue) => {
//       dispatch(setFilter({ filterName, filterValue }));
//     };

//     handleFilterChange('sex', selectedOptionsSex);
//     handleFilterChange('age', selectedOptionsAge);

//     const sendData = {
//       age: selectedOptionsAge,
//       sex: selectedOptionsSex,
//     };
//     console.log('sendData', sendData);
//     dispatch(
//       fetchNoticesByTitle({
//         gender: selectedOptionsSex,
//         age: selectedOptionsAge,
//       })
//     );
//   }, [dispatch, selectedOptionsSex, selectedOptionsAge]);

//   const handleOptionChange = (name, checkedValues) => {
//     // Dispatch an action to update the selected options in Redux state
//     // For example: dispatch(updateSelectedOptions(name, checkedValues));
//   };

//   const handleCollapseChange = key => {
//     // Handle collapse change if needed
//   };

//   return (
//     <div className={css.dropdown}>
//       <Collapse
//         bordered={false}
//         expandIcon={({ isActive }) => (
//           <Down className={cn(css.down_icon, { [css.active]: isActive })} />
//         )}
//         className={css.filterWrapper}
//         onChange={handleCollapseChange}
//       >
//         <Panel header="By age" key="1" className={css.title}>
//           <Checkbox.Group
//             options={optionsByAge}
//             // value={selectedOptionsAge}
//             onChange={checkedValues => handleOptionChange('age', checkedValues)}
//             className={css.checkbox}
//           />
//         </Panel>
//         <Panel header="By gender" key="2" className={css.title}>
//           <Checkbox.Group
//             options={optionsByGender}
//             // value={selectedOptionsSex}
//             onChange={checkedValues => handleOptionChange('sex', checkedValues)}
//             className={css.checkbox}
//           />
//         </Panel>
//       </Collapse>
//     </div>
//   );
// };

// export default NoticesBurgerMenu;
