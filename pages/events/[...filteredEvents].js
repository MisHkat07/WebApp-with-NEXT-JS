import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "./../../database/data";
import EventList from "../../components/events/events-list";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "./../../components/ui/error-alert";

const FilteredEvents = () => {
  const router = useRouter();

  const filterdItems = router.query.filteredEvents;

  if (!filterdItems) {
    return <h3 className="center">Loading...</h3>;
  }

  const filteredYear = +filterdItems[0];
  const filteredMonth = +filterdItems[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <ErrorAlert>Invalid Filtered! Adjust your values!</ErrorAlert>;
  }

  const filteredData = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });
  console.log("🎯filteredData", filteredData);

  if (!filteredData || filteredData.length === 0) {
    return <ErrorAlert>No Event Found!</ErrorAlert>;
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredData} />
    </>
  );
};
export default FilteredEvents;
