import DetailsThumbSlider from '@/components/accommodation/hotelDetail/DetailsThumbSlider'
import BackLink from '@/components/common/core/BackLink'
import GetAppsDownload from '@/components/common/core/GetAppsDownload'
import React, { useEffect } from 'react'
import StoreCardInformation from './StoreCardInformation'
import RestaurantTabs from './RestaurantTabs'
import DataLoader from '@/components/common/core/DataLoader'
import SpecialOffer from '@/components/mart/MartDetail/SpecialOffer'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getAllMartOffer } from '@/store/features/Mart/MartOffer/offerThunk'
import { getCartItems } from '@/store/features/Mart/Cart/cartThunk'
import MenuSection from './MenuSection'
import Location from './Location'
import Amenities from './Amenities'
import TablePreference from './TablePreference'
import RestaurantAccordion from './RestaurantAccordion'
import RightBookingDetails from './RightBookingDetails'


interface RestaurantDetailProps {
    restaurantId: string;
}

const Home: React.FC<RestaurantDetailProps> = ({ restaurantId }) => {

    const dispatch = useAppDispatch();
    const { loading: offerLoading, error: offerError, offer } = useAppSelector((state) => state.martOffer);

    useEffect(() => {
        dispatch(getAllMartOffer({ storeId: restaurantId }))
        dispatch(getCartItems());
    }, []);

    return (
        <div className='main-wrapper'>
            <div className='container bg-dark-gray'>
                <GetAppsDownload />
                <div className='gradient-1 pb-5'>
                    <div className='px-40'>
                        <BackLink />
                        <div className='row'>
                            <div className='col-lg-8'>
                                <DetailsThumbSlider />
                                <div className='card white-card'>
                                    <StoreCardInformation />
                                    <RestaurantTabs />

                                    <DataLoader loading={offerLoading} error={offerError} retryFunction={() => dispatch(getAllMartOffer({ storeId: restaurantId }))} data={offer}>
                                        <SpecialOffer offers={offer!} />
                                    </DataLoader>

                                    <MenuSection/>
                                    <Location/>
                                    <Amenities />
                                    <TablePreference/>
                                    <RestaurantAccordion />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <RightBookingDetails />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home