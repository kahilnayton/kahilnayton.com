import Hero from "components/Hero";
import SubNav from "components/sections/SubNav";
import TwoColumns from "components/sections/TwoColumn";
import { data, links } from "lib";

const Home = () => {
  return (
    <>
      <Hero />
      <SubNav links={links} />
      {Object.keys(data).map((keyName, i) => (
        <TwoColumns key={i} {...data[keyName]} />
      ))}
    </>
  );
};

export default Home;
