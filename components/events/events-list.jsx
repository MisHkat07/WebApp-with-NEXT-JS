import React from "react";
import EventItem from "./Event-Item";
import classes from "./Event-List.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} data={event} />
      ))}
    </ul>
  );
};
export default EventList;
