import React from "react";

const List = props => {
  return props.list.map((val, i) => <h1 key={i}>{val.name}</h1>);
  // <Card person={val} key={i}/>
};
export default List;
