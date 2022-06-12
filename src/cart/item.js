//import { useSelector, useDispatch } from 'react-redux'
//import { actions, ItemInCart } from './cartSlice'
// import { actions, ItemInCart } from './userSlice'

import ItemCartBtn from "./item_cart_btn";

const Item = ({data}) => {

  console.log("Item loaded");

  return (
    <div style={{
      width: '150px',
      height: '150px',
      border: '1px solid black',
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    }}>
      <div style={{ textAlign: 'center' }}>{ data.name }</div>
      <div style={{ textAlign: 'center' }}>US${ data.price }</div>
      <ItemCartBtn data={ data } />
    </div>
  );

}

export default Item;