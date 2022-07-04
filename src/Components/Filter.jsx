import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import { FeactData } from "../Redux/AppReducer/action";


const Filter = () => {
  const dispatch = useDispatch()
  const [SearchParams, setSearchParams] = useSearchParams();
  const urlCategory = SearchParams.getAll("category");
  const [category, setcategory] = useState(urlCategory || []);

  const handleCheckBox = (e) => {
    const option = e.target.value;
    // If the option already presenrt rtemove it, else add it
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setcategory(newCategory);
  };

  useEffect(() => {
    if(category){
        setSearchParams({ category });
      dispatch(FeactData({params:{category}}))

    }
  }, [category, setSearchParams, dispatch]);

  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  return (
    <div className="filter">
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" onChange={handleCheckBox}  defaultChecked={category.includes("Sneakers")}/>
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" onChange={handleCheckBox}  defaultChecked={category.includes("Loafers")}/>
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" onChange={handleCheckBox}  defaultChecked={category.includes("Canvas")}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" onChange={handleCheckBox}  defaultChecked={category.includes("Boots")}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
