import { useState } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { PRODUCTS } from "./data";
import type { Product, CartItem } from "./types";

function App() {
  /**
   * [Props Drilling 학습 포인트 1]
   * 최상위 App 컴포넌트에서 모든 상태(cart)와 상태 변경 함수들(addToCart, updateQuantity, removeFromCart)을 관리합니다.
   * 이 데이터들은 여러 단계의 하위 컴포넌트를 거쳐 실제 사용되는 곳까지 전달될 예정입니다.
   */
  const [cart, setCart] = useState<CartItem[]>([]);

  // 장바구니에 상품 추가
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // 수량 변경 (delta가 1이면 증가, -1이면 감소)
  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 장바구니에서 삭제
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header로 cartCount 전달 (1단계) */}
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      
      {/* 
        [Props Drilling 학습 포인트 2]
        MainPage는 아래의 모든 Props를 직접 사용하지 않습니다. 
        오직 하위 컴포넌트로 전달하기 위해 이 Props들을 받습니다. (2단계)
      */}
      <MainPage
        products={PRODUCTS}
        cart={cart}
        onAddToCart={addToCart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <footer className="bg-white border-t border-slate-200 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          &copy; 2024 TECHSTORE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
