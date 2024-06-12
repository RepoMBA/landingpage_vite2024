import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="This page provides information about our website."
        />
      </Helmet>

      <div>
        <h1>About Us</h1>
        <p>This page gives information about our website.</p>
      </div>
    </div>
  );
};

export default About;
