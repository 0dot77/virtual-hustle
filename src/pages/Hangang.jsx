import placesdb from '../db/placesdb';
import Places from '../components/Places';
import Layout from '../components/Layout';
import { useRecoilState } from 'recoil';
import { fufilled } from '../db/atom';
import { useEffect } from 'react';

export default function Hangang() {
  const [, setFufilled] = useRecoilState(fufilled);
  useEffect(() => {
    setFufilled(true);
  });
  return (
    <Layout>
      <Places
        bgImg={placesdb.hangang.img}
        moveToUrl={'/'}
        placeWords={placesdb.hangang.word}
        placeWordsPos={placesdb.hangang.pos}
      />
    </Layout>
  );
}
