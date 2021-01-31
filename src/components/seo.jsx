import NextHead from "next/head";
import config from "../../config";

export const SEO = ({ description, title }) => (
  <>
    <NextHead>
      <title>{`${title} | ${config.title}`}</title>
      <meta name="description" content={description || config.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || config.description}
      />
      <meta property="og:site_name" content={config.title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description || config.description}
      />
    </NextHead>
  </>
);
