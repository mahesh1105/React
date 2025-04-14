import { useEffect, useState } from 'react'
import './App.css'

const ProgressBar = ({progress}) => {

    // Creating the local variable to hold the progress state or value
    const [animatedProgress, setAnimatedProgress] = useState(0);

    // This part of code is added to set the animatedProgress value to progress after given time
    // until then wait for it and also as soon as progress value changes re-render the page
    useEffect(() => {
        setTimeout(() => {
            setAnimatedProgress(progress);
        }, 200)
    }, [progress])

    return (
        <div className='outer'>
            <div 
                className='inner' 
                style={{
                    width: `${animatedProgress}%`,
                    color: animatedProgress<5 ? 'black' : 'white'
                }}
                role='progressbar'
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {progress}%
            </div>
        </div>
    )
}

function App() {

    const bars = [1, 3, 5, 10, 30, 50, 70, 90, 100]

    return (
        <>
            <div className='App'>
                <h1 className='bg-black text-white text-center text-3xl rounded mt-5 py-2'>Progress Bar</h1>

                {/* <ProgressBar progress={80} /> */}
                {bars.map((value) => (
                    <ProgressBar key={value} progress={value}/>
                ))}
            </div>
        </>
    )
}

export default App

/*
    When react calls the component then it passes props as an object
    
    Ex: For this component to render,
    <ProgressBar progress={70} />

    Internally react will call this component as:
    ProgressBar({ progress: 70 }) // React passes an object

    So, writing the below line will treat it as variable not as the object
    const ProgressBar = (progress) => { ... }

    To treat it as the object, we need to destructure the object
    const ProgressBar = ({ progress }) => { ... }
*/

/*
    style={{ width: `${progress}%` }}

    The first {} → Says “Hey JSX, this is JavaScript!”
    The second {} → Says “This is a JavaScript object.”

    ** HTML Style (Regular Way): style is a string
    <div style="width: 70%;"></div>

    ** JSX Needs JavaScript Objects
    <div style={{ width: "70%" }}></div>

    - First Curly Braces tell, Inner Content will be JS Code
    - Second Curly Braces is used for the object, as JSX needs JS objects

    ** Making it Dynamic (progress variable)
    <div style={{ width: `${progress}%` }}></div>
*/

/*
    Below attributes inside the inner div is added for the accesibility purpose
    role='progressbar'
    aria-valuenow={progress}
    aria-valuemin="0"
    aria-valuemax="100"

    Means, If any user or developer see the code then they can get the idea about what is happening in code,
    like - what is this inner div for, current value, min and max value
*/