"use client";
import Image from "next/image";
import ImageMap from "../../../../public/images/icon-map.svg";
import ImageUserPic from "../../../../public/images/user-pic.png";
import ImageWallet from "../../../../public/images/icon-wallet.svg";
import DownArrow from "../../../../public/images/down-arrow.svg";
import Dropdown from "react-bootstrap/Dropdown";

import { useEffect, useState } from "react";
import { getUserLocation } from "@/services/common/service";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAddressList, setCurrentAddress } from "@/store/features/common/Address/addressThunk";
import Link from "next/link";
import { AddressProps } from "@/store/features/common/Address/addressTypes";
import { setLatLong, setSelectedAddress } from "@/store/features/common/Address/addressSlice";

interface LocationData {
    address?: {
        county?: string;
    };
    display_name?: string;
};

const UserAuth = () => {

    const dispatch = useAppDispatch();
    const [location, setLocation] = useState<LocationData | string>("Fetching location...");
    const { addresses, selectedAddress } = useAppSelector((state) => state.address);

    const handleAddress = (address: AddressProps) => {
        const name = `${address.city}, ${address.area}, ${address.state}, ${address.zipCode}, ${address.country}`;
        const temp = {
            address: { county: address.addressAlias },
            display_name: name
        }
        setLocation(temp);
        // dispatch(setSelectedAddress(address));
        dispatch(setCurrentAddress({ addressId: address.id }));
    };

    const getCurrentLocation = () => {
        if (!("geolocation" in navigator)) {
            setLocation("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await getUserLocation(latitude, longitude);
                    setLocation(response || "Location not found");
                    dispatch(setLatLong({ lat: latitude, long: longitude }));
                } catch (error) {
                    setLocation("Failed to fetch location");
                }
            },
            () => {
                setLocation("Location access denied");
            }
        );

    };

    useEffect(() => {
        if (selectedAddress == null) {
            getCurrentLocation()
        } else if (selectedAddress != null) {
            const address = selectedAddress as AddressProps;
            const name = `${address.city}, ${address.area}, ${address.state}, ${address.zipCode}, ${address.country}`;
            const temp = {
                address: { county: address.addressAlias },
                display_name: name
            };
            setLocation(temp);
        }

        if (addresses.length == 0) {
            dispatch(getAddressList());
        }
    }, []);


    return (
        <div className="sec-user-auth">
            <div className="d-flex align-items-center">
                <div className="location-area">
                    <Dropdown align="start">
                        <Dropdown.Toggle variant="light">
                            <span className="d-flex align-items-center">
                                <Image src={ImageMap} alt="Map Icon" />
                                {typeof location === "string"
                                    ? location
                                    : location?.address?.county || "Location not found"}
                                <Image src={DownArrow} alt="Down Arrow" />
                            </span>
                        </Dropdown.Toggle>

                        {/* <Dropdown.Menu>
                            {addresses && addresses?.slice(0, 3).map((address, index) => {
                                const { addressAlias, adresstype, city, area, state, zipCode, country } = address;

                                return <Dropdown.Item
                                    key={index}
                                    onClick={() => handleAddress(address)}
                                >
                                    <span className="d-flex align-items-center">
                                        <Image
                                            src={
                                                ["home", "work", "other", "friend and family"].some((type) =>
                                                    address.adresstype
                                                        ?.toLowerCase()
                                                        .includes(type)
                                                )
                                                    ? `/images/${adresstype?.replace(/\s+/g, "").toLowerCase()}.svg`
                                                    : `/images/other.svg`
                                            }
                                            alt="Map Icon"
                                            height={16}
                                            width={17}
                                        />
                                        {addressAlias}
                                    </span>
                                    <p className="m-0">
                                        {`${city}, ${area}, ${state}, ${zipCode}, ${country}`}
                                    </p>
                                </Dropdown.Item>
                            })}

                            {addresses?.length > 3 && (
                                <>
                                    <Dropdown.Divider />
                                    <Link href="/home/address/savedAddress" passHref legacyBehavior>
                                        <Dropdown.Item>
                                            Select Other Address
                                        </Dropdown.Item>
                                    </Link>
                                </>
                            )}

                            <Link href="/home/address/addAddress" passHref legacyBehavior>
                                <Dropdown.Item>
                                    Add New Address
                                </Dropdown.Item>
                            </Link>

                            <Dropdown.Item onClick={() => getCurrentLocation()}>
                                Use Current Location
                            </Dropdown.Item>
                        </Dropdown.Menu> */}

                        <Dropdown.Menu>
                            {addresses && [...addresses].reverse().slice(0, 3).map((address, index) => {
                                const { addressAlias, adresstype, city, area, state, zipCode, country } = address;

                                return (
                                    <Dropdown.Item key={index} onClick={() => handleAddress(address)}>
                                        <span className="d-flex align-items-center">
                                            <Image
                                                src={
                                                    ["home", "work", "other", "friend and family"].some((type) =>
                                                        adresstype?.toLowerCase().includes(type)
                                                    )
                                                        ? `/images/${adresstype?.replace(/\s+/g, "").toLowerCase()}.svg`
                                                        : `/images/other.svg`
                                                }
                                                alt="Map Icon"
                                                height={16}
                                                width={17}
                                            />
                                            {addressAlias}
                                        </span>
                                        <p className="m-0">{`${city}, ${area}, ${state}, ${zipCode}, ${country}`}</p>
                                    </Dropdown.Item>
                                );
                            })}

                            {addresses?.length > 3 && (
                                <>
                                    <Dropdown.Divider />
                                    <Link href="/home/address/savedAddress" passHref legacyBehavior>
                                        <Dropdown.Item>Select Other Address</Dropdown.Item>
                                    </Link>
                                </>
                            )}

                            <Link href="/home/address/addAddress" passHref legacyBehavior>
                                <Dropdown.Item>Add New Address</Dropdown.Item>
                            </Link>

                            <Dropdown.Item onClick={() => getCurrentLocation()}>Use Current Location</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>

                    <p className="m-0">
                        {typeof location === "string" ? "" : location?.display_name}
                    </p>
                </div>
                <div className="ms-auto">
                    <div className="user-auth-area">
                        <div className="d-flex align-items-center">
                            <div className="d-flex d-md-none align-items-center wallet-box">
                                <span className="wallet-circle">
                                    <Image src={ImageWallet} alt="Wallet Icon" />
                                </span>
                                $300
                            </div>
                            <div className="userauth">
                                <Image src={ImageUserPic} alt="User Profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAuth;
