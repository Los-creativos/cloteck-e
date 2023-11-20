import Image from 'next/image';

interface HeroSectionProps {
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage }) => {
  return (
    <div className="relative h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div> {/* Overlay */}
      <div className="z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white">
          Midweight classics
        </h1>
        <p className="text-xl text-gray-300 mt-4">
          Clothes that work as hard as you do.
        </p>
        <button className="mt-8 px-6 py-2 bg-white text-gray-900 font-semibold rounded-md button-hover-effect">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
