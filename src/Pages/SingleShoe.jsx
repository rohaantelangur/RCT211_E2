import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { FeactData } from "../Redux/AppReducer/action";

const SingleShoe = () => {
  const {id} = useParams()
  const Shoes = useSelector((store)=>store.Appreducer.shoes)
  const dispatch = useDispatch()
  const [curret, setcurret] = useState({})
  console.log(id,Shoes,curret)
  
  
  useEffect(() => {
    if(Shoes?.length===0){
      dispatch(FeactData())
    }
  }, [Shoes?.length, dispatch])

  useEffect(() => {
    if(id){
      const temp = Shoes?.find((Shoes)=>Shoes.id===Number(id))
      temp && setcurret(temp)
    }
  }, [Shoes, id])
  
  return (
    <div style={{textAlign:"center"}}>
      <h2>{curret?.name}</h2>
      <div>
        <img src={curret?.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{curret?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
