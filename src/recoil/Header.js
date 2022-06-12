import { useRecoilState } from "recoil";
import { cartState } from "./atoms";

const Header = () => {
  console.log("Header loaded");

  const [cart] = useRecoilState(cartState);

  const TtlQty = cart.ttlqty;

  return (
    <div
      style={{
        padding: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>Site Name</h2>
      </div>
      <div>
        {!TtlQty && <>None of items in cart</>}
        {TtlQty > 0 && (
          <>
            <font style={{ color: "red", fontWeight: "bold" }}>{TtlQty}</font>{" "}
            item{TtlQty > 1 && <>(s)</>} in cart
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
