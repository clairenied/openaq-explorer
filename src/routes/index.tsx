import { Map } from '~/components/Map';
import { getUser } from '~/db';
import { LocationDetailCard } from '~/components/Cards/LocationDetailCard';
import { FlipCard } from '~/components/Cards/FlipCard';
import { Header } from '~/components/Header';


import '~/assets/scss/routes/index.scss';

export const route = {
  load: () => getUser(),
};

export default function Home() {
  return (
    <>
    <Header />
      <main>
        <Map />
        <FlipCard />
        <LocationDetailCard />
      </main>
    </>
  );
}
