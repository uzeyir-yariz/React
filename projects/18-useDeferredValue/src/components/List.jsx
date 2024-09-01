import { useDeferredValue, useMemo } from "react";

const List = ({ inputValue }) => {
  const deferedValu = useDeferredValue(inputValue)
  const MyList = useMemo(() => {
    let arr = [];
    for (let index = 0; index < 5000; index++) {
      arr.push(<div key={index}>{deferedValu}</div>);
    }
    return arr;
  }, [deferedValu]);
  return MyList;
};

export default List;
