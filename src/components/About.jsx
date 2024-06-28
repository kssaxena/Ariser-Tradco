import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { LampContainer } from "./ui/lamp";
import Button from "./ui/Button";
import { testimonials } from "../constants/AllConstants";
import { TracingBeam } from "./ui/tracing-beam";

const About = () => {
  
  return (
    <div className={`text-white bg-[#020617]`}>
      <TracingBeam>
        <LampContainer>
          <h1
            className={`text-center font-light text-5xl w-3/4 uppercase mt-10`}
          >
            Invest in peace of mind 
          </h1>
          <h1
            className={`text-center font-light text-5xl w-full uppercase`}
          >
            lasting durability with steel door.
          </h1>
        <Button title={"Book Now"}/>
        </LampContainer>
        <section className={`bg-[#020617]`}>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </section>
      </TracingBeam>
    </div>
  );
};

export default About;
