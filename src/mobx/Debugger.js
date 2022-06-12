import { observer } from 'mobx-react';
import cartMobx from './cartMobx'

const Debugger = () => {
  return <div>{ JSON.stringify(cartMobx) }</div>
}
export default observer(Debugger);