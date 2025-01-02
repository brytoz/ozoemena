import Nav from "../Nav";

const Header: React.FC = () => {
    return (
      <div className="relative min-h-screen bg-black text-white font-sans">
        <Nav />
  
        <header className="mt-24 md:mt-0 bg-black text-white md:h-screen flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20">
          <div className="space-y-12 text-center md:text-left md:w-1/2 md:space-y-6">
            <h1 className="text-6xl md:text-8xl font-serif">
              Welcome to My Design Portfolio
            </h1>
  
            <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              Ozoemena Bright / Fullstack Developer
            </button>
          </div>
  
          {/* Image Section */}
          <div className="hidden md:inliine-block mt-8 md:mt-0 md:w-1/2 md:flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img
                src="/path/to/image.jpg"
                alt="Chad Gibbons"
                className="w-full h-full object-cover"
              />
              <p className="text-lg font-medium poppins-regular ">
                Work with me todayfdfdf
              </p>
            </div>
          </div>
        </header>
  
    
      </div>
    );
  };
  
  export default Header;