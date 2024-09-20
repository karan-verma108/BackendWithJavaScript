import React from 'react';
import { PropsType } from '../../types';

export default function JokeItem({ item }: { item: PropsType }) {
  const { id, title, content } = item;
  return (
    <div>
      <p>Joke id : {id}</p>
      <p>Joke title : {title}</p>
      <p>Joke content : {content}</p>
    </div>
  );
}
