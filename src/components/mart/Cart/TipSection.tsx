import React, { useState } from 'react';
import Image from 'next/image';
import Form from "react-bootstrap/Form";
import DeliveryMart from "../../../../public/images/delivery-partner-mart.png";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTipAmount } from '@/store/features/Mart/Cart/cartSlice';

const TipSection: React.FC = () => {

    const dispatch = useAppDispatch();
    const { tipAmount } = useAppSelector((state) => state.martCart);
    const [text, setText] = useState("");
    const [selectedTip, setSelectedTip] = useState<number | "other" | null>(null);
    const [customTip, setCustomTip] = useState<string>(tipAmount && ![10, 30, 50].includes(tipAmount) ? tipAmount.toString() : "");

    const tipOptions = [10, 50];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 200) {
            setText(e.target.value);
        }
    };

    const handleTipSelection = (amount: number | "other") => {
        if (amount !== "other") {
            setCustomTip("");
            setSelectedTip(amount);
            dispatch(setTipAmount(amount))
        } else {
            setSelectedTip("other");
        }
    };

    const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        setCustomTip(value);
        setSelectedTip("other");
        dispatch(setTipAmount(value ? Number(value) : 0));
    };


    return (
        <>
            <div className="delivery-partner-mart d-flex align-items-center justify-content-between gap-3">
                <div className="left-delivery-mart">
                    <h5>Tip your delivery partner</h5>
                    <p>Day & night, our delivery partners bring your favorite meals. Thank them with a tip.</p>
                </div>
                <div className="right-delivery-mart">
                    <Image src={DeliveryMart} alt="delivery icon" />
                </div>
            </div>

            <div className="most-tipped-mart">
                <ul className="d-flex align-items-center gap-2 flex-wrap">
                    {tipOptions.map((tip, index) => (
                        <li
                            className={`btn-tipped text-center ${selectedTip === tip ? "active-btn" : ""}`}
                            key={index}
                            onClick={() => handleTipSelection(tip)}
                        >
                            ₵{tip}
                        </li>
                    ))}
                    <li
                        className={`btn-tipped text-center position-relative most-topped ${selectedTip === 30 ? "active-btn" : ""}`}
                        onClick={() => handleTipSelection(30)}
                    >
                        ₵30 <span>Most Tipped</span>
                    </li>
                    <li
                        className={`btn-tipped text-center d-flex align-items-center justify-content-center gap-2 ${selectedTip === "other" ? "active-btn" : ""}`}
                        onClick={() => handleTipSelection("other")}
                    >
                        Other <Image src={"/images/plus.svg"} alt="plus icon" height={20} width={20} />
                    </li>
                </ul>


                {selectedTip === "other" && (
                    <div className='custom-tip-input mt-2'>
                        <h4><span>₵</span> Enter Tip Amount</h4>
                        <input
                            type='text'
                            className='form-control custom-tip'
                            placeholder='enter tip amount'
                            value={customTip}
                            onChange={handleCustomTipChange}
                        />
                    </div>
                )}
                <div className="checkbox-box d-flex align-items-center gap-2">
                    <Form.Check aria-label="option 1" /> Add this tip automatically to future orders.
                </div>

                {/* Delivery Instructions */}
                <div className="delivery-instructions">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Delivery Instructions <span>(Additional)</span>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="e.g Ring the bell on the red gate"
                                value={text}
                                onChange={handleChange}
                                maxLength={200}
                            />
                            <span className="total-text">{text.length}/200</span>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default TipSection