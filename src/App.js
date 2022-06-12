import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Redux Demo</h1>
      <div className="container">
        <div className="nav">
          <ul>
            <li>
              Redux
              <ul>
                <li>
                  <Link to={"/redux"}>Original Redux</Link>
                </li>
              </ul>
            </li>
            <li>
              Redux Toolkit
              <ul>
                <li>
                  <Link to={"/reduxToolkit"}>Redux Toolkit</Link>
                </li>
              </ul>
            </li>
            <li>
              Mobx
              <ul>
                <li>
                  <Link to={"/mobx"}>Mobx (Tutorial)</Link>
                </li>
                <li>
                  <Link to={"/cart"}>Cart with Mobx</Link>
                </li>
              </ul>
            </li>
            <li>
              Recoil
              <ul>
                <li>
                  <Link to={"/recoil"}>Cat with Recoil</Link>
                </li>
                <li>
                  <Link to={"/recoilTodo"}>
                    Recoil (Todo / 1 leve struture)
                  </Link>
                </li>
                {/* <li>
                  <Link to={"/recoilWhale"}>
                    Recoil (Whale / 2 level structure)
                  </Link>
                </li> */}
                <li>
                  <Link to={"/recoilPost"}>
                    Posts App with Recoil (Whale / 2 level structure)
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="workspace">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
