import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-screen-2xl mx-auto mt-8">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-[23rem] h-full px-6 py-8 bg-[#37393A] border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4 text-white flex flex-col justify-between"
        >
          <div>
            <h4 className="text-lg font-semibold mb-4">{item.title}</h4>
            <p className="text-sm min-h-[4rem] mb-3 text-[#FFFFFF]">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="text-lg">$</div>
                  <div className="text-3xl font-bold leading-none ml-1 text-[#FFFFFF]">
                    {item.price}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <Button
            className="w-full"
            href={item.price ? "https://www.exploretock.com/sipnplay/" : ""}
            white={!!item.price}
          >
            {item.price ? "Reserve Now" : ""}
          </Button>

          <ul className="mt-6">
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-3 border-t border-n-6"
              >
                <img src={check} width={20} height={20} alt="Check" className="mr-2" />
                <p className="text-sm text-[#FFFFFF]">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
