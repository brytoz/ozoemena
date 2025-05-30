interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  return (
    <div
      id={`${id}`}
      className="relative min-h-screen bg-black text-white font-sans"
    >
      <header className=" md:pb-12 bg-black text-white md:h-screen flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20">
        <div className=" text-center  md:space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif uppercase  opacity-0 animate-netflix-in tracking-wide ">
            Ozoemena Bright Chukwuebuka
          </h1>

          {/* <h1 className="text-6xl md:text-8xl font-serif uppercase">
              Ozoemena Bright Chukwuebuka
            </h1> */}

          <button className="mt-4 text-white px-6 py-2  border border-sky-900    *:border-sky-500/15  *:border *:border-sky-100 *:bg-sky-50 hover:bg-sky-900 hover:text-sky-300 *:bg-sky-500/10    transition rounded-full">
            Frontend ⭐ Mobile App ⭐ Backend
          </button>

        
          </div>

        {/* Image Section */}
        {/* <div className="hidden md:inliine-block mt-8 md:mt-0 md:w-1/2 md:flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <img
                src="/path/to/image.jpg"
                alt="Brytoz"
                className="w-full h-full object-cover"
              />
              <p className="text-lg font-medium poppins-regular ">
                Work with me todayfdfdf
              </p>
            </div>
          </div> */}
      </header>
    </div>
  );
};

export default Header;
