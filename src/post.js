import { useEffect } from "react"


const Post =  (props) => {

    useEffect( () => {
        console.log('Post created')

        return () => {
            console.log('Component exit ')
        }
    },[])

    return (
        <div key={props.i}>
        <div>Name:{props.item.name}</div>
        <div>Body:{props.item.name}</div>
    </div>
    )
}

export default Post