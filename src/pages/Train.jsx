import Places from '../components/Places';
import placesdb from '../db/placesdb';
import Layout from '../components/Layout';

export default function Train() {
  return (
    <Layout>
      <Places
        bgImg={placesdb.train.img}
        moveToUrl={'/'}
        placeWords={placesdb.train.word}
        placeWordsPos={placesdb.train.pos}
      />
    </Layout>
  );
}
