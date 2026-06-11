/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";
import type { Product, CartItem } from "../types";

// Context에서 다룰 값들의 타입 정의
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
}

// Context 생성
const CartContext = createContext<CartContextType | undefined>(undefined);

// Context를 사용하기 위한 커스텀 훅
// 이 훅을 사용하면 컴포넌트에서 매번 useContext(CartContext)를 할 필요가 없고, 
// Context가 Provider 외부에서 사용될 경우 에러를 발생시켜 안전하게 사용할 수 있습니다.
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Provider 컴포넌트
// App.tsx에 있던 상태 관리 로직을 이곳으로 옮겨와 캡슐화합니다.
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 장바구니에 상품 추가
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
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
          item.id === id ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // 장바구니에서 삭제
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 총 상품 수량 계산
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
