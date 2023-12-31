import content from "./data";

const Card = () => {
  return (
    <section className="grid grid-cols-3 gap-6 p-5">
      {content.map((item, index) => (
        <div className="bg-teal rounded-lg" key={index}>
          <div className="underline pl-5 pt-2 text-seasalt">tags</div>

          <img className="py-1 px-5 h-[370px]" src={item.image} alt="" />
          <div className="px-5 pb-5">
            <h2 className="text-lavender font-bold pb-2">{item.title}</h2>
            {/* <div>{item.paragraph}</div> */}

            <span className="drop-shadow bg-munsell text-seasalt p-1 rounded-md mt-5">
              {item.categories}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
