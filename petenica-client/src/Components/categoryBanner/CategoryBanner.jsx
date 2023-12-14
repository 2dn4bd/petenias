const CategoryBanner = () => {
    return (
        <div className="w-full bg-fixed bg-cover bg-center mb-7" style = {{
            backgroundImage:
            'url("https://i.ibb.co/K70T5br/mid.jpg")',
            height:'40rem'
         }} >
 
     <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50" >
         <div className="text-center text-white py-32 lg:w-[70%] md:w-[90%]">
             <h1 className=" text-2xl font-semibold uppercase md:text-3xl lg:text-5xl my-5">Adopting is an act of <span className="text-[#D61C61]">love</span> <br />
             </h1>
             <p className='lg:text-xl text-md md:text-xl'>
             Adopting is a profound act of love, weaving hearts together as families form through compassion, <br /> creating bonds that transcend biology, and offering hope for brighter, shared tomorrows.
             </p>
         </div>
     </div>
 </div>
    );
};

export default CategoryBanner;