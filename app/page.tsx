import Navbar from './components/ui/Navbar';
import Footer from './components/footer';
import ProductList from './components/home/ProductLIst';
import TrendCarousel from './components/home/TrendCarrousel';
import AboutUs from './components/home/AboutUs';
import HeroSection from './components/home/HeroBotton';
  import { Product } from './types';
import ProductTitle from './components/home/ProductTitle';

interface HomeProps {
  products: Product[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <div data-testid="home" className="flex flex-col min-h-screen">
      <Navbar />
      <TrendCarousel />
      <ProductTitle />
      <ProductList  />
      <AboutUs />
      <HeroSection backgroundImage="/clothes/second-_1_.png" />
      <Footer />
    </div>
  );
}

export default Home
