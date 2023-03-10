import classes from "./results-title.module.css";
import Button from "./../ui/Button";
import React from "react";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button route="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
