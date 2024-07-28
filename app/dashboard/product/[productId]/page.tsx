import { notFound } from "next/navigation";
import DetailProduct from "./detail-product";
export default function DetailProductPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  const productId = Number(params.productId);
  if (!productId) {
    notFound();
  }
  console.log(productId, "a");
  return (
    <>
      <DetailProduct />
    </>
  );
}
