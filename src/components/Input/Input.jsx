import React from 'react';
import style from './Input.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/productSlice';

const Input = ({ placeholder }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.productSlice.search);
  return (
    <input
      className={style.input}
      value={search}
      placeholder={placeholder}
      onChange={(e) => dispatch(setSearch(e.target.value))}
      type="text"
    />
  );
};

export default Input;
