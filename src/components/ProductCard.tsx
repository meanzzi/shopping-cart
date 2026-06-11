import type { Product } from "../types";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>
          <span className="text-sm bg-slate-100 px-2 py-1 rounded text-slate-600">
            {product.category}
          </span>
        </div>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">
            {product.price.toLocaleString()}원
          </span>
          {/* 
            [Context API 적용 포인트 4]
            이제 하위 컴포넌트에서 Context의 addToCart를 직접 호출합니다.
            Props Drilling이 해결되었습니다.
          */}
          <button
            onClick={() => addToCart(product)}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
