import * as React from 'react';
import quotes from './Quotes';
import FancyText from "./FancyText";

export default function InspirationGenerator({children}){
    const [index, setIndex]=React.useState(0);
    const quote = quotes[index];
    const next = () => setIndex((index + 1) % quote.length);

    return (
        <>
            <p>Your Inspirational Quote is: </p>
            <FancyText text={quote} />
            <button onClick={next}>Next Quote</button>
            {children} {/* Optional children can be passed to the component */}
        </>
    );
}