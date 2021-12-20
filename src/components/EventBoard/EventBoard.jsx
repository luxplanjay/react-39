import { Event } from 'components/Event/Event';

export const EventBoard = ({ events }) => {
  return (
    <div>
      {events.map(event => (
        <Event key={event.name} event={event} />
      ))}
    </div>
  );
};
