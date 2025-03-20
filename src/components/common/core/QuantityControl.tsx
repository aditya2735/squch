import React from 'react';
import Image from 'next/image';
import ButtonMinus from "../../../../public/images/minus-button.svg";
import ButtonPlus from "../../../../public/images/plus-button.svg";

interface QuantityControlProps {
    quantity: number;
    handleAddProduct: (event: React.MouseEvent) => void;
    handleRemoveProduct: (event: React.MouseEvent) => void;
}

const QuantityControls: React.FC<QuantityControlProps> = ({ quantity, handleAddProduct, handleRemoveProduct }) => {
    return (
        <div className="add-remove-btn-box position-relative d-flex align-items-center justify-content-between bg-white">
            <button type="button" className="remove-btn-box" onClick={handleRemoveProduct}>
                <Image src={ButtonMinus} alt="minus icon" height={100} width={100} />
            </button>
            <p className='m-0'>{quantity}</p>
            <button type="button" className="add-btn-box" onClick={handleAddProduct}>
                <Image src={ButtonPlus} alt="plus icon" height={100} width={100} />
            </button>
        </div>
    );
};  

export default QuantityControls;