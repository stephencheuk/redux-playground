import { observer } from 'mobx-react'
import cartMobx from './cartMobx'

const ItemCartBtn = ({data}) => {

  const myItem = cartMobx.ItemInCart(data.title);
  console.log("item Cart Btn");

  return (
      <div style={{ textAlign: 'center' }}>
        { /*myItem?.qty || (<button onClick={ e => dispatch(actions.add(data)) }>＋</button>)*/ }
        { /*myItem?.qty && (<button onClick={ e => dispatch(actions.sub(data)) }>—</button>)*/ }
        { myItem?.qty || (<button onClick={ e => cartMobx.add(data) }>＋</button>) }
        { myItem?.qty && (<button onClick={ e => cartMobx.sub(data) }>—</button>) }
     </div>
  );
}

export default observer(ItemCartBtn)