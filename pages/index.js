import Head from "next/head";
import Layout from "../components/layout";
import Bearded from "../components/bearded";

export async function getStaticProps() {
  const beards = [
    {
      id: 1,
      name: "Bill",
      avatar: "/images/avatar-wr-beard.jpg",
      image: "/images/bearded.jpg",
      isBeardedDev: true,
    },
    {
      id: 3,
      name: "David",
      avatar: "/images/avatar-dp-beard.jpg",
      image: "/images/dp-beard.jpg",
      isBeardedDev: false,
    },
  ];

  return {
    props: {
      beards: beards,
    },
  };
}

export default function Home({ beards }) {
  const bearded = beards.filter((b) => b.isBeardedDev == true);
  const almostBearded = beards.filter((b) => b.isBeardedDev == false);
  return (
    <Layout>
      <div className="beardTop">
        <div title="These bearded developers completely fulfill all four requirements!">
          {bearded.length} Pure Beards!
        </div>
      </div>
      <div className="beardScroll">
        {bearded.map((beard) => (
          <Bearded {...beard} key={beard.id} />
        ))}
      </div>
      <div className="beardNotTop">
        <div title="These bearded developers don't quite fulfill all four requirements, but they are here nonetheless!">
          {almostBearded.length} Close Beards! <small>(missing one of the big 4)</small>
        </div>
      </div>
      <div className="notQuiteBeardScroll">
        {almostBearded.map((beard) => (
          <Bearded {...beard} key={beard.id} />
        ))}
      </div>
    </Layout>
  );
}
