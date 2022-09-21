import React from 'react';
import Filter from './Filter/Filter';
import style from './Navbar.module.css';
import { useDispatch } from 'react-redux';
import { removeAllCategories } from '../../redux/slices/categoriesSlice';
import { removeAllBrands } from '../../redux/slices/brandsSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClickClear = () => {
    dispatch(removeAllCategories());
    dispatch(removeAllBrands());
  };

  return (
    <>
      <div className={style.navbar}>
        <Filter />
      </div>
      <button className={style.clearAllFilters} onClick={handleClickClear}>
        Clear all filters
      </button>
    </>
  );
};

export default Navbar;
