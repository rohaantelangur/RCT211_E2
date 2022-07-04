import React from "react";
import {useSelector} from "react-redux";
import Filter from "../Components/Filter";
import ShoeCart from "../Components/ShoeCard"

const Shoes = () => {
  const Shoes = useSelector((store)=>store.Appreducer.shoes)
  console.log(Shoes);
  return (
    <div className="Shoes">
      <Filter />
      <div className="shoesgrid">
        {Shoes?.map((item)=>{return(
          <ShoeCart key={item.id} item={item}/>
        )})}
        {/* Map through the shoes list here using ShoeCard Component */}
      </div>
    </div>
  );
};

export default Shoes;
