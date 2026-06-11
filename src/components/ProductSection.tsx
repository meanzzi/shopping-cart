import type { Product } from "../types";
import ProductGrid from "./ProductGrid";

interface ProductSectionProps {
  products: Product[];
}

const ProductSection = ({ products }: ProductSectionProps) => {
  return (
    <section className="flex-1">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">추천 상품</h2>
      <ProductGrid products={products} />
    </section>
  );
};

export default ProductSection;
