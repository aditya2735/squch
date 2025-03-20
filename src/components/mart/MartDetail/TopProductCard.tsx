import React, { useCallback } from 'react';
import ImagesTopPicks from "../../../../public/images/top-picks.jpg"
import Image from 'next/image';
import { ProductProps } from '@/store/features/Mart/MartProduct/productTypes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addProductToCart, removeProductFromCart } from '@/store/features/Mart/Cart/cartThunk';
import QuantityControls from '@/components/common/core/QuantityControl';
import { addProductFromProductList, removeProductFromProductList } from '@/store/features/Mart/MartProduct/productThunk';
import { useRouter } from 'next/navigation';

interface TopProductCardProps {
    product: ProductProps;
}


const TopProductCard: React.FC<TopProductCardProps> = ({ product }) => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const cart = useAppSelector((state) => state.martCart.items);

    const handleClick = (productId: number) => {
        router.push(`/home/mart/store-detail/${product.storeId}/product/${productId}`);
    };

    const handleAddProduct = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();  // ✅ Prevent navigation
        dispatch(addProductFromProductList({
            productId: product.productId,
            storeId: product.storeId
        }));
    }, [dispatch, product.productId, product.storeId]);

    const handleRemoveProduct = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();  // ✅ Prevent navigation
        dispatch(removeProductFromProductList({
            cartId: cart[0].cartId,
            productId: product.productId,
            storeId: product.storeId,
            displayCategory: product.displayCategory
        }));
    }, [dispatch, product.productId, product.storeId, cart?.[0]?.cartId]);
    


    return (
        <div className="card card-picks" onClick={() => handleClick(product.productId)}>
            <Image
                src={ImagesTopPicks}
                layout="intrinsic"
                alt="product image"
                height={100}
                width={100}
            />
            <div className="position-absolute">

                <div className="product-name-title">
                    {/* <Image src={Green} alt="veg icon" height={1} width={11}/> */}
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.756414" y="1.11579" width="16.7684" height="16.7684" rx="3.17368" stroke="#20A66A" strokeWidth="1.23158" /><circle cx="9.14011" cy="9.49949" r="4.26316" fill="#20A66A" /></svg>
                    <h3 className="prod-ttl">{product.productName}</h3>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="price-product">
                        <span className="d-flex ">
                            <span className="current-price">{product.price}</span>
                            <span className="old-price">¢1.00</span>
                        </span>
                        <p className="product-weight m-0">1 {product.ProductStocks.unit}</p>
                    </div>
                    {
                        product?.quantity > 0 ? (
                            <QuantityControls
                                quantity={product.quantity}
                                handleAddProduct={(event:React.MouseEvent) => handleAddProduct(event)}
                                handleRemoveProduct={(event: React.MouseEvent) => handleRemoveProduct(event)}
                            />
                        ) : (
                            <div className="ms-auto text-end">
                                <button className="btn add-btn" onClick={handleAddProduct}>
                                    ADD
                                </button>
                                <p className="m-0 text-customizable m-0">
                                    Customisable
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProductCard