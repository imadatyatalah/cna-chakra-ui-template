import dynamic from "next/dynamic";

const Custom404Page = dynamic(() => import("../components/pages/404"));

import { SEO } from "../components/seo";

const Custom404 = () => (
  <>
    <SEO title="404 Page Not Found" />
    <Custom404Page />
  </>
);

export default Custom404;
