import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ToDoItem(props) {
  return (
    <div className="flex items-center justify-center m-2 sm:m-4">
      <div
        className="flex items-center hover:scale-105 transition-transform duration-200 justify-between w-full
        max-w-xs sm:max-w-xl md:max-w-2xl bg-gradient-to-r from-amber-400 via-amber-200 to-amber-100
        rounded-xl shadow-lg px-2 py-2 sm:px-4 sm:py-4"
      >
        {/* Checkbox */}
        <div className="flex items-center justify-center mr-2 sm:mr-4">
          <input
            type="checkbox"
            checked={props.completed}
            onChange={props.toggleComplete}
            className="w-5 h-5 sm:w-6 sm:h-6 accent-amber-500 border-2 border-amber-700 rounded-lg shadow focus:ring-2 focus:ring-amber-400 transition-all duration-200 cursor-pointer"
          />
        </div>
        {/* Task Text */}
        <div className="flex-1 max-w-full">
          <span
            className={`block break-words text-base sm:text-lg font-mono font-semibold transition-all duration-200 ${
              props.completed ? "line-through text-gray-400" : "text-gray-900"
            }`}
          >
            {props.text}
          </span>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3 ml-2 sm:ml-4">
          <button
            className="flex items-center justify-center rounded-lg bg-white border border-amber-400 text-amber-600 text-lg sm:text-xl p-1 sm:p-2 shadow hover:bg-amber-100 hover:text-amber-800 transition-all duration-150"
            type="button"
            title="Edit"
            onClick={props.handleEdit}
          >
            <MdEdit />
          </button>
          <button
            className="flex items-center justify-center rounded-lg bg-white border border-red-400 text-red-600 text-lg sm:text-xl p-1 sm:p-2 shadow hover:bg-red-100 hover:text-red-800 transition-all duration-150"
            type="button"
            title="Delete"
            onClick={props.handleDelete}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
