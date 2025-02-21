import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import Badge from 'react-bootstrap/esm/Badge';
import Green from "../../../../public/images/green.svg";
import Rating from "../../../../public/images/rating.svg";
import Plus from "../../../../public/images/plus.svg";
import QuantityControls from '@/components/common/core/QuantityControl';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
    addProductToCart,
    getCartItems,
    removeProductFromCart
} from '@/store/features/Mart/Cart/cartThunk';
import { ProductProps } from '@/store/features/Mart/MartProduct/productTypes';


interface ProductCardProps {
    product: ProductProps;
    expanded: boolean;
    onToggleExpand: () => void;
    onClick: () => void;
}


const ProductCard: React.FC<ProductCardProps> = ({ product, expanded, onToggleExpand, onClick }) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.martCart.items);
    const cartItem: any = cart?.find((item) => item.productId === product.productId);

    const handleAddProduct = useCallback(() => {
        dispatch(addProductToCart({ productId: product.productId, storeId: product.storeId }));
    }, [dispatch, product.productId, product.storeId]);

    const handleRemoveProduct = useCallback(() => {
        dispatch(removeProductFromCart({ cartId: cartItem?.cartId, productId: product.productId, storeId: product.storeId }));
    }, [dispatch, product.productId, product.storeId, cartItem?.cartId]);

    useEffect(() => {

    }, [cart]);

    // useEffect(() => {
    //     dispatch(getCartItems());
    // }, [])

    return (
        <div className="prod-list-item">
            <div className="d-flex">
                <div className="flex-grow-1 pointer" onClick={onClick}>
                    <div className="d-flex align-items-center card-badge-box">
                        <Image src={Green} alt="green icon" />
                        <Badge className="badge-box bestseller">
                            Bestseller
                        </Badge>
                    </div>

                    <div className="prod-ttl">
                        {product.productName}
                    </div>
                    <p className="prod-price">
                        ₵ {product.price}
                    </p>

                    <div className="d-flex align-items-center prod-rating">
                        <Image src={Rating} alt="rating icon" />
                        <span className="text-pink">4.2</span>
                        <span>(186)</span>
                    </div>

                    <div className={`prod-dis-text ${expanded ? 'expanded' : ''}`}>
                        <p className="m-0">{product.productDescription}</p>
                    </div>

                    <button onClick={onToggleExpand} className="btn show-more-btn">
                        <Image src={Plus} alt="plus icon" />
                        {expanded ? "Show Less" : "Show More"}
                    </button>
                </div>

                <div className="ms-auto">
                    <div className="card-product-add">
                        <div className="product-thumb">
                            <img src={product.images[0]} alt="product image" />
                        </div>
                        {
                            cartItem?.quantity > 0 ? (
                                <QuantityControls
                                    quantity={cartItem.quantity}
                                    handleAddProduct={handleAddProduct}
                                    handleRemoveProduct={handleRemoveProduct}
                                />
                            ) : (
                                <div className="product-lower-content">
                                    <button className="btn add-btn" onClick={handleAddProduct}>
                                        ADD
                                    </button>
                                    <p className="m-0">
                                        Customisable
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductCard;
