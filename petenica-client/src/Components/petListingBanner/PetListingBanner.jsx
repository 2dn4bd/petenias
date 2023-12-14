const PetListingBanner = () => {
    return (
        <div className="">
            <section className="relative overflow-hidden">
        <div className="relative bg-fixed flex items-center justify-center w-full text-center bg-center bg-cover "
          style = {{
            backgroundImage:
            'url("https://i.ibb.co/svMDMMv/bannerimg.jpg")',
            height:'40rem'
         }} >
            <div className="mx-4">
                <div className="z-10 max-w-3xl p-6 bg-gray-900 md:p-16 opacity-80">
                    <div className="text-center">
                        <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                        Help pets in need, donate for their well-being and happiness.
                        </h2>
                        <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                            Success is most important part of life and it is determination of having achieved and
                            accomplished
                            aim with
                            lots of failure
                            enthusiam.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div>
                            <select className="py-3 px-4 pe-9 block w-full  border-transparent rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none bg-gray-700 dark:border-transparent text-gray-300 focus:ring-gray-600">
                            <option selected disabled>Category</option>
                            <option>Dogs</option>
                            <option>Cats</option>
                            <option>Birds</option>
                            <option>Rabbits</option>
                            </select>
                            </div>
                            <input
                                className="w-full py-3 pl-4 mb-2 text-sm placeholder-gray-300 text-gray-300 bg-gray-600 md:mb-0 md:w-1/2"
                                type="text" placeholder="Pet Name"/>
                            <button
                                className="w-full px-6 py-3 text-sm font-semibold text-white bg-teal-600 rounded md:w-auto md:ml-2 hover:bg-teal-700">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default PetListingBanner;