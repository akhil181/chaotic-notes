import Textarea from "./TextArea";

const TextContainer = ({ item, deleteNode , onTextEnter}) => {

  
  return (
    <>
      <Textarea item={item} onTextEnter={onTextEnter}/>
      <div onClick={() => deleteNode(item.index)}>delete</div>
    </>
  );
};

export default TextContainer;
