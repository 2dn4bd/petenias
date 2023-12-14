import { FaPaw } from "react-icons/fa";
const MiddleBanner = () => {
    return (
        <div className="bg-gray-100 py-5 " >
            <div className=" xl:gap-7   mx-auto text-center ">
                <div>
                <h1 className="text-4xl font-semibold md:text-4xl lg:text-5xl ">
                Creating a World Where Every Paw <br /> Finds A Loving Home
                </h1>
                </div>
            </div>
    <section className="flex items-center  font-poppins ">
        
        <div className="justify-center flex-1   px-4 py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex justify-center  flex-wrap items-center">
                <div className="w-full px-4 mb-10 xl:w-[1300px] lg:mb-8">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 md:w-1/2 order-2">
                            <img src="https://i.ibb.co/w6Vy8wN/midbanner1.jpg" alt=""
                                className="object-cover w-full mb-6 rounded-lg lg:h-[70%] md:h-80"/>
                                <div className="flex items-center gap-4 justify-center">
                                <div>
                            <div className="flex gap-1 items-center">
                                <div className="bg-[#F69B02] inline-block p-2 rounded-full">
                                    <FaPaw className="text-white"></FaPaw>
                                </div>
                                <div>
                                <h1 className="font-semibold text-lg">
                                Adopt Pet
                                </h1>
                                </div>
                            </div>
                            <p className="ml-8">
                            Their loyalty and playful <br /> spirit create bonds that <br /> resonate deeply.
                            </p>
                            </div>

                            <div>
                            <div className="flex gap-1 items-center">
                                <div className="bg-[#F69B02] inline-block p-2 rounded-full">
                                    <FaPaw className="text-white"></FaPaw>
                                </div>
                                <div>
                                <h1 className="font-semibold text-lg">
                                Donation Campaign
                                </h1>
                                </div>
                            </div>
                            <p className="ml-8">
                            Support our pet cause. <br /> Every donation nurtures a furry <br /> friend's happiness.
                            </p>
                            </div>
                                </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 md:order-8 ">
                            <div className="mb-10 text-2xl lg:ml-10">
                            Unconditional love, joy, and companionship—pets enrich our lives in countless ways. Their loyalty and playful spirit create bonds that resonate deeply, making every day brighter and more meaningful.
                            </div>
                            <img src="https://i.ibb.co/NLGFS2k/midbanner2.jpg" alt=""
                                className="object-cover w-full mb-6 rounded-lg lg:h-[80%] md:h-80 lg:ml-10"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="border-b-2 border-dashed border-[#FAD199] mx-auto pt-10 container">
    </div>
        </div>
    );
};

export default MiddleBanner;