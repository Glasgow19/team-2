export default ({ events }) => {
  const eventList = events.map(event => {
    return (
      <li key={event.id}>
        <a href={event.url}>{event.name.text}</a>
      </li>
    );
  });

  return <ul>{eventList}</ul>;
};
