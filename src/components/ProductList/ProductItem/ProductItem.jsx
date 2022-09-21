import React from 'react';
import style from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { setCart } from '../../../redux/slices/productSlice';

const ProductItem = ({ category, images, price, rating, title, id }) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(setCart({ id, images, title, price, category }));
  };

  return (
    <div className={style.cardWrapper}>
      <div className={style.cardFlex}>
        <div className={style.cardImg}>
          <img src={images[0]} alt={category} />
        </div>
        <div className={style.cardInfo}>
          <div className={style.infoRatePrice}>
            <div className={style.cardRate}>
              <span>{rating}</span>
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.26296 3.60776L6.99999 0L4.73701 3.60776L0.34259 4.49139L3.33842 7.60474L2.88549 11.7586L6.99999 10.075L11.1145 11.7586L10.6616 7.60474L13.6574 4.49139L9.26296 3.60776ZM11.6722 5.11223L8.64429 4.50338L6.99999 1.88193L5.35568 4.50338L2.32777 5.11223L4.38321 7.24829L4.06171 10.1968L6.99999 8.99452L9.93826 10.1968L9.61676 7.24829L11.6722 5.11223Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={style.cardPrice}>
              <span>{price}</span>
            </div>
          </div>
          <div className={style.cardDecs}>
            <p>{title}</p>
          </div>
          <div className={style.cardCategory}>
            <span>{category}</span>
          </div>
        </div>
      </div>
      <div>
        <button className={style.cardBtnAdd} onClick={() => handleAddClick()}>
          <span>add to card</span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
