import { Helmet } from "react-helmet";

const Home:React.FC<{}> = () => {
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
        <h1>Welcome to the Home Page</h1>
        <p>
          This is a simple server-side rendered website with React and Vite.
        </p>
      </div>
    </div>
  );
};

export default Home;
