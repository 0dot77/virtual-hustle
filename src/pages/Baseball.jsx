import placesdb from '../db/placesdb';
import Layout from '../components/Layout';
import Places from '../components/Places';

export default function Baseball() {
  return (
    <Layout>
      <Places
        bgImg={placesdb.baseball.img}
        moveToUrl={'/'}
        nextPlaceImg={placesdb.waterpark.img}
        placeWords={placesdb.baseball.word}
        placeWordsPos={placesdb.baseball.pos}
      />
    </Layout>
  );
}
