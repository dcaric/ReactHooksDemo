import React, {Component, useRef} from 'react'

/*

old way with classes
class App extends Component {

    constructor(props){
        super(props)

        this.textInput = React.createRef()
    }

    treiggerHandler = () => {
        console.log(this.textInput.current.value)
    }

    render(){
        return (
        <>
            <h1>Form:</h1>
            <input type="text" ref={this.textInput}/>
            <button onClick={this.treiggerHandler}>
                Trigger
            </button>
        </>
        )
    }
}


export default App
*/

// new way with functional component


const App = () => {

    const textInput = useRef()

    const treiggerHandler = () => {
       console.log(textInput.current.value)
    }

    return (
    <>
        <h1>Form:</h1>
        <InputComponent ref={textInput}/>
        <button onClick={treiggerHandler}>
            Trigger
        </button>
    </>
    )
    
}

const InputComponent = React.forwardRef( (props,ref) => {
    return <input type="text" ref={ref}/>
})


export default App