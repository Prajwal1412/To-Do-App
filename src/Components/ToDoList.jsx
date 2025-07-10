import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col p-2 w-[80%] h-[60vh] overflow-auto rounded-lg scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-gray-800">
        {props.list.length === 0 ? (
          <h3 className="text-center font-mono font-bold text-2xl text-amber-400 m-40 animate-bounce">
            “You don’t have to be great to start, but you have to start to be
            great.”
          </h3>
        ) : (
          props.list.map((item, index) => (
            <ToDoItem
              key={index}
              text={item.text}
              completed={item.completed}
              toggleComplete={() => props.toggleComplete(index)}
              handleDelete={() => props.handleDelete(index)}
              handleEdit={() => props.handleEdit(index)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ToDoList;
