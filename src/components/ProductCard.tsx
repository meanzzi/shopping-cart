import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* ... 이미지 및 정보 생략 ... */}
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
            [Props Drilling 학습 포인트 5]
            드디어 최하단 컴포넌트인 ProductCard에서 
            App으로부터 여러 단계를 거쳐 내려온 onAddToCart 함수를 실제로 사용합니다.
          */}
          <button
            onClick={() => onAddToCart(product)}
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
