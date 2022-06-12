import { useRecoilState } from "recoil";
import { cartState } from "./atoms";

const Debugger = () => {
  const [cart] = useRecoilState(cartState);
  return <div>{JSON.stringify(cart)}</div>;
};
export default Debugger;
