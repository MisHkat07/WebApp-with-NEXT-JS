import Link from 'next/link'
import React from 'react'
import EventList from '../components/events/Events-List';
import { getFeaturedEvents } from './../database/data';


export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}
