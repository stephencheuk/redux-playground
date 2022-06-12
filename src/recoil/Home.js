import { useRecoilState } from "recoil";

import { bussinessNameState } from "./atoms";

import Title from "./Title";
import Footer from "./Footer"

const Home = () => {

  const [ businessName, setBusinessName ] = useRecoilState(bussinessNameState)

  const handleChange = (event) => {
    setBusinessName(event.target.value);
  }

  return (
    <>
        <div className="inner-container">
          <div className="fieldset">
            <label htmlFor="">Business Name:</label>
            <input value={businessName} onChange={handleChange} />
          </div>
          <hr />
          <p>

          </p>
        </div>
    </>
  )
}

export default Home;