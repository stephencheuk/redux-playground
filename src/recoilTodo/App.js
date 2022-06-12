import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { TodoInfo } from "./TodoInfo";

const App = () => {
  return (
    <div className="app">
      <h1>Recoild App (1 level structure)</h1>
      <RecoilRoot>
        <Suspense fallback="loading...">
          <div>
            Todo Name: <TodoInfo />
          </div>
        </Suspense>
      </RecoilRoot>
    </div>
  );
};

export default App;
