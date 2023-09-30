import Head from "next/head";
import { baseUrl } from "~/utils/constants";

type Props = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

const SEO: React.FC<Props> = ({ title, description, image, url = baseUrl }) => {
  const formattedTitle = `Hari Pramod | ${title}`;

  const IMAGE = "https://i.imgur.com/vfmOTnx.png";
  const favicon = `${baseUrl}/static/favicon.ico`;

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="title" content={formattedTitle} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="unsw, portfolio, hari pramod, hari, hehe, software engineering, computer science, linkedin, job, hire, code, javascript, typescript, full stack, website, webapp, design, web design"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <link rel="icon" href={favicon} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || IMAGE} />
      <meta property="og:image:width" content="540" />
      <meta property="og:image:height" content="304" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Logo" />
    </Head>
  );
};
export default SEO;
