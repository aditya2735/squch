"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import Badge from "react-bootstrap/Badge";
import { useRouter } from "next/navigation";
import { ProductListProps } from "@/store/features/Mart/MartProduct/productTypes";

import Green from "../../../../public/images/green.svg";
import Rating from "../../../../public/images/rating.svg";
import Plus from "../../../../public/images/plus.svg";

const ProductList: React.FC<ProductListProps> = ({ products, storeId}) => {

  const router = useRouter();
  const [expanded1, setExpanded1] = useState(false);
  const contentRef1 = useRef<HTMLDivElement | null>(null);

  const toggleExpand = (
    ref: React.RefObject<HTMLDivElement | null>,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    expanded: boolean
  ) => {
    if (ref.current) {
      ref.current.style.height = expanded ? "22px" : `${ref.current.scrollHeight}px`;
    }
    setExpanded(!expanded);
  };

  const handleClick = (productId: number) => {
    router.push(`/home/mart/store-detail/${storeId}/product/${productId}`)
  }

  return (
    <div className='recommended-product'>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Recommended {products.length}
          </Accordion.Header>
          <Accordion.Body>
            {
              products.length === 0 ? (
                <div className="text-center text-muted">No products found</div>
              ) : (
                products.map((product, index) => (
                  <div
                    className='prod-list-item'
                    key={index}
                    onClick={() => handleClick(product.productId)}
                  >
                    <div className='d-flex'>
                      <div className='flex-grow-1'>

                        <div className='d-flex align-items-center card-badge-box'>
                          <Image src={Green} alt="green icon" />

                          <Badge className='badge-box bestseller'>
                            Bestseller
                          </Badge>

                        </div>

                        <div className='prod-ttl'>
                          {product.productName}
                        </div>

                        <p className='prod-price'>
                          ₵ {product.price}
                        </p>

                        <div className='d-flex align-items-center prod-rating'>
                          <Image src={Rating} alt="rating icon" />
                          {/* // TODO: Rating is missing in API */}
                          <span className='text-pink'>4.2</span>
                          <span>(186)</span>
                        </div>

                        <div
                          className='prod-dis-text'
                          ref={contentRef1}
                          style={{ height: "22px", overflow: "hidden", transition: "height 0.5s ease-in-out", }}
                        >
                          <p className='m-0'>
                            {product.productDescription}
                          </p>
                        </div>
                        <button onClick={() => toggleExpand(contentRef1, setExpanded1, expanded1)} className="btn show-more-btn">
                          <Image src={Plus} alt="plus icon" />
                          {expanded1 ? "Show Less" : "Show More"}
                        </button>
                      </div>
                      <div className='ms-auto'>
                        <div className='card-product-add'>
                          <div className="product-thumb">
                            <img src={product.images[0]} alt="product image" />
                          </div>
                          <div className="product-lower-content">
                            <button className="btn add-btn">ADD</button>
                            <p className="m-0">Customisable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProductList;
