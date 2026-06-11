import type { Product } from "../types";
import ProductSection from "../components/ProductSection";
import CartSection from "../components/CartSection";

interface MainPageProps {
  products: Product[];
}

const MainPage = ({ products }: MainPageProps) => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-10">
      {/* 
        [Context API 적용 포인트 3]
        MainPage는 더 이상 onAddToCart, cart, onUpdateQuantity 등을 전달하지 않습니다.
        전달받은 products만 ProductSection으로 넘겨줍니다.
      */}
      <ProductSection products={products} />

      {/* 
        CartSection도 이제 props 없이 호출 가능합니다. 
        내부에서 직접 Context를 사용하기 때문입니다.
      */}
      <CartSection />
    </main>
  );
};

export default MainPage;
