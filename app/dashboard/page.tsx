import { getProducts } from "@/lib/products";
import Card from "@/ui/card";
export default async function Dashboard() {
  const { products } = await getProducts();
  console.log(products, "halo");
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {products &&
          products.map((product: any, key: any) => (
            <Card
              key={key}
              title={product.title}
              description={product.description}
              url={product.thumbnail}
            />
          ))}
      </div>
    </>
  );
}
