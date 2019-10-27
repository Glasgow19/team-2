export default ({ events }) => {
  const eventList = events.map(event => {
    return (
      <li key={event.id}>
        <a href={event.url}>{event.name.text}</a>
        <p className="eventDate">{event.start.local}</p>
      </li>
    );
  });

  return (
    <>
      <h2 className="subHeading">Events Coming Up</h2>
      <ul className="events">{eventList}</ul>
    </>
  );
};
