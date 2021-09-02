
import {React, useState} from 'react';



function CounterUp() {
    const [counter, setcounter] = useState(0);
    return (
        <div>
            <p>
                {counter}
            </p>

            <button onClick={
                () => {

                    setcounter(counter+1)


                }
            }>increase</button>

            <button onClick={
                () => {

                    setcounter(counter-1)


                }
            }>decrese</button>
            
        </div>
    )
}

export default CounterUp; 
