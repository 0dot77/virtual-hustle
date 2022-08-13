import placesdb from '../db/placesdb';
import Layout from '../components/Layout';
import Places from '../components/Places';

export default function Waterpark() {
  return (
    <Layout>
      <Places
        bgImg={placesdb.waterpark.img}
        moveToUrl={'/'}
        placeWords={placesdb.waterpark.word}
        placeWordsPos={placesdb.waterpark.pos}
      />
    </Layout>
  );
}
