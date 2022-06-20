import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import getAllTodos from '../services/actions/todosActions';

const Todos = () => {
    const {isLoading, todos, error} = useSelector(state => state)
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(getAllTodos());
    // },[])

    useEffect(() => {
        dispatch(getAllTodos);
    }, []);

    console.log(todos)
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Todos App</h1>
            { isLoading && <h1>Loading....</h1> }
            { error && <h1>{error.message}</h1> }
            <section className='todos__wrapper'>
                {
                    todos.map(todo => {
                        return <article key={todo.key}>
                            <h6>{todo.id}</h6>
                            <h3>{todo.title}</h3>
                            {todo.completed ? <h4 style={{color:"green"}}>Completed</h4> : <h4 style={{color:"orange"}}>Pending</h4>}
                        </article>
                    })
                }
            </section>

        </div>
    );
};

export default Todos;