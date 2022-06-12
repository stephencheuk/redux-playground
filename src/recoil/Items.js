import { useEffect } from "react";
import { prodState } from "./prodatom.js";

import { useRecoilState } from "recoil";
import { cartState } from "./atoms";

import Item from "./item";

const Items = () => {
  const [cart] = useRecoilState(cartState);
  const [prod, setProd] = useRecoilState(prodState);

  console.log("Items loaded", prod);

  useEffect(() => {
    // prod.loadProd();
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h2>Items</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {prod.items.loading ? (
          <div>Data Loading...</div>
        ) : (
          prod.items.length === 0 && (
            <div>None of item available now, please retry later</div>
          )
        )}
        {prod.items.map((i, k) => (
          <Item key={k} data={i} />
        ))}
      </div>
    </div>
  );
};

export default Items;
