import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../components/pages/homePage"));

import { SEO } from "../components/seo";

const Home = () => (
  <>
    <SEO title="Home" />
    <HomePage />
  </>
);

export default Home;
