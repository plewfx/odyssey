import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section>
        <div className="container">
            <div className="flex">
                <div className="bg-1 bg-cover bg-left-top w-full h-[27.7vw] rounded-40 pt-60 pl-60">
                    <h1 className="text-white text-64 font-black max-w-[28%]">Unveiling the Wonders of the Universe</h1>
                </div>
                <div className="absolute right-[10vw]">
                    <div className="z-50 absolute bottom-[25%] -left-[5%] flex flex-col gap-20 bg-white rounded-24 p-20 shadow-grey">
                        <div className="flex items-center gap-10">
                            <div className="p-10 bg-blue-100 rounded-12">
                                <svg className="w-[1vw] h-[1vw] shadow-grey" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9872 0.197443C15.9158 0.989546 19.0104 4.08418 19.8025 8.01276C20.0209 9.09554 19.1046 9.99999 18 9.99999H12C10.8954 9.99999 10 9.10456 10 7.99999V1.99999C10 0.89542 10.9045 -0.0208739 11.9872 0.197443ZM0 11C0 6.19722 3.76201 2.2731 8.5 2.01366V8.00004C8.5 9.93303 10.067 11.5 12 11.5H17.9863C17.7269 16.238 13.8028 20 9 20C4.02944 20 0 15.9706 0 11Z" fill="white"/>
                                </svg>
                            </div>
                            <h3 className="font-semibold">Spacewalks</h3>
                        </div>
                        <div className="flex items-center gap-10">
                            <svg className="w-[10vw]" xmlns="http://www.w3.org/2000/svg" width="191" height="99" viewBox="0 0 191 99" fill="none">
                                <g clipPath="url(#clip0_1_108)">
                                    <path d="M190.33 0.550049H0.5V97.91H190.33V0.550049Z" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M19.8199 0.550049V97.91" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M41.86 0.550049V97.91" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M63.91 0.550049V97.91" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M85.95 0.550049V97.91" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M107.99 0.550049V97.91" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M130.04 0.550049V97.91" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M152.08 0.550049V97.91" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M174.12 0.550049V97.91" stroke="#A9C2CB" strokeMiterlimit="10"/>
                                    <path d="M190.33 0.550049H0.5" stroke="#A9C2CB" strokeWidth="1.11" strokeMiterlimit="10"/>
                                    <path d="M190.33 14.46H0.5" stroke="#A9C2CB" strokeWidth="1.11" strokeMiterlimit="10"/>
                                    <path d="M190.33 28.37H0.5" stroke="#A9C2CB" strokeWidth="1.11" strokeMiterlimit="10"/>
                                    <path d="M190.33 42.28H0.5" stroke="#A9C2CB" strokeWidth="1.11" strokeMiterlimit="10"/>
                                    <path d="M190.33 56.1899H0.5" stroke="#A9C2CB" strokeWidth="1.11" strokeMiterlimit="10"/>
                                    <path d="M190.33 70.09H0.5" stroke="#A9C2CB" strokeWidth="1.11" strokeMiterlimit="10"/>
                                    <path d="M190.33 84H0.5" stroke="#A9C2CB" strokeWidth="1.11" strokeMiterlimit="10"/>
                                    <path d="M190.33 97.91H0.5" stroke="#A9C2CB" strokeWidth="1.11" strokeMiterlimit="10"/>
                                    <path d="M174.12 27.53H129.96L86.16 42.08L63.5599 83.61L41.8799 56.1L19.8199 83.61" stroke="url(#paint0_linear_1_108)" strokeMiterlimit="10"/>
                                    <path d="M22.65 83.6C22.65 84.1597 22.484 84.7069 22.1731 85.1723C21.8621 85.6377 21.4201 86.0004 20.903 86.2146C20.3859 86.4288 19.8168 86.4848 19.2679 86.3756C18.7189 86.2664 18.2147 85.9969 17.8189 85.6011C17.4231 85.2053 17.1536 84.7011 17.0444 84.1521C16.9352 83.6031 16.9912 83.0341 17.2054 82.517C17.4196 81.9999 17.7823 81.5579 18.2477 81.2469C18.7131 80.936 19.2603 80.77 19.82 80.77C20.5706 80.77 21.2904 81.0682 21.8211 81.5989C22.3518 82.1296 22.65 82.8494 22.65 83.6Z" fill="url(#paint1_linear_1_108)"/>
                                    <path d="M41.8801 58.94C43.443 58.94 44.71 57.673 44.71 56.11C44.71 54.5471 43.443 53.28 41.8801 53.28C40.3171 53.28 39.05 54.5471 39.05 56.11C39.05 57.673 40.3171 58.94 41.8801 58.94Z" fill="url(#paint2_linear_1_108)"/>
                                    <path d="M66.3999 83.6C66.4019 84.1626 66.2368 84.713 65.9255 85.1816C65.6142 85.6502 65.1708 86.0157 64.6514 86.2319C64.1321 86.4481 63.5602 86.5052 63.0084 86.3959C62.4565 86.2867 61.9496 86.016 61.5518 85.6182C61.154 85.2204 60.8833 84.7134 60.7741 84.1616C60.6648 83.6098 60.7219 83.0379 60.9381 82.5186C61.1543 81.9992 61.5198 81.5558 61.9884 81.2445C62.4569 80.9332 63.0074 80.7681 63.57 80.77C64.3197 80.7727 65.038 81.0717 65.5682 81.6018C66.0983 82.132 66.3973 82.8503 66.3999 83.6Z" fill="url(#paint3_linear_1_108)"/>
                                    <path d="M88.99 42.08C88.99 42.6398 88.824 43.1869 88.513 43.6523C88.2021 44.1177 87.7601 44.4804 87.243 44.6946C86.7259 44.9088 86.1568 44.9648 85.6079 44.8556C85.0589 44.7464 84.5547 44.4769 84.1589 44.0811C83.7631 43.6854 83.4935 43.1811 83.3843 42.6321C83.2751 42.0832 83.3312 41.5141 83.5454 40.997C83.7596 40.4799 84.1223 40.0379 84.5877 39.727C85.0531 39.416 85.6002 39.25 86.16 39.25C86.532 39.2487 86.9006 39.321 87.2445 39.4628C87.5885 39.6045 87.901 39.8129 88.164 40.076C88.4271 40.339 88.6355 40.6515 88.7772 40.9955C88.919 41.3394 88.9913 41.708 88.99 42.08Z" fill="url(#paint4_linear_1_108)"/>
                                    <path d="M129.96 30.36C131.523 30.36 132.79 29.0929 132.79 27.53C132.79 25.967 131.523 24.7 129.96 24.7C128.397 24.7 127.13 25.967 127.13 27.53C127.13 29.0929 128.397 30.36 129.96 30.36Z" fill="url(#paint5_linear_1_108)"/>
                                    <path d="M176.96 27.53C176.962 28.0938 176.796 28.6454 176.483 29.1146C176.171 29.5838 175.725 29.9493 175.204 30.1646C174.683 30.3798 174.11 30.4351 173.557 30.3234C173.005 30.2116 172.498 29.9379 172.101 29.5371C171.705 29.1364 171.436 28.6266 171.331 28.0728C171.225 27.519 171.286 26.9462 171.507 26.4275C171.728 25.9087 172.098 25.4674 172.57 25.1597C173.043 24.8521 173.596 24.6921 174.16 24.7C174.905 24.7105 175.615 25.0129 176.139 25.5422C176.663 26.0716 176.957 26.7854 176.96 27.53Z" fill="url(#paint6_linear_1_108)"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1_108" x1="19.4299" y1="55.77" x2="174.12" y2="55.77" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#171E27"/>
                                    <stop offset="1" stopColor="#A9C2CB"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_108" x1="16.99" y1="83.61" x2="22.65" y2="83.61" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#171E27"/>
                                    <stop offset="1" stopColor="#A9C2CB"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1_108" x1="39.05" y1="56.11" x2="44.71" y2="56.11" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#171E27"/>
                                    <stop offset="1" stopColor="#A9C2CB"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_1_108" x1="60.73" y1="83.61" x2="66.3999" y2="83.61" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#A9C2CB"/>
                                    <stop offset="0.0001" stopColor="#171E27"/>
                                    <stop offset="1" stopColor="#A9C2CB"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_1_108" x1="83.33" y1="42.08" x2="88.99" y2="42.08" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#171E27"/>
                                    <stop offset="1" stopColor="#A9C2CB"/>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_1_108" x1="127.12" y1="27.53" x2="132.79" y2="27.53" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#171E27"/>
                                    <stop offset="1" stopColor="#A9C2CB"/>
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_1_108" x1="171.29" y1="27.53" x2="176.96" y2="27.53" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#171E27"/>
                                    <stop offset="1" stopColor="#A9C2CB"/>
                                    </linearGradient>
                                    <clipPath id="clip0_1_108">
                                    <rect width="190.83" height="98.47" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 95 95" fill="none">
                                <g clipPath="url(#clip0_1_133)">
                                    <path d="M47.49 47.36L2.48999 32.73C5.47431 23.1611 11.4639 14.8091 19.57 8.91321C27.6762 3.01733 37.467 -0.108301 47.49 3.86862e-05V47.36Z" fill="#171E27" fillOpacity="0.6"/>
                                    <path d="M47.4899 47.36L75.3299 85.67C65.168 93.0519 52.49 96.0948 40.0846 94.1295C27.6791 92.1641 16.5625 85.3514 9.17995 75.19C4.67975 69.1984 1.71454 62.1964 0.54317 54.7951C-0.628202 47.3939 0.0298738 39.8184 2.45995 32.73L47.4899 47.36Z" fill="#171E27" fillOpacity="0.8"/>
                                    <path d="M47.49 47.36L75.33 9.05005C80.3614 12.7045 84.6235 17.3145 87.8728 22.6165C91.1221 27.9186 93.295 33.8089 94.2673 39.951C95.2396 46.093 94.9922 52.3664 93.5394 58.4129C92.0866 64.4593 89.4567 70.1603 85.8 75.19C82.9116 79.2367 79.3739 82.7778 75.33 85.6701L47.49 47.36Z" fill="#A9C2CB" fillOpacity="0.6"/>
                                    <path d="M47.49 47.36V2.5345e-05C57.5089 -0.154417 67.2974 3.00999 75.33 9.00003L47.49 47.36Z" fill="#171E27" fillOpacity="0.2"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_133">
                                    <rect width="94.86" height="94.71" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="z-50 absolute bottom-[45%] right-[3%] flex flex-col gap-20 bg-white rounded-24 py-20 px-36 shadow-grey">
                        <div className="flex items-center gap-10">
                            <div className="p-10 bg-blue-100 rounded-12">
                                <svg className="w-[0.9vw] h-[0.9vw]" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                    <path d="M10.765 1.70229L10 2.52422L9.23495 1.70229C7.12233 -0.567428 3.69709 -0.56743 1.58447 1.70229C-0.528155 3.972 -0.528156 7.65194 1.58447 9.92165L8.4699 17.3191C9.31495 18.227 10.685 18.227 11.5301 17.3191L18.4155 9.92165C20.5282 7.65194 20.5282 3.972 18.4155 1.70229C16.3029 -0.567429 12.8777 -0.567429 10.765 1.70229Z" fill="white"/>
                                </svg>
                            </div>
                            <h3 className="font-semibold">Exercising</h3>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-[10vw]" xmlns="http://www.w3.org/2000/svg" width="194" height="45" viewBox="0 0 194 45" fill="none">
                                <g clipPath="url(#clip0_1_42)">
                                    <path d="M1.17004 41.34C1.17004 41.34 4.26005 44.4 14.55 39.64C24.84 34.88 19.7 43.2801 24.55 42.3101C29.4 41.3401 29.69 36.52 34.07 38.16C38.45 39.8 37.93 43.72 41.53 38.79C45.13 33.86 45.39 1.17004 45.39 1.17004L47.97 40.17C47.97 40.17 57.97 44.93 65.47 32.68C72.97 20.43 78.59 30.47 79.11 35.57C79.63 40.67 87.1101 44.57 91.2001 38.98C91.2001 38.98 94.04 36.2501 97.38 41.7001C100.72 47.1501 104.59 37.1 104.59 37.1C104.59 37.1 109.48 35.1 111.28 41.87L117.97 1.19004L121.83 41.36C124.48 41.9682 127.257 41.6796 129.726 40.5395C132.194 39.3993 134.215 37.4721 135.47 35.0601C140.36 26.3801 147.57 23.49 153.23 36.59C153.23 36.59 158.36 47.1101 170.02 38.09C170.02 38.09 177.26 32.8101 181.69 39.4501H191.95" stroke="url(#paint0_linear_1_42)" strokeWidth="2.34" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_1_42" x1="4.38966e-05" y1="22.23" x2="193.16" y2="22.23" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#171E27"/>
                                    <stop offset="1" stopColor="#A9C2CB"/>
                                    </linearGradient>
                                    <clipPath id="clip0_1_42">
                                    <rect width="193.17" height="44.47" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="z-50 absolute -bottom-[13%] right-[20%] flex flex-col gap-20 bg-black-100 rounded-24 p-20 shadow-grey">
                        <div className="flex items-center gap-10">
                            <div className="p-10 bg-blue-100 rounded-12">
                                <svg className="w-[1vw] h-[1vw]" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.20412 2.13575C7.09202 1.88462 8.02967 1.75 9 1.75C9.97033 1.75 10.908 1.88462 11.7959 2.13575C12.1945 2.24849 12.609 2.01676 12.7217 1.61818C12.8344 1.21961 12.6027 0.805108 12.2041 0.692376C11.1847 0.404046 10.1097 0.25 9 0.25C7.89028 0.25 6.81531 0.404046 5.79588 0.692376C5.3973 0.805108 5.16558 1.21961 5.27831 1.61818C5.39104 2.01676 5.80554 2.24849 6.20412 2.13575ZM17.5 11.5C17.5 16.1944 13.6944 20 9 20C4.30558 20 0.5 16.1944 0.5 11.5C0.5 6.80558 4.30558 3 9 3C13.6944 3 17.5 6.80558 17.5 11.5ZM9.75 7C9.75 6.58579 9.41421 6.25 9 6.25C8.58579 6.25 8.25 6.58579 8.25 7V10.7007C7.80165 10.96 7.5 11.4448 7.5 12C7.5 12.8284 8.17157 13.5 9 13.5C9.82843 13.5 10.5 12.8284 10.5 12C10.5 11.4448 10.1984 10.96 9.75 10.7007V7Z" fill="white"/>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-white">Total time in space </h3>
                        </div>
                        <div className="flex items-center pl-50">
                            <span className="text-24 font-extrabold text-white tracking-[0.7vw]">352D 5H 49M 20S</span>
                        </div>
                    </div>
                    <div className="bg-2 bg-cover w-[40vw] h-[40vw] -scale-x-[1]"></div>
                </div>
            </div>
            <div className="flex flex-col gap-40 mt-40 max-w-[40%]">
                <p className="font-medium leading-180">At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. </p>
                <div className="flex items-center justify-between">
                    <Link className="text-white text-24 font-semibold py-26 px-54 bg-black-100 shadow-black rounded-20">Get Started</Link>
                    <div className="flex items-center gap-20">
                        <span className="text-24 font-semibold">Watch the Video</span>
                        <div className="p-10 bg-blue-100 rounded-12">
                            <svg className="w-[1vw] h-[1vw]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 10.0058C0 4.48625 4.48842 0 10 0C15.5116 0 20 4.48625 20 10.0058C20 15.5137 15.5116 20 10 20C4.48842 20 0 15.5137 0 10.0058ZM13.668 11.0178C13.7741 10.9117 13.9093 10.7477 13.9382 10.7091C14.0927 10.5065 14.1699 10.2557 14.1699 10.0058C14.1699 9.72504 14.083 9.46454 13.9189 9.25229C13.9055 9.23885 13.8791 9.21019 13.8448 9.17284C13.7806 9.10296 13.6885 9.00264 13.6004 8.91462C12.8089 8.06561 10.7432 6.67631 9.66216 6.25181C9.49807 6.18524 9.08301 6.03956 8.861 6.02991C8.64865 6.02991 8.44595 6.07815 8.2529 6.17463C8.01158 6.3097 7.81853 6.52195 7.71236 6.77279C7.64479 6.94645 7.53861 7.46744 7.53861 7.47709C7.43243 8.04631 7.37452 8.9725 7.37452 9.99518C7.37452 10.9706 7.43243 11.8572 7.51931 12.4361C7.52169 12.4385 7.53 12.4799 7.5429 12.5442C7.58211 12.7397 7.6638 13.1471 7.75097 13.314C7.96332 13.7192 8.37838 13.9701 8.82239 13.9701H8.861C9.15058 13.9604 9.75869 13.7096 9.75869 13.7C10.7819 13.2754 12.7992 11.9537 13.61 11.0757L13.668 11.0178Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero