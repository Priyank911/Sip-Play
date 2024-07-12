import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-black"
          title="Upcoming events"
        />

        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            className="react-calendar"
          />
        </div>
      </div>
      
      <style jsx>{`
        .calendar-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        .react-calendar {
          border: 2px solid #37393A; /* Add theme color border */
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          perspective: 1000px;
          background-color: #37393A; /* Set background to theme color */
          color: #fff; /* Set text color to white for better contrast */
        }

        .react-calendar__tile {
          border: 1px solid #37393A; /* Add border to each date */
          background-color: #fff; /* Set date background to white */
          color: #37393A; /* Set date text to theme color */
          transform: rotateX(25deg);
          transition: transform 0.3s;
        }

        .react-calendar__tile:focus,
        .react-calendar__tile:hover {
          transform: rotateX(0deg);
          background-color: #e0e0e0;
        }

        .react-calendar__navigation button {
          color: #fff; /* Set navigation text to white */
        }

        .react-calendar__month-view__weekdays {
          background-color: #37393A; /* Set weekdays background to theme color */
          color: #fff; /* Set weekdays text to white */
        }

        .react-calendar__month-view__days__day--weekend {
          color: #fff; /* Set weekends text to white */
        }

        @media (max-width: 768px) {
          .react-calendar {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default Benefits;
