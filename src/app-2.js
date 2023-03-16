import {useState, useCallback} from 'react'
import Title from './components/title'
import Count from './components/count'
import CountBtn from './components/countBtn'
import Age from './components/age'
import AgeBtn from './components/ageBtn'

const App = () => {

    const [count, setCount] = useState(0)
    const [age, setAge] = useState(10)

    // with dependency set to [] it will not be callet each time count is updated
    // but if count is used it will be acalled only once whic is also not good
    // in order to useCallback to be executed each time count is chnaged use build in prev variable
    // prevCount in set function
    const incrementCount = useCallback( () => {
        setCount(prevCount => prevCount+1)
    },[])

    // same as for count
    const incrementAge = useCallback( () => {
        setAge(prevAge => prevAge+1)
    },[])

    return (
        <>
            <Title />
            <Count count={count}/>
            <CountBtn handleCount={incrementCount}/>
            <Age age={age}/>
            <AgeBtn handleAge={incrementAge}/>


        </>
    )
}

export default App