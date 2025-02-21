import React, { useCallback } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { addProductToCart, removeProductFromCart } from "@/store/features/Mart/Cart/cartThunk";
import QuantityControls from "@/components/common/core/QuantityControl";
import { CartItemProps } from "@/store/features/Mart/Cart/cartTypes";
import Green from "../../../../public/images/green.svg";
import Red from "../../../../public/images/red.svg";

interface OrderedItemProps {
    item: CartItemProps;
}

const OrderedItem: React.FC<OrderedItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const handleAddProduct = useCallback(() => {
        dispatch(addProductToCart({
            productId: item.product.productId,
            storeId: item.storeId
        }));
    }, [dispatch, item.product.productId, item.storeId]);

    const handleRemoveProduct = useCallback(() => {
        dispatch(removeProductFromCart({
            cartId: item.cartId,
            productId: item.product.productId,
            storeId: item.storeId
        }));
    }, [dispatch, item.cartId, item.product.productId, item.storeId]);

    return (
        <>
            <div className="bed-rooms d-flex justify-content-between align-items-center">
                <div className="head-text d-flex align-items-center gap-1">
                    <Image
                        src={item.product?.type === "veg" ? Green : Red}
                        alt="product type icon"
                    />
                    <h5>{item.product?.productName} (500 gms)</h5>
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

export default OrderedItem;

