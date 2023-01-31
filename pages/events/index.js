import React from "react";
import { getAllEvents } from "../../database/data";
import EventList from "./../../components/events/events-list";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const Events = () => {
  const events = getAllEvents();
  const router = useRouter();

  const searchHandler = (year, month) => {
    const fullUrl = `events/${year}/${month}`;
    router.push(fullUrl);
  };

  return (
    <>
      <EventSearch onSearch={searchHandler} />
      <EventList items={events} />
    </>
  );
};
export default Events;
