import { createDeliveryAddress } from '@/store/features/common/Address/addressThunk';
import { useAppDispatch } from '@/store/hooks';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const AddressForm: React.FC<{ address: any | null, location: any | null }> = ({ address, location }) => {
    console.log('location: ', location);

    const dispatch = useAppDispatch();

    const initialState = {
        houseNumber: '',
        additionalInfo: '',
        adressType: '',
        receiverPhone: '',
        area: address.county || '',
        details: '',
        zipCode: address.postcode || '',
        landmark: '',
        addressAlias: '',
        locattion: location,
        city: address.city || '',
        state: address.state || '',
        country: address.country || '',
    };

    const [formData, setFormData] = useState(initialState);
    const [charCount, setCharCount] = useState(0);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'additionalInfo') {
            setCharCount(value.length);
        }
    };

    const handleAddressTypeSelect = (type: string) => {
        setFormData({ ...formData, adressType: type });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.houseNumber || !formData.city || !formData.state || !formData.zipCode) {
            alert("Please fill in all required fields.");
            return;
        }

        setLoading(true);

        try {
            await dispatch(createDeliveryAddress(formData)).unwrap();
            setFormData(initialState); // Reset form on success
        } catch (error) {
            console.error("Error submitting address:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log('formData: ', formData);
    }, [formData])

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-savelocation'>
                <div className='row mb-32'>
                    <div className='col-md-6 input-single'>
                        <label>House / Flat / Block No.</label>
                        <input
                            type='text'
                            name="houseNumber"
                            value={formData.houseNumber}
                            onChange={handleChange}
                            placeholder=''
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='col-md-6 input-single'>
                        <label>Apartment / Road / Area <b>(OPTIONAL)</b></label>
                        <input
                            type='text'
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='col-md-12 input-single position-relative'>
                        <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            placeholder='e.g Ring the bell on the red gate'
                            className="form-control"
                            maxLength={200}
                        />
                        <small className='type-text'>{charCount}/200</small>
                    </div>

                    {/* Address type */}
                    {/* <div className='col-md-12 input-single'>
                        <label>Address Type</label>
                        <div className='d-flex flex-wrap list-address-type'>
                            <button className='btn'>
                                <Image src={"/images/home.svg"} alt="home icon" height={16} width={16} />
                                Home
                            </button>
                            <button className='btn'>
                                <Image src={"/images/work.svg"} alt="work icon" height={16} width={17} />
                                Work
                            </button>
                            <button className='btn'>
                                <Image src={"/images/friends.svg"} alt="friends icon" height={16} width={17} />
                                Friend and Family
                            </button>
                            <button className='btn active'>
                                <Image src={"/images/other.svg"} alt="other icon" height={16} width={16} />
                                Other
                            </button>
                        </div>
                    </div> */}

                    <div className='col-md-12 input-single'>
                        <label>Address Type</label>
                        <div className='d-flex flex-wrap list-address-type'>
                            {[
                                { type: 'Home', icon: '/images/home.svg' },
                                { type: 'Work', icon: '/images/work.svg' },
                                { type: 'Friend and Family', icon: '/images/friends.svg' },
                                { type: 'Other', icon: '/images/other.svg' }
                            ].map(({ type, icon }) => (
                                <button
                                    key={type}
                                    type="button"
                                    className={`btn ${formData.adressType === type ? 'active' : ''}`}
                                    onClick={() => handleAddressTypeSelect(type)}
                                >
                                    <Image src={icon} alt={`${type} icon`} height={16} width={16} />
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='col-md-6 input-single'>
                        <label>Save as</label>
                        <input
                            type='text'
                            name="addressAlias"
                            value={formData.addressAlias}
                            onChange={handleChange}
                            className='form-control'
                        />
                    </div>
                    <div className='col-md-6 input-single position-relative'>
                        <label>Receiver’s phone number <b>(OPTIONAL)</b></label>
                        <input
                            type='text'
                            placeholder=''
                            name="receiverPhone"
                            value={formData.receiverPhone}
                            onChange={handleChange}
                            className='form-control pe-5'
                            pattern="[0-9]*"
                        />
                        <div className='icon-list'>
                            <Image src={"/images/phone.svg"} alt="phone icon" height={20} width={21} />
                        </div>
                    </div>

                </div>
                <div className='text-center'>
                    <button className='btn btn-primary' disabled={loading}>
                        {loading ? "Saving..." : "Save Address"}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddressForm