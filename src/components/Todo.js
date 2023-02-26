import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { addToAllTdodos, addToCompletedTodos, addToInProgressTodos, addToNewTodos } from '../features/todos/todosSlice';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { Draggable } from '@hello-pangea/dnd';

const Todo = () => {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const newTodos = useSelector(state => state.todos.newTodos);
    const inProgressTodos = useSelector(state => state.todos.inProgressTodos);
    const completedTodos = useSelector(state => state.todos.completedTodos);
    const allTdodos = useSelector(state => state.todos.allTdodos);

    const addTodoHandler = () => {
        if (todo.length <= 0) {
            toast.error("Please write your task");
            return;
        }
        dispatch(addToNewTodos([...newTodos,{
            id: newTodos.length === 0 ? 0 : (newTodos[newTodos.length - 1].id) + 1,
            value: todo
        }]));
    
        dispatch(addToAllTdodos({
            id: allTdodos.length === 0 ? 0 : (allTdodos[allTdodos.length - 1].id) + 1,
            value: todo
        }));

        setTodo("");
        toast.success("Task added successfully !");
    }

    const onDragEndHandler = (result) => {
        const { destination, source, draggableId } = result;
        console.log(destination, "destination");
        console.log(source, "source");
        // console.log(result, "result");
        if (destination && source) {

            if (source.droppableId === "newTodosList" && destination.droppableId === "completedTodosList") {

            }
            if (source.droppableId === "newTodosList" && destination.droppableId === "inProgressTodosList") {

                let sourceTodos = JSON.parse(JSON.stringify(newTodos));
                console.log(sourceTodos, "sourceTodos");
                let destinationTodos = JSON.parse(JSON.stringify(inProgressTodos));
                let add = sourceTodos[source.index];
                console.log(add, "add");
                sourceTodos.splice(source.index, 1);

                destinationTodos.splice(destination.index, 0, add);

                dispatch(addToInProgressTodos(destinationTodos));
                dispatch(addToNewTodos(sourceTodos));
                
    
            }
            if (source.droppableId === "inProgressTodosList" && destination.droppableId === "newTodosList") {
                 
                    let sourceTodos = JSON.parse(JSON.stringify(inProgressTodos));
                    console.log(sourceTodos, "sourceTodos");
                    let destinationTodos = JSON.parse(JSON.stringify(newTodos));
                    let add = sourceTodos[source.index];
                    console.log(add, "add");
                    sourceTodos.splice(source.index, 1);
    
                    destinationTodos.splice(destination.index, 0, add);
    
                    dispatch(addToInProgressTodos(sourceTodos));
                    dispatch(addToNewTodos(destinationTodos));
            }
            if (source.droppableId === "inProgressTodosList" && destination.droppableId === "completedTodosList") {
                let sourceTodos = JSON.parse(JSON.stringify(inProgressTodos));
                console.log(sourceTodos, "sourceTodos");
                let destinationTodos = JSON.parse(JSON.stringify(completedTodos));
                let add = sourceTodos[source.index];
                console.log(add, "add");
                sourceTodos.splice(source.index, 1);

                destinationTodos.splice(destination.index, 0, add);

                dispatch(addToInProgressTodos(sourceTodos));
                dispatch(addToCompletedTodos(destinationTodos));
            }
            if (source.droppableId === "completedTodosList" && destination.droppableId === "inProgressTodosList") {
                let sourceTodos = JSON.parse(JSON.stringify(completedTodos));
                console.log(sourceTodos, "sourceTodos");
                let destinationTodos = JSON.parse(JSON.stringify(inProgressTodos));
                let add = sourceTodos[source.index];
                console.log(add, "add");
                sourceTodos.splice(source.index, 1);

                destinationTodos.splice(destination.index, 0, add);

                dispatch(addToInProgressTodos(destinationTodos));
                dispatch(addToCompletedTodos(sourceTodos));
            }
        }

    }


    return (
        <DragDropContext onDragEnd={onDragEndHandler}>
            <div className='container'>
                <div className="row py-5 d-flex justify-content-center">
                    <div className="col-8">
                        <div className="">
                            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className="form-control" placeholder="write your task ... " />
                        </div>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger text-white primary-bg" onClick={addTodoHandler}>Add</button>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-4">
                        <div className='border border-secondary'>
                            <div className='text-white primary-bg text-center mb-0 py-2'>
                                <h6>To Do</h6>
                            </div>
                            <Droppable droppableId='newTodosList' >
                                {(provided) => (
                                    <div className='p-2' ref={provided.innerRef} {...provided.droppableProps}>
                                        {
                                            newTodos.map((todo, index) => (
                                                <Draggable draggableId={todo?.id.toString()+'newTodosList'} index={index} key={todo?.id+'newTodosListx'}>
                                                    {(provided) => (
                                                        <div className='py-2'  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                            <p className='secondary-bg text-dark text-center mb-0 p-1 border border-secondary'>{todo.value}</p>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='border border-secondary'>
                            <div className='text-white primary-bg text-center mb-0 py-2'>
                                <h6>In Progress</h6>
                            </div>
                            <Droppable droppableId='inProgressTodosList' >
                                {(provided) => (
                                    <div className='p-2' ref={provided.innerRef} {...provided.droppableProps}>
                                        {
                                            inProgressTodos.map((todo, index) => (
                                                <Draggable draggableId={todo?.id.toString()+'inProgressTodosList'} index={index} key={todo?.id+'inProgressTodosList'}>
                                                    {(provided) => (
                                                        <div className='py-2'  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                            <p className='secondary-bg text-dark text-center mb-0 p-1 border border-secondary'>{todo.value}</p>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='border border-secondary'>
                            <div className='text-white primary-bg text-center mb-0 py-2'>
                                <h6>Done</h6>
                            </div>
                            <Droppable droppableId='completedTodosList' >
                                {(provided) => (
                                    <div className='p-2' ref={provided.innerRef} {...provided.droppableProps}>
                                        {
                                            completedTodos.map((todo, index) => (
                                                <Draggable draggableId={todo?.id.toString()+'completedTodosList'} index={index} key={todo?.id+'completedTodosList'}>
                                                    {(provided) => (
                                                        <div className='py-2'  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                            <p className='secondary-bg text-dark text-center mb-0 p-1 border border-secondary'>{todo.value}</p>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </div>
                </div>
            </div>
        </DragDropContext>
    )
}
export default Todo