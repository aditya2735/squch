import React from 'react'
import Image from "next/image";
// import AppleStore from "../../../public/images/apple-store.png";
// import PlayStore from "../../../public/images/play-store.png";
import AppleStore from "../../public/images/apple-store.png"
import PlayStore from "../../public/images/play-store.png"

import Link from 'next/link';
import LanguageDropdown from './LanguageDropdown';

 
async function Footer () {
 
  return (
    <footer className="footer bg-light-grey">
      <div className="container px-0">
        <div className='inner-footer md:px-3'>
          <div className="footer-top-box d-flex flex-wrap justify-content-between align-items-center mb-8">
            <Link href="#">
              <svg
                width="178"
                height="49"
                viewBox="0 0 178 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0007 0.768555C5.37279 0.768555 0 6.14134 0 12.7693C0 19.3972 5.37279 24.77 12.0007 24.77H24.0015V12.7693C24.0015 6.14134 18.6287 0.768555 12.0007 0.768555Z"
                  fill="#6200DD"
                />
                <path
                  d="M0 36.7683C0 43.3963 5.37279 48.769 12.0007 48.769C18.6287 48.769 24.0015 43.3963 24.0015 36.7683V24.7676H12.0007C5.37279 24.7676 0 30.1404 0 36.7683Z"
                  fill="#FF8211"
                />
                <path
                  d="M47.9995 12.7693C47.9995 6.14134 42.6267 0.768555 35.9988 0.768555C29.3708 0.768555 23.998 6.14134 23.998 12.7693V24.77H35.9988C42.6267 24.77 47.9995 19.3972 47.9995 12.7693Z"
                  fill="#02CAB5"
                />
                <path
                  d="M35.3736 42.7735C39.352 42.7735 42.5772 39.5483 42.5772 35.5699C42.5772 31.5914 39.352 28.3662 35.3736 28.3662C31.3951 28.3662 28.1699 31.5914 28.1699 35.5699C28.1699 39.5483 31.3951 42.7735 35.3736 42.7735Z"
                  fill="#6200DD"
                />
                <path
                  d="M59.7009 29.2412C60.1347 32.3654 62.398 34.3192 66.1421 34.3192C69.5372 34.3192 71.2788 32.7132 71.2788 30.5448C71.2788 28.7665 69.8405 27.3784 67.5347 26.8127L62.3557 25.5123C56.9157 24.1242 54.2609 21.3901 54.2609 16.8355C54.2609 11.3251 58.8301 7.76855 64.7952 7.76855C71.1059 7.76855 75.5447 11.7185 76.3731 17.4889H70.6265C69.9742 14.4948 68.0141 12.6288 64.7495 12.6288C62.0947 12.6288 60.0922 14.0169 60.0922 16.4031C60.0922 18.3569 61.4849 19.485 63.8363 20.0897L68.973 21.4356C74.6739 22.9116 77.1134 25.5123 77.1134 30.0702C77.1134 35.2327 72.8051 39.1826 66.0997 39.1826C59.44 39.1826 54.4794 35.1482 54 29.2477H59.7009V29.2412Z"
                  fill="#211332"
                />
                <path
                  d="M98.9612 47.7686V36.6177C96.9587 38.266 94.4768 39.264 91.7373 39.264C85.0351 39.264 79.7223 33.9715 79.7223 27.463C79.7223 20.9969 85.0319 15.662 91.7373 15.662C94.4801 15.662 97.0044 16.6601 99.0069 18.3506V16.2244H104.665V47.7686H98.9612ZM92.2134 20.6067C88.4694 20.6067 85.3808 23.6887 85.3808 27.463C85.3808 31.2797 88.4726 34.2738 92.2134 34.2738C95.9999 34.2738 99.046 31.2797 99.046 27.463C99.046 23.6854 95.9999 20.6067 92.2134 20.6067Z"
                  fill="#211332"
                />
                <path
                  d="M114.28 16.2243V29.3712C114.28 32.1476 116.152 34.1859 118.937 34.1859C121.722 34.1859 123.637 32.2321 123.637 29.3712V16.2243H129.338V38.656H123.637V36.6599C122.068 38.2659 119.893 39.1761 117.456 39.1761C112.189 39.1761 108.576 35.3563 108.576 30.4993V16.2243H114.28Z"
                  fill="#211332"
                />
                <path
                  d="M144.833 34.2282C147.227 34.2282 149.187 33.1001 150.491 31.3218L154.539 34.2737C152.275 37.2256 149.229 39.2184 144.833 39.2184C137.87 39.2184 132.472 33.9258 132.472 27.4174C132.472 20.909 137.87 15.6587 144.833 15.6587C149.229 15.6587 152.275 17.6548 154.539 20.6034L150.491 23.5553C149.187 21.777 147.227 20.6489 144.833 20.6489C141.134 20.6489 138.131 23.643 138.131 27.4174C138.131 31.1918 141.134 34.2282 144.833 34.2282Z"
                  fill="#211332"
                />
                <path
                  d="M162.591 38.656H156.89V8.28545H162.591V18.1781C164.159 16.5299 166.377 15.6164 168.859 15.6164C174.081 15.6164 177.652 19.4785 177.652 24.381V38.656H171.951V25.5091C171.951 22.6027 170.079 20.6944 167.294 20.6944C164.551 20.6944 162.591 22.5182 162.591 25.5091V38.656Z"
                  fill="#211332"
                />
              </svg>
            </Link>
            
            <div className='location-lung-box d-flex flex-wrap gap-2'>
              <select name="" id="">
                <option value="">Ghana</option>
                <option value="">Ind</option>
              </select>
              <LanguageDropdown />
            </div>
          </div>

          <div className="footer-bottom-box">
            <div className="d-flex flex-wrap gap-2 justify-content-between">
              <div className='footer-box'>
                <h3 className="text-footer-heading">
                  Company
                </h3>
                <ul role="list" className="">
                  <li className="group">
                    <Link className="txet-link" href="#">
                      About Us
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Squch Corporate
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Careers
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer-box'>
                <h3 className="text-footer-heading">
                  Squchverse
                </h3>
                <ul role="list" className="">
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Squch Ride
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Squch Travel
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Squch Stay
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Squch Mart
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Squch Events Ads
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer-box'>
                <h3 className="text-footer-heading">
                  Contac us
                </h3>
                <ul role="list" className="">
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Help & Support
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Partner With Us
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Work With Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer-box'>
                <h3 className="text-footer-heading">Legal</h3>
                <ul role="list" className="">
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Cookie Policy
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer-box social-box'>
                <h3 className="text-footer-heading">Social Linls</h3>
                <ul role="list" className="d-flex flex-wrap align-items-center gap-3">
                  <li className=" group">
                    <Link className="txet-link" href="#">
                      <svg
                        width="13"
                        height="20"
                        viewBox="0 0 13 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.3145 4.42109H9.30795C8.76495 4.42109 8.32445 4.86109 8.32445 5.40459V8.85459H12.3145L11.73 12.6531H8.32495V19.6211H3.93695V12.6531H0.314453V8.85459H3.88995L3.93695 5.24959L3.93045 4.59459C3.92537 4.07474 4.02334 3.55903 4.21872 3.07726C4.4141 2.59549 4.70301 2.15721 5.06876 1.78774C5.43451 1.41827 5.86984 1.12494 6.34961 0.924701C6.82938 0.724457 7.34407 0.621267 7.86395 0.621094H12.3145V4.42109Z"
                          fill="#211332"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.08506 1.20287C7.56109 0.817795 11.069 0.817795 14.5451 1.20287C16.4441 1.41487 17.9751 2.90987 18.1981 4.81587C18.61 8.34054 18.61 11.9012 18.1981 15.4259C17.9751 17.3319 16.4441 18.8269 14.5461 19.0399C11.0697 19.425 7.56143 19.425 4.08506 19.0399C2.18606 18.8269 0.65506 17.3319 0.43206 15.4269C0.0200424 11.9019 0.0200424 8.34087 0.43206 4.81587C0.65506 2.90987 2.18606 1.41487 4.08506 1.20287ZM14.3151 4.12087C14.0498 4.12087 13.7955 4.22622 13.608 4.41376C13.4204 4.6013 13.3151 4.85565 13.3151 5.12087C13.3151 5.38608 13.4204 5.64044 13.608 5.82797C13.7955 6.01551 14.0498 6.12087 14.3151 6.12087C14.5803 6.12087 14.8346 6.01551 15.0222 5.82797C15.2097 5.64044 15.3151 5.38608 15.3151 5.12087C15.3151 4.85565 15.2097 4.6013 15.0222 4.41376C14.8346 4.22622 14.5803 4.12087 14.3151 4.12087ZM4.56506 10.1209C4.56506 8.86109 5.06551 7.65291 5.9563 6.76211C6.8471 5.87131 8.05528 5.37087 9.31506 5.37087C10.5748 5.37087 11.783 5.87131 12.6738 6.76211C13.5646 7.65291 14.0651 8.86109 14.0651 10.1209C14.0651 11.3806 13.5646 12.5888 12.6738 13.4796C11.783 14.3704 10.5748 14.8709 9.31506 14.8709C8.05528 14.8709 6.8471 14.3704 5.9563 13.4796C5.06551 12.5888 4.56506 11.3806 4.56506 10.1209Z"
                          fill="#211332"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.2735 11.8405V19.2195H15.9955V12.3345C15.9955 10.6045 15.3765 9.42446 13.8285 9.42446C12.6465 9.42446 11.9425 10.2205 11.6335 10.9895C11.5205 11.2645 11.4915 11.6475 11.4915 12.0325V19.2195H7.21145C7.21145 19.2195 7.26945 7.55946 7.21145 6.35046H11.4915V8.17446L11.4635 8.21646H11.4915V8.17446C12.0595 7.29946 13.0745 6.04846 15.3475 6.04846C18.1625 6.04846 20.2735 7.88846 20.2735 11.8405ZM2.73545 0.147461C1.27245 0.147461 0.314453 1.10746 0.314453 2.37046C0.314453 3.60546 1.24445 4.59446 2.67945 4.59446H2.70745C4.20045 4.59446 5.12745 3.60546 5.12745 2.37046C5.10145 1.10746 4.20045 0.147461 2.73545 0.147461ZM0.568453 19.2195H4.84645V6.35046H0.568453V19.2195Z"
                          fill="#211332"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      <svg
                        width="21"
                        height="17"
                        viewBox="0 0 21 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5585 0.121094C11.0925 0.124094 12.4285 0.137094 13.8485 0.194094L14.3525 0.216094C15.7815 0.283094 17.2095 0.399094 17.9185 0.596094C18.8635 0.862094 19.6055 1.63609 19.8565 2.61809C20.2565 4.17809 20.3065 7.22009 20.3125 7.95709L20.3135 8.10909V8.28309C20.3065 9.02009 20.2565 12.0631 19.8565 13.6221C19.6025 14.6071 18.8595 15.3821 17.9185 15.6441C17.2095 15.8411 15.7815 15.9571 14.3525 16.0241L13.8485 16.0471C12.4285 16.1031 11.0925 16.1171 10.5585 16.1191L10.3235 16.1201H10.0685C8.93845 16.1131 4.21245 16.0621 2.70845 15.6441C1.76445 15.3781 1.02145 14.6041 0.770453 13.6221C0.370453 12.0621 0.320453 9.02009 0.314453 8.28309V7.95709C0.320453 7.22009 0.370453 4.17709 0.770453 2.61809C1.02445 1.63309 1.76745 0.858094 2.70945 0.597094C4.21245 0.178094 8.93945 0.127094 10.0695 0.121094H10.5585ZM8.31345 4.62109V11.6211L14.3135 8.12109L8.31345 4.62109Z"
                          fill="#211332"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="group">
                    <Link className="txet-link" href="#">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_3453_24388)">
                          <path
                            d="M6.62494 0.121094L10.9802 6.49125L11.2624 6.22399L16.1007 0.121094H19.1451L12.4576 8.64492L20.3145 20.1211H14.1249L9.28623 13.1732L3.80236 20.1211H0.717679L7.85074 11.0948L0.314453 0.121094H6.62494ZM5.69752 2.081H3.90316L15.012 18.1166H16.6854L5.69752 2.081Z"
                            fill="#211332"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3453_24388">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0.314453 0.121094)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='footer-box'>
                <h3 className="text-footer-heading">
                  Download App
                </h3>
                <ul role="list" className="">
                  <li className="group m-0 p-0">
                    <Link
                      className="text-sm/6 font-medium text-[#211332] hover:text-[#400E43]"
                      href="#"
                    >
                      <Image src={AppleStore} alt="" />
                      
                    </Link>
                  </li>
                  <li className="group lg:!mt-3 !m-0 p-0">
                    <Link
                      className="text-sm/6 font-medium text-[#211332] hover:text-[#400E43]"
                      href="#"
                    >
                      <Image src={PlayStore} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className='footer-bottom'>
              <hr />
              <p className="text-center">
                By continuing past this page, you agree to our Terms of Service,
                Cookie Policy, Privacy Policy and Content Policies. All trademarks
                are properties of their respective owners. 2008-2024 © Squch™ Ltd.
                All rights reserved.
              </p>
            </div>
        </div>
      </div>
  </footer>
  )
}

export default Footer