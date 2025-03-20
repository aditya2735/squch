"use client";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useRouter } from "next/navigation";
import { ProductListProps } from "@/store/features/Mart/MartProduct/productTypes";

import ProductCard from "./ProductCard";

const ProductList: React.FC<ProductListProps> = ({ products, storeId }) => {
  const router = useRouter();

  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleClick = (productId: number) => {
    router.push(`/home/mart/store-detail/${storeId}/product/${productId}`);
  };

  return (
    <div className="recommended-product">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        {products?.length === 0 ? (
          <div className="text-center text-muted">No products found</div>
        ) : (
          products.map((category, categoryIndex) => (
            <Accordion.Item key={categoryIndex} eventKey={String(categoryIndex)}>
              <Accordion.Header>
                {category.categoryName} ({category.products.length})
              </Accordion.Header>
              <Accordion.Body>
                {category.products.length === 0 ? (
                  <div className="text-center text-muted">No products found</div>
                ) : (
                  category.products.map((product, productIndex) => (
                    <ProductCard
                      key={product.productId}
                      product={product}
                      expanded={!!expandedItems[productIndex]}
                      onToggleExpand={() => toggleExpand(productIndex)}
                      onClick={() => handleClick(product.productId)}
                    />
                  ))
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))
        )}
      </Accordion>
    </div>
  );
};

export default ProductList;
