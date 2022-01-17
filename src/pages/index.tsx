import SubNav from "components/sections/SubNav";
import Hero from "components/Hero";
import TwoColumns from "components/sections/TwoColumn";
import { data, links } from "lib";

const Home = () => {
  return (
    <>
      <Hero />
      <SubNav links={links} />

      <TwoColumns
        id={data.newmusic.id}
        description={data.newmusic.description}
        link={data.newmusic.link}
        linkLable={data.newmusic.linkLable}
        title={data.newmusic.title}
        imageSrc={data.newmusic.image}
        reverse={false}
      />
      <TwoColumns
        id={data.nft.id}
        description={data.nft.description}
        link={data.nft.link}
        linkLable={data.nft.linkLable}
        title={data.nft.title}
        imageSrc={data.nft.image}
        reverse={true}
      />

      <TwoColumns
        id={data.bandcamp.id}
        description={data.bandcamp.description}
        link={data.bandcamp.link}
        linkLable={data.bandcamp.linkLable}
        title={data.bandcamp.title}
        imageSrc={data.bandcamp.image}
        reverse={false}
      />
      <TwoColumns
        id={data.video.id}
        description={data.video.description}
        link={data.video.link}
        linkLable={data.video.linkLable}
        title={data.video.title}
        imageSrc={data.video.image}
        reverse={true}
      />
      <TwoColumns
        id={data.choro.id}
        description={data.choro.description}
        link={data.choro.link}
        linkLable={data.choro.linkLable}
        title={data.choro.title}
        imageSrc={data.choro.image}
        reverse={false}
      />
    </>
  );
};

export default Home;
