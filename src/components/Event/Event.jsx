import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from 'helpers';

export const Event = ({ event: { name, location, speaker, time, type } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <FaMapMarkerAlt />
        {location}
      </p>
      <p>
        <FaUserAlt />
        {speaker}
      </p>
      <p>
        <FaCalendarAlt />
        {formatEventStart(time.start)}
      </p>
      <p>
        <FaClock />
        {formatEventDuration(time.start, time.end)}
      </p>
      <span>{type}</span>
    </div>
  );
};
