import { useSelector } from 'react-redux'

const Debugger = () => {
  let s = useSelector(s => s);
  return <div>{ JSON.stringify(s) }</div>
};

export default Debugger;