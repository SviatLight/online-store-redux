import React from 'react';
import { useEffect } from 'react';
import style from './ProductList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productSlice';
import ProductItem from './ProductItem/ProductItem';
import Skeleton from './Skeleton';

const ProductList = () => {
  const dispatch = useDispatch();
  const productsProperties = useSelector((state) => state.productSlice);
  const paginationProperties = useSelector((state) => state.productSlice.pagination);
  const searchProperties = useSelector((state) => state.productSlice.search);
  const categoriesProperties = useSelector((state) => state.categoriesSlice.activeCategories);
  const brandsProperties = useSelector((state) => state.brandsSlice.activeBrands);
  const URL_PRODUCTS = `products?_page=${paginationProperties.activePage}&_limit=${
    paginationProperties.itemsPerPage
  }${searchProperties ? `&q=${searchProperties}` : ''}${
    categoriesProperties ? categoriesProperties.join('') : ''
  }${brandsProperties ? brandsProperties.join('') : ''}`;
  useEffect(() => {
    dispatch(fetchProducts(URL_PRODUCTS));
  }, [dispatch, URL_PRODUCTS]);

  return (
    <div className={style.productList}>
      {productsProperties.status === 'loading'
        ? [...new Array(6)].map((_, index) => <Skeleton className={style.skeleton} key={index} />)
        : productsProperties.products.map((item) => <ProductItem key={item.id} {...item} />)}
    </div>
  );
};

export default ProductList;
