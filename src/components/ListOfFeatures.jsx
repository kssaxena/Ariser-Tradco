import React from "react";
import { BicepsFlexed, BugOff, FireExtinguisher, ShieldCheck, Sprout, UmbrellaOff } from "lucide-react";
import FeaturesCard from "./FeaturesCard";

const ListOfFeatures = () => {
  return (
    <section
      className={`flex flex-col justify-center items-center p-36 bg-gradient-to-b from-[#020617] to-[#18181B]`}
    >
      <h1 className={`text-4xl font-light text-center uppercase`}>
        Few Highlighting Features of our product
      </h1>
      <div className={`flex p-10  w-full justify-center items-center`}>
        <FeaturesCard
          icon={<BicepsFlexed className={`h-20 w-20`} />}
          title={"Strength"}
          description={
            "Steel doors stand firm. Built to withstand force, they offer superior strength compared to other materials, making them a reliable barrier against break-ins and unwanted entry."
          }
        />
        <FeaturesCard
          icon={<ShieldCheck className={`h-20 w-20`} />}
          title={"Safe & Secure"}
          description={
            "They're built to resist forceful entry, offering peace of mind and a physical barrier during emergencies. "
          }
        />
        <FeaturesCard
          icon={<Sprout className={`h-20 w-20`} />}
          title={"Eco Friendly"}
          description={
            "Choose a steel door and rest assured you're getting long-lasting security without sacrificing the environment. Reducing reliance on virgin materials and minimizing environmental impact."
          }
        />
      </div>
      <div className={`flex p-4 w-full justify-center items-center`}>
        <FeaturesCard
          icon={<BugOff className={`h-20 w-20`} />}
          title={"Termite Free"}
          description={
            "Unlike wood, steel doors are completely immune to termite damage. Offering lasting security and peace of mind for your home."
          }
        />
        <FeaturesCard
          icon={<FireExtinguisher className={`h-20 w-20`} />}
          title={"Fire Resistant"}
          description={
            "Steel doors aren't just tough, they're fire-resistant.  They act as a crucial shield, holding back flames and heat for extended periods, giving precious time for escape and saving lives."
          }
        />
        <FeaturesCard
          icon={<UmbrellaOff className={`h-20 w-20`} />}
          title={"Weather Proof"}
          description={
            "Unlike wood, which can warp, crack, or rot in harsh weather, steel doors stand strong. Their resilient surface endures rain, wind, and sun, providing a reliable barrier that protects your home for years to come."
          }
        />
      </div>
    </section>
  );
};

export default ListOfFeatures;