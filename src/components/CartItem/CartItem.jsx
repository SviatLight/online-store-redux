import React from 'react';
import style from './CartItem.module.css';
import { removeCartItem, setCart, minusItem } from '../../redux/slices/productSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, images, title, price, category, count }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.cartItem}>
      <div className={style.productImg}>
        <img src={images[0]} alt={category} />
      </div>
      <div className={style.productTitle}>
        <p>{title}</p>
      </div>
      <div className={style.decInc}>
        <div className={style.decIncBorder} onClick={() => dispatch(minusItem(id))}>
          -
        </div>
        <div className={style.countItems}>{count}</div>
        <div className={style.decIncBorder} onClick={() => dispatch(setCart({ id }))}>
          +
        </div>
      </div>
      <div className={style.productPrice}>
        <span>{price * count}</span>
      </div>
      <div className={style.productDelete} onClick={() => dispatch(removeCartItem(id))}>
        X
      </div>
    </div>
  );
};

export default CartItem;
