import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem/CartItem';
import style from './Cart.module.css';
import { Link } from 'react-router-dom';
import { removeAllCartItems } from '../redux/slices/productSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productSlice.cart);
  const totalCartPrice = useSelector((state) => state.productSlice.totalPrice);

  return (
    <div className={style.cart}>
      {cartItems.length ? (
        <>
          <div className={style.totalPrice}>Total price: {totalCartPrice}</div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <button className={style.deleteAll} onClick={() => dispatch(removeAllCartItems())}>
            Delete All
          </button>
        </>
      ) : (
        <div className={style.emptyCart}>
          <h2>Ви ще нічого не добавили в корзину. Ваша корзина порожня!</h2>
          <Link to="/" className={style.continueBuy}>
            Повернутися до покупок
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
