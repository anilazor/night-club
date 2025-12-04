import { HeadingMain } from "../../typography";
import Image from "next/image";
import Overlay from "../../../assets/bg/slider_bg_overlay.png";
import EventCard from "./EventCard";
import Slider from "./Slider";

export default function events() {
  return (
    <section className="h-100 col-(--full-col) grid grid-cols-subgrid">
      <div className="col-(--full-col) row-span-3 row-start-1 ">
        <div className=" opacity-40 row-span-3 row-start-1 h-full z-0">
          <Image
            src={Overlay}
            alt="Background overlay"
            width={500}
            height={500}
            className="h-full w-auto object-cover"
          />
        </div>
      </div>
      <div className="col-(--content-col) row-start-1 row-span-2 z-10">
        <div className="h-50 flex  items-center ">
          <HeadingMain
            color="white"
            text="events of the month"
          />
        </div>
        <div className=" md:flex gap-5">
          <EventCard imgUrl="event-thumb5.jpg" />
          <div className="hidden md:block">
            <EventCard imgUrl="event-thumb5.jpg" />
          </div>
        </div>
        <div className="">
          <Slider />
          <div className="h-5 my-5 md:h-10 md:my-10 flex gap-3 justify-center"></div>
        </div>
      </div>
    </section>
  );
}
