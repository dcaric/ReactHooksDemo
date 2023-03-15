import { useState, useEffect } from "react";
import Post from './post'

const App = ({initialCount}) => {

    let [state, setState] = useState({
        count:initialCount,
        user:"Francis"
    })

    let [post, setPost] = useState([
        {
            name: "Super awsome hooks",
            body: "Everything you need for your hooks"
        }
    ])

    const hey = 'Hello'

    const alertSomething = () => alert('Something')


    /*
    useEffect( () => {
        console.log(state)
    },[state])

    useEffect( () => {
        console.log(post)
    },[post])
    

    useEffect( () => {
        console.log('Mounted')
    },[])
    */

    // console.log(count)

    // const addOne = () => {
    //     setCount(count + 1)
    // }

    const restOne = () => {
        setState(prevState => {
             return {...prevState, count: prevState.count - 1}
         })
     }

     const addOnePost = () => {
        let newPost = {
            name: "Sugar is bad",
            body: "Coffee is good"
        }

        setPost([
            ...post,
            newPost
        ])
     }

     const removePost = () => {
        setPost([])
     }

    return(
        <>
            <h1>User: {state.user}</h1>
            <h3>Count: {state.count}</h3>
            <button onClick={() => setState({ ...state, count:  state.count + 1})}>Add one +1</button>
            <button onClick={restOne}>Rest one -1</button>
            <button onClick={() => setState({
                ...state, count:initialCount
            })}>RESET</button>

            <hr/>
            {post.map( (item,i)=> (
                <Post item={item} key={i}/>
            ))}
            <button onClick={addOnePost}>Add on more</button>
            <button onClick={removePost}>Remove post</button>


        </>
    )
}

export default App;