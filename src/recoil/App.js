//import { RecoilRoot } from "recoil";

// import HomePage from "./HomePage";

// import Header from "./Header";
// import Items from "./Items";
// import Footer from "./Footer";
// import Debugger from "./Debugger";
// import { useNavigate } from "react-router-dom";

// const App = () => {
//   let navigate = useNavigate();

//   const redirectTo = (href) => {
//     window.history.pushState({}, "", href);
//   };

//   return (
//     <div className="App">
//       <RecoilRoot>
//         <Header />
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button onClick={(e) => navigate("?link=1")}>LINK 1</button>
//           <button onClick={(e) => navigate("?link=2")}>LINK 2</button>
//           <button onClick={(e) => navigate("?link=3")}>LINK 3</button>
//         </div>
//         <h1>Cart App</h1>
//         <h2>use Recoil (Developed by Facebook)</h2>
//         <Items />
//         <Debugger />
//         <Footer />
//       </RecoilRoot>
//     </div>
//   );
// };

import { Suspense } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  selectorFamily,
  useRecoilValue,
  //useSetRecoilState,
  useRecoilCallback,
} from "recoil";

const ProductsQuery = selector({
  key: "ProductsJsonQuery",
  get: async (t) => {
    console.log("ProductsQuery get", t);

    const response = fetch("https://dummyjson.com/products")
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await response.json() : null;

        // console.info(data);

        // check for error response
        if (response.ok) {
          return data.products;
        } else {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((err) => console.log(err));
    //.finally(() => ());

    return (await response) || [];
  },
});

const currentProdIdState = atom({
  key: "CurrentProdIdState",
  default: "",
});

const prodInfoQuery = selectorFamily({
  key: "ProdInfoQuery",
  get: (prodId) => async () => {
    if (prodId === "") return undefined;

    const response = await fetch("/whales/" + prodId);
    return await response.json();
  },
});

const currentProdQuery = selector({
  key: "CurrentProdQuery",
  get: ({ get }) => get(prodInfoQuery(get(currentProdIdState))),
});

function CurrentProdTypes() {
  const Products = useRecoilValue(ProductsQuery);
  //const setProdId = useSetRecoilState(currentProdIdState)

  // const changeProd = useRecoilCallback(({ snapshot, set }) => (prodId) => {
  //   snapshot.getLoadable(prodInfoQuery(prodId));
  //   set(currentProdIdState, prodId);
  // });

  console.info(Products);

  return (
    <ul>
      {Products.map((data) => (
        <div
          key={data.id}
          style={{
            width: "250px",
            height: "250px",
            border: "1px solid black",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ textAlign: "center" }}>{data.title}</div>
            <div style={{ textAlign: "center" }}>US${data.price}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ maxWidth: "200px", maxHeight: "100px" }}
              src={data.images[0]}
              alt=""
            />
          </div>
          {/* <ItemCartBtn data={data} /> */}
        </div>
      ))}
    </ul>
  );
}

function CurrentProdPick() {
  const prod = useRecoilValue(currentProdQuery);

  return (
    <>
      {prod === undefined ? (
        <p>Please choose a prod.</p>
      ) : (
        <>
          <h3>{prod.name}</h3>
          <p>Life span: {prod.maxLifeSpan} yrs</p>
          <p>
            Diet: {prod.diet} ({prod.favoriteFood})
          </p>
          <p>Length: {prod.maxLengthInFt} ft</p>
          <p>{prod.description}</p>
          <img alt={prod.id} src={prod.imgSrc} />
        </>
      )}
    </>
  );
}

function CurrentProdIdValue() {
  const prodId = useRecoilValue(currentProdIdState);

  return <span>{prodId.replace("_", " ")}</span>;
}

const App = () => (
  <RecoilRoot>
    <Suspense fallback={<div>Loading prod types...</div>}>
      <CurrentProdTypes />
      <Suspense
        fallback={
          <div>
            Loading <CurrentProdIdValue /> info...
          </div>
        }
      >
        <CurrentProdPick />
      </Suspense>
    </Suspense>
  </RecoilRoot>
);

export default App;
