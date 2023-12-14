const AboutUs = () => {
    return (
        <div>
            <section className="flex items-center py-20 bg-gray-100 font-poppins ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2">
                            <img src="https://i.ibb.co/YykG591/about1.jpg" alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80"/>
                            <img src="https://i.ibb.co/4pBdfCh/about3.jpg" alt=""
                                className="object-cover w-full rounded-lg h-80"/>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:mt-11">
                            <img src="https://i.ibb.co/j86gk2X/about4.jpg" alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80"/>
                            <img src="https://i.ibb.co/5FLd6g5/about5.jpg" alt=""
                                className="object-cover w-full rounded-lg h-80"/>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <span className="text-sm font-semibold text-teal-500 ">About Us</span>
                    <h2 className="mt-2 mb-4 text-2xl font-bold text-gray-700 ">
                    Petenica: Adoption & Donation Hub
                    </h2>
                    <p className="mb-4 text-base leading-7 text-gray-500">
                    Empower pet adoptions and support through our dedicated donation campaign platform.
                    </p>
                    <span className="text-sm font-semibold text-teal-500  ">Why this website was made</span>
                    <ul className="mb-10 mt-3">
                        <li className="flex items-center mb-4 text-base text-gray-600 ">
                            <span className="mr-3 text-teal-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                </svg>
                            </span>
                            <span className="font-semibold ">
                            Streamlined Adoption:
                            </span> 
                            <p className="ml-1">Simplify the pet adoption process for both adopters and rescue organizations.</p>
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600">
                            <span className="mr-3 text-teal-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-2-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                                </svg>
                            </span>
                            <span className="font-semibold ">
                            Lifesaving Efforts:
                            </span> 
                            <p className="ml-1">Contribute to saving more lives by supporting rescue organizations and addressing animal homelessness.</p>
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 ">
                            <span className="mr-3 text-teal-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-3-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                                </svg>
                            </span>
                            <span className="font-semibold ">
                            Financial Aid:
                            </span> 
                            <p className="ml-1">Generate funds for veterinary care and essential resources through online donations.</p>
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 ">
                            <span className="mr-3 text-teal-500 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-4-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                                </svg>
                            </span>
                            <span className="font-semibold ">
                            Awareness Boost:
                            </span> 
                            <p className="ml-1">Increase awareness about pet adoption and the challenges faced by rescue groups.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default AboutUs;