import React from 'react'

/*
    Props are arguments passed into react components.
    Props are passed to components via HTML attributes.
    props stands for properties.
*/

// React Component for Card, which can be used multiple times by using "Card"
// function Card({prop_name1, prop_name2="default_value", ..}) {
// If prop_name2 value is not passed to component then its default value will be used which is "default_value" in this case
function Card(props) {
    console.log(props);
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" width="384" height="512"/>
            <div className="pt-6 text-center space-y-4">
            <blockquote>
                <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                {props.name}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                {props.role}, {props.location}
                </div>
            </figcaption>
            </div>
        </figure>
    )
}

export default Card;
