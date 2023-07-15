import { React, useState } from 'react'

const App = () => {
    // let cnt = 1;
    // const updateCount = () => {
    //   cnt++;
    //   console.log(cnt);
    // }

    const [cnt, setCnt] = useState(1);
    const updateCount = () => {
        // We should update the value of a state manually as it will now inform react and value will not be changed
        // Also states are immutable
        // Always update a state by its function only
        // In setCnt we do not update the value of state we just tell react what should be the value of next state.
        console.log(cnt);
        setCnt(cnt + 1);
    }

    return (
        <div>
            <h1>This is my App</h1>
            Counter: {cnt}
            <button onClick={updateCount}>update Count</button>
        </div>
    )
}

export default App
