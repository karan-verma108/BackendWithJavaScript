import axios from 'axios';
import { REACT_APP_API_URL } from '../api';

export const fetchJokes = async (setJokes) => {
  try {
    const data = await axios.get(REACT_APP_API_URL);
    setJokes(data);
  } catch (error) {
    console.log('error', error);
  }
};
