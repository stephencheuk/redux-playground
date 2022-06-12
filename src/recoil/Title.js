import { useRecoilState } from "recoil";
import { bussinessNameState } from "./atoms";

const Title = () => {
  const [businessName, setBusinessName] = useRecoilState(bussinessNameState);

  return <div>Title: {businessName}</div>;
};

export default Title;
