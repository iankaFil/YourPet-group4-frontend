import { Checkbox, Collapse } from '@mui/material';
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

const NoticesFilterAccordion = () => {
  //   const dispatch = useDispatch();
  //   const filterValue = useSelector(selectNoticesFilters);

  //   const debouncedSetFilter = useCallback(
  //     debounce(filter => {
  //       dispatch(setFilter(filter));
  //     }, 300),
  //     [dispatch]
  //   );

  //   const handleClick = e => {
  //     const { name, value, checked } = e.target;
  //     const updatedFilter = { ...filterValue };

  //     if (name === 'age') {
  //       updatedFilter.byAge = {
  //         ...updatedFilter.byAge,
  //         [value]: checked,
  //       };
  //     } else if (name === 'gender') {
  //       updatedFilter.byGender = {
  //         ...updatedFilter.byGender,
  //         [value]: checked,
  //       };
  //     }

  //     debouncedSetFilter(updatedFilter);
  //   };

  return (
    <div className={css.dropdown}>
      <span className={css.filterTitle}>Filters</span>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <Down className={cn(css.Down, { [css.active]: isActive })} />
        )}
        className={css.filterWrapper}
      >
        <Panel header="By age" key="1" className={css.title}>
          <Checkbox.Group
            name={'age'}
            options={optionsByAge}
            // onClick={handleClick}
            className={css.checkbox}
          />
        </Panel>
        <Panel header="By gender" key="2" className={css.title}>
          <Checkbox.Group
            name={'gender'}
            options={optionsByGender}
            // onClick={handleClick}
            className={css.checkbox}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoticesFilterAccordion;
