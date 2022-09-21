import React from 'react';
import style from './Home.module.css';
import Navbar from '../components/Navbar';
import Input from '../components/Input/Input';
import ProductList from '../components/ProductList/ProductList';
import searchIcon from '../assets/img/search-icon.svg';
import Pagination from '../components/Pagination/Pagination';

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.wrapper}>
        <div className={style.search}>
          <Input placeholder={'Search'} />
          <img src={searchIcon} alt="searchIcon" className={style.searchIcon} />
        </div>
        <div className={style.productList}>
          <ProductList />
        </div>
        <div className={style.pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;
