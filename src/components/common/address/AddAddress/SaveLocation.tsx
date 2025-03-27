import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react';
import AddressForm from './AddressForm';
import { getUserLocation } from '@/services/common/service';
import DataLoader from '../../core/DataLoader';

const SaveLocation = () => {
    const [location, setLocation] = useState<[number, number] | null>(null);
    const [error, setError] = useState<any>();
    const [locationAddress, setLocationAddress] = useState<{ address?: { county?: string }; display_name?: string } | null>(null);
    const [mapUrl, setMapUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);


    const fetchLocation = useCallback(() => {
        if (!navigator.geolocation) {
            console.error("Geolocation is not supported by this browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                console.log('latitude: ', latitude);
                console.log("Fetched coordinates:", latitude, longitude);
                setLocation([longitude, latitude]);
                setMapUrl(`https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`);

                try {
                    const response = await getUserLocation(latitude, longitude);
                    console.log('API Response:', response);
                    if (response?.address) {
                        setLocationAddress(response);
                    } else {
                        console.warn('Invalid response format:', response);
                        setLocationAddress(null);
                    }
                } catch (error) {
                    console.error('Error fetching location address:', error);
                    setLocationAddress(null);
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            },
            (error) => {
                console.error("Error getting location:", error);
                setIsLoading(false);
                setError(error);
            }
        );
    }, []);

    useEffect(() => {
        fetchLocation();
    }, [fetchLocation]);

    useEffect(() => {
        console.log("Updated location state:", location);
    }, [location]);


    return (
        <div className='sec-location-save'>
            <div className='map'>
                <div className='map-iframe'>
                    {mapUrl ? (
                        <iframe src={mapUrl} width="100%" height="574" loading="lazy"></iframe>
                    ) : (
                        <p>Fetching your location...</p>
                    )}
                </div>
                <div className='card card-sav-location'>
                    <div className='card card-confirm-location p-0 mb-32'>
                        <div className='d-md-flex align-items-center'>
                            <div className='flex-grow-1 d-flex align-items-center'>
                                <div className='icon-location'>
                                    <Image src="/images/location.svg" alt="location icon" height={21} width={20} />
                                </div>
                                <div className='flex-grow-1'>
                                    <h3 className='location-ttl'>
                                        {locationAddress?.address?.county || "Fetching location..."}
                                    </h3>
                                    <p className='m-0'>
                                        {locationAddress?.display_name || "Loading address..."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='message-warning'>
                        <p className='m-0'>
                            A detailed address will help our Delivery Partner reach your doorstep easily
                        </p>
                    </div>

                    {/* Show loader if still fetching location, else show form */}
                    <DataLoader loading={isLoading} error={error} retryFunction={fetchLocation} data={locationAddress}>
                        {
                            (locationAddress && location && location?.length > 0 &&
                                <AddressForm address={locationAddress.address} location={location} />
                            )
                        }
                    </DataLoader>
                </div>
            </div>
        </div>
    );
};

export default SaveLocation;
