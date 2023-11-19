import Navbar from './components/ui/Navbar';
import Footer from './components/ui/footer';
import ProductList from './components/home/ProductLIst';
import TrendCarousel from './components/home/TrendCarrousel';
import AboutUs from './components/home/AboutUs';
import HeroSection from './components/home/HeroBotton';
import ProductTitle from './components/home/ProductTitle';

const Home = () => {
  return (
    <div data-testid="home" className="flex flex-col min-h-screen">
      <Navbar />
      <TrendCarousel />
      <ProductTitle />
      <ProductList />
      <AboutUs />
      <HeroSection backgroundImage="/clothes/second-_1_.png" />
      <Footer />
    </div>
  );
}

export default Home;
