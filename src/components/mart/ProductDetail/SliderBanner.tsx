import React, { useCallback, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import QuantityControls from '@/components/common/core/QuantityControl';
import { ProductProps } from '@/store/features/Mart/MartProduct/productTypes';
import { addProductFromProductDetail, removeProductFromProductDetail } from '@/store/features/Mart/MartProduct/productThunk';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCartItems } from '@/store/features/Mart/Cart/cartThunk';


interface SliderBannerProps {
    product: ProductProps
}

const SliderBanner: React.FC<SliderBannerProps> = ({ product }) => {

    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state) => state.martCart);

    const handleAddProduct = useCallback(() => {
        dispatch(addProductFromProductDetail({ productId: product.productId, storeId: product.storeId }));
    }, [dispatch, product.productId, product.storeId]);

    const handleRemoveProduct = useCallback(() => {
        console.log("testtt");
        dispatch(removeProductFromProductDetail({
            cartId: items?.[0].cartId,
            productId: product.productId,
            storeId: product.storeId,
            displayCategory: product.displayCategory
        }));
    }, [dispatch, product.productId, product.storeId, items?.[0]?.cartId]);


    useEffect(() => {
        if (items.length === 0) {
            dispatch(getCartItems());
        }
    }, [])

    return (
        <div className="card card-simple">
            <div className="banner-slider-item">
                <div className="ribbon-down">
                    <span className="d-block text-percentage">25%</span>
                    <span className="d-block text-percentage">OFF</span>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        // dynamicBullets: true,
                    }}
                    className="Slider-item-detail"
                >
                    {product?.images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="item-banner">
                                <img src={image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="card-product">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <div className="product-price d-flex align-items-center">
                            <span className="discounted-price">{product.price}</span>
                            <span className="original-price">₵1.00</span>
                        </div>
                        <h2 className="product-title">{product.productName}</h2>
                        <p className="product-weight m-0">1 kg</p>
                    </div>
                    <div className="ms-auto">
                        {product.quantity > 0 ? (
                            <QuantityControls
                                quantity={product.quantity}
                                handleAddProduct={handleAddProduct}
                                handleRemoveProduct={handleRemoveProduct}
                            />
                        ) : (
                            <div className="product-lower-content">
                                <button className="btn add-btn" onClick={handleAddProduct}>
                                    ADD
                                </button>
                                <p className="m-0">Customisable</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderBanner





// import React, { useCallback } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import QuantityControls from "@/components/common/core/QuantityControl";
// import { ProductProps } from "@/store/features/Mart/MartProduct/productTypes";
// import { addProductFromProductList, removeProductFromProductList } from "@/store/features/Mart/MartProduct/productThunk";
// import { useAppDispatch } from "@/store/hooks";

// interface SliderBannerProps {
//     product: ProductProps;
// }

// const SliderBanner: React.FC<SliderBannerProps> = ({ product }) => {
//     const dispatch = useAppDispatch();

//     const images = product.images || []; // Ensure images exist
//     const price = product.di || product.price || "₵0.00";
//     const productName = product.productName || "Unnamed Product";
//     const productQuantity = product.quantity || 0; // Ensure it's a number

//     const handleAddProduct = useCallback(() => {
//         dispatch(addProductFromProductList({ productId: product.productId, storeId: product.storeId }));
//     }, [dispatch, product.productId, product.storeId]);

//     const handleRemoveProduct = useCallback(() => {
//         dispatch(removeProductFromProductList({
//             cartId: product.cartId || "", // Ensure cartId exists
//             productId: product.productId,
//             storeId: product.storeId,
//             displayCategory: product.displayCategory
//         }));
//     }, [dispatch, product]);


//     return (
//         <div className="card card-simple">
//             <div className="banner-slider-item">
//                 <div className="ribbon-down">
//                     <span className="d-block text-percentage">25%</span>
//                     <span className="d-block text-percentage">OFF</span>
//                 </div>
//                 <Swiper
//                     slidesPerView={1}
//                     spaceBetween={0}
//                     modules={[Pagination]}
//                     pagination={{
//                         clickable: true,
//                         // dynamicBullets: true,
//                     }}
//                     className="Slider-item-detail"
//                 >
//                     {images?.map((image, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="item-banner">
//                                 <img src={image} alt="" />
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//             <div className="card-product">
//                 <div className="d-flex align-items-center">
//                     <div className="flex-grow-1">
//                         <div className="product-price d-flex align-items-center">
//                             <span className="discounted-price">{price}</span>
//                             <span className="original-price">₵1.00</span>
//                         </div>
//                         <h2 className="product-title">{productName}</h2>
//                         <p className="product-weight m-0">1 kg</p>
//                     </div>
//                     <div className="ms-auto">
//                         {/* <Link href="" className="btn btn-add">ADD</Link> */}
//                         {productQuantity > 0 ? (
//                             <QuantityControls
//                                 quantity={productQuantity}
//                                 handleAddProduct={handleAddProduct}
//                                 handleRemoveProduct={handleRemoveProduct}
//                             />
//                         ) : (
//                             <div className="product-lower-content">
//                                 <button className="btn add-btn" onClick={handleAddProduct}>
//                                     ADD
//                                 </button>
//                                 <p className="m-0">Customisable</p>
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// };

// export default SliderBanner;