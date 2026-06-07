import type { Product, CartItem } from "../types";
import ProductSection from "./ProductSection";
import CartSection from "./CartSection";

interface MainPageProps {
  products: Product[];
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

const MainPage = ({
  products,
  cart,
  onAddToCart,
  onUpdateQuantity,
  onRemove,
}: MainPageProps) => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-10">
      {/* 
        [Props Drilling 학습 포인트 3]
        MainPage는 전달받은 products와 onAddToCart를 다시 ProductSection으로 전달합니다. (3단계)
      */}
      <ProductSection products={products} onAddToCart={onAddToCart} />

      {/* 
        마찬가지로 cart와 관리 함수들을 CartSection으로 전달합니다. (3단계)
      */}
      <CartSection
        cart={cart}
        onUpdateQuantity={onUpdateQuantity}
        onRemove={onRemove}
      />
    </main>
  );
};

export default MainPage;
