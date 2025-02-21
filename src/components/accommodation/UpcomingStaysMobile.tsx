'use client'
import Image from "next/image";
import Link from 'next/link';
import Imageupcoming from "../../../public/images/image-upcoming.png";

import TopImg from "../../../public/images/topbar.png";

const UpcomingStaysMobile = () => {
    return (
        <div className='banner-slider'>
            <div className='bg-white'>
                <div className='flex mb-4'>
                    <div className='flex-none w-[62px]'>
                        <Image
                            src={Imageupcoming}
                            alt=""
                            className="object-cover w-full rounded-lg"
                        />
                    </div>
                    <div className='flex-1 pl-3'>
                        <div className='flex-1'>
                            <h3 className='text-[16px] font-bold text-[#3D3D3D] mb-1'>Ghana</h3>
                            <p className='font-medium text-[12px] text-[#3D3D3D] mb-1'>6 Jan - 7 Jan  •  1 Guest</p>
                            <p className='text-[12px] text-[#5D5D5D]'>Alisa Hotel North Ridge 21 Dr Isert St, Accra, Ghana</p>
                        </div>
                    </div>
                </div>

                <ul className='flex items-center justify-center mb-4 gap-[15px] ps-0'>
                    <li>
                        <Link href="">
                            <i className='w-[48px] h-[48px] bg-[#F6F6F6] flex items-center justify-center rounded-full mb-1'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.89453 2V5" stroke="#262626" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.8945 2V5" stroke="#262626" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.39453 9.08997H21.3945" stroke="#262626" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.8945 19C22.8945 19.75 22.6845 20.46 22.3145 21.06C21.6245 22.22 20.3545 23 18.8945 23C17.8845 23 16.9645 22.63 16.2645 22C15.9545 21.74 15.6845 21.42 15.4745 21.06C15.1045 20.46 14.8945 19.75 14.8945 19C14.8945 16.79 16.6845 15 18.8945 15C20.0945 15 21.1645 15.53 21.8945 16.36C22.5145 17.07 22.8945 17.99 22.8945 19Z" stroke="#262626" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.3345 19L18.3245 19.99L20.4545 18.02" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.8945 8.5V16.36C21.1645 15.53 20.0945 15 18.8945 15C16.6845 15 14.8945 16.79 14.8945 19C14.8945 19.75 15.1045 20.46 15.4745 21.06C15.6845 21.42 15.9545 21.74 16.2645 22H8.89453C5.39453 22 3.89453 20 3.89453 17V8.5C3.89453 5.5 5.39453 3.5 8.89453 3.5H16.8945C20.3945 3.5 21.8945 5.5 21.8945 8.5Z" stroke="#262626" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.89 13.7H12.899" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.18884 13.7H9.19783" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.18884 16.7H9.19783" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </i>
                            <span className='text-[12px] text-[#262626] font-medium'>Check-in</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <i className='w-[48px] h-[48px] bg-[#F6F6F6] flex items-center justify-center rounded-full mb-1'>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2121 18.6691L10.2123 18.6696C10.3242 19.0062 10.444 19.2057 10.5349 19.3095C10.5568 19.3346 10.5745 19.3515 10.5879 19.3628C10.6026 19.3531 10.6222 19.3383 10.6469 19.3159C10.7491 19.2232 10.891 19.039 11.0407 18.7183L10.2121 18.6691ZM10.2121 18.6691L8.15324 12.4956L8.03421 12.1387L7.67725 12.0197L1.50275 9.96258C1.16647 9.85028 0.96702 9.73029 0.863121 9.63923C0.837744 9.61699 0.820671 9.59902 0.809373 9.5855C0.819029 9.57083 0.833882 9.55111 0.856442 9.52624C0.949138 9.42405 1.13344 9.2822 1.4546 9.13237L1.45463 9.13236L18.5755 1.14383C18.5755 1.14383 18.5755 1.14382 18.5755 1.14382C18.8866 0.99867 19.1064 0.944458 19.2409 0.933421C19.2299 1.06791 19.1758 1.28771 19.0308 1.59898C19.0308 1.59903 19.0307 1.59908 19.0307 1.59913C19.0307 1.5992 19.0306 1.59927 19.0306 1.59934L11.0408 18.7182L10.2121 18.6691ZM0.788967 9.5553C0.789091 9.55529 0.789786 9.55659 0.790681 9.55924C0.789292 9.55663 0.788844 9.55531 0.788967 9.5553ZM0.793792 9.6137C0.793203 9.61644 0.792659 9.61782 0.792535 9.61782C0.79241 9.61783 0.792705 9.61646 0.793792 9.6137ZM19.346 0.935712C19.3459 0.935779 19.3446 0.935506 19.3422 0.93469C19.3449 0.935237 19.346 0.935645 19.346 0.935712ZM19.2396 0.832102C19.2388 0.82973 19.2385 0.828418 19.2386 0.828355C19.2387 0.828292 19.2391 0.829479 19.2396 0.832102ZM10.5553 19.3798C10.5553 19.3797 10.5567 19.3791 10.5594 19.3785C10.5567 19.3796 10.5553 19.3799 10.5553 19.3798ZM10.6144 19.3817C10.617 19.3826 10.6183 19.3833 10.6183 19.3834C10.6183 19.3836 10.617 19.3831 10.6144 19.3817Z" stroke="#262626" strokeWidth="1.505" />
                                </svg>
                            </i>
                            <span className='text-[12px] text-[#262626] font-medium'>Directions</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <i className='w-[48px] h-[48px] bg-[#F6F6F6] flex items-center justify-center rounded-full mb-1'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.769531" width="24" height="24" rx="12" stroke="#F6F6F6" />
                                    <path d="M22.0814 17.919C22.0814 18.2556 22.0066 18.6016 21.8477 18.9382C21.6887 19.2749 21.483 19.5928 21.2118 19.892C20.7537 20.3969 20.2487 20.7616 19.6783 20.9954C19.1173 21.2292 18.5095 21.3507 17.855 21.3507C16.9012 21.3507 15.882 21.1263 14.8066 20.6681C13.7313 20.2099 12.656 19.5928 11.59 18.8167C10.5147 18.0312 9.49548 17.1616 8.52301 16.1985C7.55989 15.226 6.69028 14.2068 5.91418 13.1408C5.14742 12.0749 4.53028 11.0089 4.08145 9.95227C3.63262 8.8863 3.4082 7.86708 3.4082 6.89461C3.4082 6.25876 3.52041 5.65097 3.74483 5.08993C3.96924 4.51954 4.32457 3.99591 4.82015 3.52838C5.41859 2.93928 6.07314 2.64941 6.76509 2.64941C7.0269 2.64941 7.28872 2.70552 7.52249 2.81773C7.76561 2.92993 7.98067 3.09825 8.14898 3.34136L10.3183 6.39902C10.4866 6.63279 10.6082 6.84786 10.6924 7.05357C10.7765 7.24993 10.8233 7.4463 10.8233 7.62396C10.8233 7.84838 10.7578 8.07279 10.6269 8.28786C10.5053 8.50292 10.3277 8.72734 10.1033 8.95175L9.39262 9.69045C9.28976 9.79331 9.24301 9.91487 9.24301 10.0645C9.24301 10.1393 9.25236 10.2047 9.27106 10.2795C9.29911 10.3543 9.32716 10.4105 9.34587 10.4666C9.51418 10.7751 9.80405 11.1772 10.2155 11.6634C10.6363 12.1497 11.0851 12.6453 11.5713 13.1408C12.0763 13.6364 12.5625 14.0946 13.0581 14.5154C13.5443 14.9268 13.9464 15.2073 14.2643 15.3756C14.3111 15.3943 14.3672 15.4224 14.4326 15.4505C14.5074 15.4785 14.5822 15.4879 14.6664 15.4879C14.8253 15.4879 14.9469 15.4318 15.0498 15.3289L15.7604 14.6276C15.9942 14.3938 16.2186 14.2162 16.4337 14.104C16.6487 13.9731 16.8638 13.9076 17.0976 13.9076C17.2752 13.9076 17.4622 13.945 17.6679 14.0292C17.8737 14.1133 18.0887 14.2349 18.3225 14.3938L21.4176 16.5912C21.6607 16.7595 21.829 16.9559 21.9318 17.1897C22.0253 17.4234 22.0814 17.6572 22.0814 17.919Z" stroke="#262626" strokeWidth="1.4026" strokeMiterlimit="10" />
                                </svg>

                            </i>
                            <span className='text-[12px] text-[#262626] font-medium'>Call hotel</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <i className='w-[48px] h-[48px] bg-[#F6F6F6] flex items-center justify-center rounded-full mb-1'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.51953 22.3199C8.23953 22.3199 7.94951 22.2499 7.68951 22.1099C7.11951 21.8099 6.76953 21.2099 6.76953 20.5699V19.15C3.74953 18.84 1.76953 16.6199 1.76953 13.4399V7.43994C1.76953 3.99994 4.07953 1.68994 7.51953 1.68994H17.5195C20.9595 1.68994 23.2695 3.99994 23.2695 7.43994V13.4399C23.2695 16.8799 20.9595 19.1899 17.5195 19.1899H13.7495L9.4895 22.03C9.1995 22.22 8.85953 22.3199 8.51953 22.3199ZM7.51953 3.17993C4.93953 3.17993 3.26953 4.84993 3.26953 7.42993V13.43C3.26953 16.01 4.93953 17.68 7.51953 17.68C7.92953 17.68 8.26953 18.02 8.26953 18.43V20.56C8.26953 20.69 8.34954 20.75 8.39954 20.78C8.44954 20.81 8.54955 20.84 8.65955 20.77L13.1096 17.81C13.2296 17.73 13.3795 17.68 13.5295 17.68H17.5295C20.1095 17.68 21.7795 16.01 21.7795 13.43V7.42993C21.7795 4.84993 20.1095 3.17993 17.5295 3.17993H7.51953Z" fill="#262626" />
                                    <path d="M12.5193 12.11C12.1093 12.11 11.7693 11.77 11.7693 11.36V11.15C11.7693 9.99002 12.6193 9.42001 12.9393 9.20001C13.3093 8.95001 13.4293 8.78002 13.4293 8.52002C13.4293 8.02002 13.0193 7.60999 12.5193 7.60999C12.0193 7.60999 11.6094 8.02002 11.6094 8.52002C11.6094 8.93002 11.2694 9.27002 10.8594 9.27002C10.4494 9.27002 10.1094 8.93002 10.1094 8.52002C10.1094 7.19002 11.1893 6.10999 12.5193 6.10999C13.8493 6.10999 14.9293 7.19002 14.9293 8.52002C14.9293 9.66002 14.0894 10.23 13.7794 10.44C13.3894 10.7 13.2693 10.87 13.2693 11.15V11.36C13.2693 11.78 12.9293 12.11 12.5193 12.11Z" fill="#262626" />
                                    <path d="M12.5195 14.6C12.0995 14.6 11.7695 14.26 11.7695 13.85C11.7695 13.44 12.1095 13.1 12.5195 13.1C12.9295 13.1 13.2695 13.44 13.2695 13.85C13.2695 14.26 12.9395 14.6 12.5195 14.6Z" fill="#262626" />
                                </svg>


                            </i>
                            <span className='text-[12px] text-[#262626] font-medium'>Need help</span>
                        </Link>
                    </li>
                </ul>

                <div className='flex-none w-full md:w-[300px]'>
                    <div className='bg-[#FAF5FF] rounded-2xl px-4 py-4'>
                        <p className='text-[18px] font-bold text-[#262626] mb-3'>Pay now and get  ₵12 off</p>
                        <ul className='flex text-center p-0'>
                            <li className='flex-1'>
                                <div className='border border-[#D1D1D1] rounded-[8px] text-[12px] overflow-hidden'>
                                    <div className='bg-white font-bold text-[#262626] px-3 py-1'>Pay at hotel</div>
                                    <div className='bg-[#E7E7E7] text-[#4F4F4F] px-3 py-1'>No discount</div>
                                </div>
                            </li>
                            <li className='flex-1 ms-[-10px] relative'>
                                <div className='border border-[#000000] rounded-[8px] text-[12px] overflow-hidden'>
                                    <div className='bg-white font-bold text-[#262626] px-3 py-1'>Pay now</div>
                                    <div className='bg-[#262626] text-white px-3 py-1'>₵12 off</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <ul className="p-0">
                        <li className='flex items-center px-4 py-4'>
                            <span className='text-[14px] text-[#262626] font-medium'>Total amount</span>
                            <div className='ms-auto'>
                                <span className='text-[12px] text-[#838383] font-medium'>₵12.00</span>
                                <span className='text-[16px] text-[#262626] font-medium ms-2'>₵8.00</span>
                            </div>
                        </li>
                        <li className='flex items-center px-4 py-4 border-t border-t-[#E7E7E7]'>
                            <span className='text-[14px] text-[#262626] font-medium'>Pay using</span>
                            <div className='ms-auto flex items-center gap-1'>
                                <span className='text-[14px] text-[#262626] font-medium'>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6754 4.54004H4.11539C3.56109 4.54004 3.02949 4.76023 2.63754 5.15219C2.24559 5.54414 2.02539 6.07574 2.02539 6.63004V13.38C2.02802 13.9335 2.24906 14.4636 2.64044 14.855C3.03183 15.2464 3.5619 15.4674 4.11539 15.47H16.6754C17.2289 15.4674 17.759 15.2464 18.1503 14.855C18.5417 14.4636 18.7628 13.9335 18.7654 13.38V6.63004C18.7654 6.07574 18.5452 5.54414 18.1532 5.15219C17.7613 4.76023 17.2297 4.54004 16.6754 4.54004ZM4.11539 5.38004H16.6754C17.0069 5.38004 17.3249 5.51174 17.5593 5.74616C17.7937 5.98058 17.9254 6.29852 17.9254 6.63004V11.51H2.86539V6.63004C2.86539 6.29852 2.99709 5.98058 3.23151 5.74616C3.46593 5.51174 3.78387 5.38004 4.11539 5.38004ZM16.6754 14.63H4.11539C3.78387 14.63 3.46593 14.4983 3.23151 14.2639C2.99709 14.0295 2.86539 13.7116 2.86539 13.38H17.9254C17.9254 13.7116 17.7937 14.0295 17.5593 14.2639C17.3249 14.4983 17.0069 14.63 16.6754 14.63Z" fill="#454545" />
                                        <path d="M5.24422 9.08023H15.5442C15.6556 9.08023 15.7624 9.03598 15.8412 8.95722C15.92 8.87845 15.9642 8.77163 15.9642 8.66023C15.9642 8.54884 15.92 8.44202 15.8412 8.36325C15.7624 8.28448 15.6556 8.24023 15.5442 8.24023H5.24422C5.13283 8.24023 5.026 8.28448 4.94723 8.36325C4.86847 8.44202 4.82422 8.54884 4.82422 8.66023C4.82422 8.77163 4.86847 8.87845 4.94723 8.95722C5.026 9.03598 5.13283 9.08023 5.24422 9.08023Z" fill="#454545" />
                                    </svg>

                                </span>
                                <span className='text-[12px] text-[#838383] font-medium'>Card pay</span>
                                <span className='text-[16px] text-[#262626] font-medium ms-2'>
                                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3945 6L6.39453 1L1.39453 6" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>
                            </div>
                        </li>
                    </ul>
                </div>



                <div className='md:absolute bottom-[-38px] left-0 right-0 mx-auto text-center'>
                    <span className="md:inline-block block md:py-3 md:px-3 md:shadow-[0px_2px_8px_rgba(0,0,0,0.12)] bg-white rounded-[24px]">
                        <button className='bg-[#652669] text-white text-base font-medium py-3 px-6 rounded-xl w-full'>
                            Pay ₵8.00 now
                        </button>
                    </span>
                </div>

            </div>

        </div>
    )
}

export default UpcomingStaysMobile
