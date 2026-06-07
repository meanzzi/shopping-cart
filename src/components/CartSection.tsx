import type { CartItem } from "../types";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

interface CartSectionProps {
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

const CartSection = ({ cart, onUpdateQuantity, onRemove }: CartSectionProps) => {
  return (
    <aside className="w-full lg:w-96 bg-white border border-slate-200 rounded-2xl p-6 h-fit sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">장바구니</h2>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
          {cart.length}
        </span>
      </div>

      <CartList
        cart={cart}
        onUpdateQuantity={onUpdateQuantity}
        onRemove={onRemove}
      />

      <div className="mt-8">
        <OrderSummary cart={cart} />
      </div>
    </aside>
  );
};

export default CartSection;
