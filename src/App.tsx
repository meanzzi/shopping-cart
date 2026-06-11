import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { PRODUCTS } from "./data";
import { CartProvider } from "./context/CartContext";

function App() {
  /**
   * [Context API 적용 포인트 1]
   * 기존에 App에서 관리하던 모든 상태와 함수들을 CartProvider로 옮겼습니다.
   * 이제 더 이상 여러 단계를 거쳐 Props를 전달(Props Drilling)할 필요가 없습니다.
   */

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-50 font-sans">
        {/* Header 내부에서 useCart()를 사용하여 직접 cartCount를 가져올 것입니다. */}
        <Header />

        {/* 
          MainPage로 전달하던 복잡한 props들이 사라졌습니다.
          하위 컴포넌트들은 각자 필요한 데이터를 Context에서 직접 꺼내 씁니다.
        */}
        <MainPage products={PRODUCTS} />

        <footer className="bg-white border-t border-slate-200 py-10 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
            &copy; 2026 TECHSTORE. All rights reserved.
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
