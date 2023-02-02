import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({endpoint}) => {
  const {title, items} = endpoint;
  return (
    <>
      <div className="">
        <Title title={title}/>
        <div>
          {items?.map((item,i)=>(
            <Item {...item} key={i}/>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Sales;
