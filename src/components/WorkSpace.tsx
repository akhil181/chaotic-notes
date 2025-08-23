import { useState } from "react";
import Dock from "./Dock";
import TextContainer from "./TextContainer";

export const WorkSpace = () => {
  // const [count, setCount] = useState(1);
  const [data, setData] = useState([
    { value: "", index: 1 },
    // { value: "bbb", index: 2 },
  ]);
  console.log(data, "dataaaa");
  

  const createNewNote = () => {
    // setCount(count + 1);
    setData((prevState) => [
      ...prevState,
      { value: "", index: data.length + 1},
    ]);
  };

  const deleteNode = (index) => {
    // setCount(count - 1);
    setData(prevState => prevState.filter(item => item.index !== index))

  };

  const onTextEnter = (value, index) => {
    return setData(
      data.map((item) => {
        return item.index === index ? { ...item, value: value } : item;
      })
    );
  };

  return (
    <>
      <Dock createNewNote={createNewNote} />

      {data.map((item, i) => (
        // <span style={{ margin: "10px" }}>
        <TextContainer
          key={i}
          item={item}
          onTextEnter={onTextEnter}
          deleteNode={deleteNode}
        />
        // </span>
      ))}
    </>
  );
};
