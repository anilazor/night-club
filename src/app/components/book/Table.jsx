"use client";
import Image from "next/image";
import { Subheading } from "../typography";

const Table = ({ number, image, selectedTable, setSelectedTable, taken }) => {
  const imgMap = {
    table1: "/assets/table/table_1.png",
    table2: "/assets/table/table_2.png",
    table3: "/assets/table/table_3.png",
  };
  const imgSrc = imgMap[image];
  return (
    <div className="grid grid-cols-subgrid grid-rows-1 group transition-colors duration-200" onClick={() => !taken && setSelectedTable(number)}>
      <Image src={imgSrc} alt={number} width={200} height={200} className={`col-1 row-1 grid-cols-subgrid self-stretch object-cover w-full h-auto ${taken ? "opacity-50" : ""}`} />
      <div className={`col-1 row-1 flex items-center justify-center  transition-opacity duration-200 ${selectedTable === number ? "text-accent" : ""}${taken ? "text-gray-400" : " cursor-pointer group-hover:text-accent"}`}>
        <Subheading text={number} />
      </div>
    </div>
  );
};

export default Table;
