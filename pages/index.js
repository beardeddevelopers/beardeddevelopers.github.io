import Head from "next/head";
import Layout from "../components/layout";
import Bearded from "../components/bearded";
import AlmostBearded from "../components/almostBearded";

export async function getStaticProps() {
  const beards = [
    {
      id: 3,
      name: "David",
      avatar: "/images/avatar-dp-beard.jpg",
      image: "/images/dp-beard.jpg",
    },
  ];

  const almostBeards = [
    {
      id: 3,
      name: "Andrew",
      avatar: "/images/avatar-ao-close.jpg",
      image: "/images/ao-close.jpg",
    },
  ];

  return {
    props: {
      data: {
        beards: beards,
        almostBeards: almostBeards,
      },
    },
  };
}

export default function Home({ data }) {
  return (
    <Layout>
      <div className="beardTop">
        <div title="These bearded developers completely fulfill all four requirements!">
          {data.beards.length} Pure Beards!
        </div>
      </div>
      <div className="beardScroll">
        {data.beards.map((beard) => (
          <Bearded {...beard} key={beard.id} />
        ))}
      </div>
      <div className="beardNotTop">
        <div title="These bearded developers don't quite fulfill all four requirements, but they are here nonetheless!">
          {data.almostBeards.length} Close Beards! <small>(missing one of the big 4)</small>
        </div>
      </div>
      <div className="notQuiteBeardScroll">
        {data.almostBeards.map((beard) => (
          <AlmostBearded {...beard} key={beard.id} />
        ))}
      </div>
    </Layout>
  );
}
