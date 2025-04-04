import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { addProductToCart, getCartItems, removeProductFromCart } from "@/store/features/Mart/Cart/cartThunk";
import QuantityControls from "@/components/common/core/QuantityControl";
import { CartItemProps } from "@/store/features/Mart/Cart/cartTypes";
import Green from "../../../../public/images/green.svg";
import Red from "../../../../public/images/red.svg";

interface OrderedItemProps {
    item: CartItemProps;
}

const OrderedItemCard: React.FC<OrderedItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const handleAddProduct = useCallback(async () => {
        try {
            await dispatch(addProductToCart({
                productId: item.Product.productId,
                storeId: item.Product.storeId
            })).unwrap();
            await dispatch(getCartItems()).unwrap();
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }, [dispatch, item.Product.productId, item.Product.storeId]);
    
    const handleRemoveProduct = useCallback(() => {
        dispatch(removeProductFromCart({
            cartId: item.cartId,
            productId: item.Product.productId,
            storeId: item.Product.storeId
        }));
    }, [dispatch, item.cartId, item.Product.productId, item.Product.storeId]);

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch])

    return (
        <>
            <div className="bed-rooms d-flex justify-content-between align-items-center">
                <div className="head-text d-flex align-items-center gap-1">
                    <Image
                        src={item.Product?.type === "veg" ? Green : Red}
                        alt="product type icon"
                    />
                    <h5>{item.Product?.productName} (500 gms)</h5>
                </div>

                <QuantityControls
                    quantity={item.quantity}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                />
            </div>
        </>
    );
};

export default OrderedItemCard;

