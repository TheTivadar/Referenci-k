import Navbar from "../ui/webshop/navbar";
import Header from "../ui/webshop/header";
import Future from "../ui/webshop/future";
import CardCarousel from "../ui/webshop/cardCarousel";
import TerkoPics from "../ui/webshop/terkoPics";
import Footer from "../ui/webshop/footer";

const Webshop = () => {
  return (
    <div className="text-black">
        <Navbar />
        <Header />
        <Future />
        <CardCarousel />
        <TerkoPics />
        <Footer />
    </div>
  );
};

export default Webshop;
