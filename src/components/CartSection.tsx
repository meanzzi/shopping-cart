import { useCart } from "../context/CartContext";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

const CartSection = () => {
  const { cart } = useCart();

  return (
    <aside className="w-full lg:w-96 bg-white border border-slate-200 rounded-2xl p-6 h-fit sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">장바구니</h2>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
          {cart.length}
        </span>
      </div>

      {/* 
        [Context API 적용 포인트 5]
        CartList와 OrderSummary로 더 이상 props를 전달하지 않습니다.
        해당 컴포넌트들이 직접 Context를 사용합니다.
      */}
      <CartList />

      <div className="mt-8">
        <OrderSummary />
      </div>
    </aside>
  );
};

export default CartSection;
