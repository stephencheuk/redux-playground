//import { useSelector, useDispatch } from 'react-redux'
//import { actions, ItemInCart } from './cartSlice'
// import { actions, ItemInCart } from './userSlice'

import ItemCartBtn from "./item_cart_btn";

const Item = ({data}) => {

  //const myItem = useSelector(ItemInCart(data.title));
  //const dispatch = useDispatch();
  console.log("item loaded");

  return (
    <div style={{
      width: '250px',
      height: '250px',
      border: '1px solid black',
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ textAlign: 'center' }}>{ data.title }</div>
        <div style={{ textAlign: 'center' }}>US${ data.price }</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img style={ { maxWidth: '200px', maxHeight: '100px' } } src={ data.images[0] } alt=""/>
      </div>
      <ItemCartBtn data={ data } />
    </div>
  );

}

export default Item;