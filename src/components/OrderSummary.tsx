import type { CartItem } from "../types";

interface OrderSummaryProps {
  cart: CartItem[];
}

const OrderSummary = ({ cart }: OrderSummaryProps) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = Math.floor(subtotal * 0.1);
  const total = subtotal + tax;

  return (
    <div className="bg-slate-50 p-6 rounded-xl space-y-4">
      <div className="flex justify-between text-slate-600">
        <span>상품 금액</span>
        <span>{subtotal.toLocaleString()}원</span>
      </div>
      <div className="flex justify-between text-slate-600">
        <span>부가세 (10%)</span>
        <span>{tax.toLocaleString()}원</span>
      </div>
      <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
        <span className="font-bold text-lg text-slate-800">결제 예정 금액</span>
        <span className="font-bold text-2xl text-blue-600">
          {total.toLocaleString()}원
        </span>
      </div>
      <button
        disabled={cart.length === 0}
        className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
      >
        주문하기
      </button>
    </div>
  );
};

export default OrderSummary;
