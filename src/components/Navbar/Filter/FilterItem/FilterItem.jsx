import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './FilterItem.module.css';

const FilterItem = ({ item, name, setActiveCheckbox, removeAnActiveCheckbox }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const onChangeCheckbox = ({ target: { checked, value } }) => {
    if (checked === true) {
      dispatch(setActiveCheckbox(`&${name}=${value.toLowerCase().replace(/ /g, '_')}`));
    } else {
      dispatch(removeAnActiveCheckbox(`&${name}=${item.toLowerCase().replace(/ /g, '_')}`));
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className={style.filterItem}>
      <input
        id={item}
        className={style.checkbox}
        type="checkbox"
        value={item}
        checked={isChecked}
        onChange={onChangeCheckbox}
        name={name}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
};

export default FilterItem;
