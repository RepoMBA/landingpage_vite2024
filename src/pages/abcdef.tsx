import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import NewHeader from "../components/Header/NewHeader";

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

      <div>
        <NewHeader />
        <h1>Welcome to the Home Page</h1>
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
