import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import NewHeader from "../components/Header/NewHeader";
import CustomersSection from "../components/CustomersSection";
import ValueSection from "../components/ValueSection";
import FeatureSection from "../components/FeatureSection";
import SmallBusinessSection from "../components/SmallBusinessSection";
import BlogSection from "../components/BlogSection";
import PartnersSection from "../components/PartnersSection";
import DemoBannerSection from "../components/DemoBannerSection";
import Footer from "../components/Footer";

const Home: React.FC<{}> = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of our Vite SSR React website."
        />
      </Helmet>

      <div className="">
        <NewHeader />
        <HeroSection />
        <CustomersSection />
        <SmallBusinessSection />
        {/* <FeatureSection /> */}
        {/* <BlogSection /> */}
        <ValueSection />
        <PartnersSection />
        <DemoBannerSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
