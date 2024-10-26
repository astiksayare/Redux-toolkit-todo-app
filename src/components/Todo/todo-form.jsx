
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slice/todoSlice";

const TodoForm = () => {

    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(input.length > 2){
            dispatch(addTodo(input));
        }else 
        {
            alert("Enter the valid todo...")
        }
        setInput('');
    }

    return (
        <>
        <form onSubmit={addTodoHandler}>
            <input 
            type="text"
             value={input}
             onChange={e => setInput(e.target.value.trimStart())}
             className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             placeholder="Enter your todo..."
            />

            {' '}
            <button 
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
        </form>
        </>
    )
}

export default TodoForm;