import Head from "next/head";
import { baseUrl } from "~/utils/constants";

type Props = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

const SEO: React.FC<Props> = ({ title, description, image, url = baseUrl }) => {
  const formattedTitle = `HP | ${title}`;

  const IMAGE =
    "https://media.discordapp.net/attachments/1092987636035092662/1125346156852035634/metaimage.png";
  const favicon = `${baseUrl}/static/favicon.ico`;

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="title" content={formattedTitle} />
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || IMAGE} />
    </Head>
  );
};
export default SEO;
