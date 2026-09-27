const ImageFull = () => {
    return (
      <>
        <div className="relative bg-gray-900 mt-56 h-96">
          <div className="absolute w-full h-full">
            {/* Background Image */}
            <img
              src="./public/pexels-photo-27203469.webp"
              alt="A row of jackets hanging on hangers"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Blur filter on the right quarter of the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 w-full h-full"></div>
  
          {/* Text content on the right side */}
          <div className="absolute inset-0 flex items-center justify-end pr-16 text-white text-right    right-60   ">
            <div>
              <p className="text-lg font-normal">FLASH SALE</p>
              <h1 className="text-5xl font-bold">-80%</h1>
              <p className="text-sm font-medium mt-4">When You Buy $100 E-Gift Cards</p>
              <p className="text-xs font-normal">ENDS 31-12</p>
              <button className="bg-white text-gray-900 font-medium rounded-md px-4 py-2 mt-4 hover:bg-gray-200">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ImageFull;
  