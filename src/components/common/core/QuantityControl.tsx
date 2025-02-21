import React from 'react';
import Image from 'next/image';
import ButtonMinus from "../../../../public/images/minus-button.svg";
import ButtonPlus from "../../../../public/images/plus-button.svg";

interface QuantityControlProps {
    quantity: number;
    handleAddProduct: () => void;
    handleRemoveProduct: () => void;
}

const QuantityControls: React.FC<QuantityControlProps> = ({ quantity, handleAddProduct, handleRemoveProduct }) => {
    return (
        <div className="add-remove-btn-box position-relative d-flex align-items-center justify-content-between bg-white">
            <button type="button" className="remove-btn-box" onClick={() => handleRemoveProduct()}>
                <Image src={ButtonMinus} alt="minus icon" height={40} width={40} />
            </button>
            <p className='m-0'>{quantity}</p>
            <button type="button" className="add-btn-box" onClick={() => handleAddProduct()}>
                <Image src={ButtonPlus} alt="plus icon" height={40} width={40} />
            </button>
        </div>
    );
};

export default QuantityControls;