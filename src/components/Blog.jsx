import React from "react";

const Blog = () => {
  const ArticleCard = ({ title, image, description, imageClassName }) => {
    return (
      <div className="lg:w-fit w-full flex flex-col justify-center items-end">
        <img src={image} className={`inset-shadow-xl ${imageClassName}`} />
        <h2 className="lg:text-2xl lf:font-bold my-2 lg:mx-10 lg:w-fit font-Cinzel tracking-tighter">
          _{title}
        </h2>
        <p className="text-gray-700 my-2 lg:mx-10 lg:w-fit font-Caveat">
          {description}
        </p>
      </div>
    );
  };

  return (
    <div id="blog" className="border-b-2 border-black lg:mx-20 mx-5">
      <div className="h-fit w-full lg:pt-24 lg:pb-20 pt-10">
        <h1
          className={`lg:text-6xl text-3xl font-Cinzel tracking-wide lg:px-20 px-5 lg:w-3/4 w-full`}
        >
          <span className="text-base uppercase tracking-widest">Blog</span>{" "}
          <br />
          check our recent <br />
          articles
        </h1>
        <div className="py-10 flex lg:flex-row flex-col justify-center items-start gap-10">
          <div className="lg:w-1/2 w-full flex justify-center items-start flex-col lg:px-10 px-5">
            <ArticleCard
              imageClassName={`lg:w-[60vh] w-full`}
              image={`https://ik.imagekit.io/jarvisai/Ariser%20Tradco/IMG-20250529-WA0024.jpg?updatedAt=1748629226355`}
              title={"Security or design, what's trending ?"}
              description={
                <h1>
                  Secure Elegance <br /> Unmatched craftsmanship Durability of
                  Steel Doors
                </h1>
              }
            />
            <h1 className="mt-5 text-justify font-Caveat text-2xl tracking-tight lg:flex hidden">
              Low maintenance requirements and long lifespan make them a
              cost-effective investment, while modern designs and finishes allow
              them to complement a wide range of architectural styles. Whether
              you're looking to enhance your home's curb appeal or reinforce its
              security, a high-quality steel door delivers both strength and
              sophistication.
            </h1>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col justify-center items-start lg:px-10 px-5">
            <h1 className="mb-5 text-justify font-Caveat text-2xl tracking-tight lg:flex hidden">
              Steel doors are an excellent choice for homeowners seeking a
              perfect balance of durability, security, and style. Built to
              withstand harsh weather conditions and resist forced entry, steel
              doors offer superior protection compared to traditional wood or
              fiberglass options.
            </h1>
            <ArticleCard
              imageClassName={`lg:w-[50vh] w-full`}
              image={`https://ik.imagekit.io/jarvisai/Ariser%20Tradco/ChatGPT%20Image%20May%2031,%202025,%2012_14_18%20AM.png?updatedAt=1748630682443`}
              title={"What door designs are Classic & secure ?"}
              description={
                <h1>
                  Choosing the Perfect Door for Your Home: <br /> A Guide to
                  Style, Security, and Functionality
                </h1>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
