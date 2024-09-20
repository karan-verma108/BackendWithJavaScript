import { useEffect, useState } from 'react';
import { fetchJokes } from '../utils/helpers';
import JokeItem from './components/JokeItem';

export default function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes(setJokes);
  }, []);

  return (
    <div>
      <h1>Total jokes : {jokes?.data?.length}</h1>

      {jokes.data?.length > 0
        ? jokes?.data?.map((item) => {
            return <JokeItem key={item.title} item={item} />;
          })
        : 'No data found'}
    </div>
  );
}
