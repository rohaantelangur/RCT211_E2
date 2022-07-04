import React from "react";
import { useNavigate } from "react-router-dom";

const ShoeCard = ({item}) => {
  const navigate = useNavigate()
  return (
    <div data-cy={`shoe-card-wrapper-${item.id}`} onClick={()=>{navigate(`/shoes/${item.id}`)}}>
      <div>
        <img data-cy="shoe-card-image" src={item.image} alt="" style={{width:'100%',height:'50vh'}}/>
      </div>
      <div>
        <div data-cy="shoe-name">{item.name}</div>
        <div data-cy="shoe-category">{item.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
