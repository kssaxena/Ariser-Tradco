import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { LampContainer } from "./ui/lamp";
import { testimonials } from "../constants/AllConstants";
import { TracingBeam } from "./ui/tracing-beam";
import ListOfFeatures from "./ListOfFeatures";

const About = () => {
  
  return (
    <div id="about" className={`text-white bg-[#020617]`}>
      <TracingBeam>
        <LampContainer className={`flex flex-col justify-evenly items-center`}>
          <h1
            className={`text-center font-light text-5xl w-3/4 uppercase mt-10`}
          >
            Invest in peace of mind
          </h1>
          <h1 className={`text-center font-light text-5xl w-full uppercase`}>
            lasting durability with steel door.
          </h1>
        </LampContainer>
        <section className={`bg-[#020617] flex flex-col `}>
          <h1 className={`text-xl font-light`}>Customer Reviews</h1>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </section>
        <section></section>
      </TracingBeam>
      <ListOfFeatures />
    </div>
  );
};

export default About;
