import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getListOfCategories,
  setActiveCategories,
  removeAnActiveCategories,
} from '../../../redux/slices/categoriesSlice';
import {
  getListOfBrands,
  setActiveBrands,
  removeAnActiveBrands,
} from '../../../redux/slices/brandsSlice';
import FilterItem from './FilterItem/FilterItem';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesSlice);
  const { brands } = useSelector((state) => state.brandsSlice);

  useEffect(() => {
    dispatch(getListOfCategories());
    dispatch(getListOfBrands());
  }, [dispatch]);

  return (
    <div className="">
      <div className={style.filterCategories}>
        <h2 className={style.filterHeader}>Categories</h2>
        {categories.map((item, index) => (
          <FilterItem
            key={item + index}
            item={item}
            name={'category'}
            setActiveCheckbox={setActiveCategories}
            removeAnActiveCheckbox={removeAnActiveCategories}
          />
        ))}
      </div>
      <div className={style.filterBrands}>
        <h2 className={style.filterHeader}>Brands</h2>
        {brands.map((item, index) => (
          <FilterItem
            key={item + index}
            item={item}
            name={'brand'}
            setActiveCheckbox={setActiveBrands}
            removeAnActiveCheckbox={removeAnActiveBrands}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
