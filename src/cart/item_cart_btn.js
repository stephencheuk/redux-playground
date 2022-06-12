import { useSelector, useDispatch } from 'react-redux'
import { actions, ItemInCart } from './cartSlice'

const ItemCartBtn = ({data}) => {

  const myItem = useSelector(ItemInCart(data.name));
  const dispatch = useDispatch();

  console.log("ItemCartBtn loaded");

  return (
      <div style={{ textAlign: 'center' }}>
        { myItem?.qty || (<button onClick={ e => dispatch(actions.add(data)) }>＋</button>) }
        { myItem?.qty && (<button onClick={ e => dispatch(actions.sub(data)) }>—</button>) }
     </div>
  )
}

export default ItemCartBtn;