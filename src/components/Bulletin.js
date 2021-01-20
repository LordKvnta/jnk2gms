import React, { useState, useEffect } from 'react'

const Bulletin = () => {
    const [images, setImages] = useState([]); // declare state variable "images" to an empty array and "setImages" method to update images state


    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=19949260-676a0862aef8513f7c6f4b4f1&q=cards`
            )  // fetch to API by passing in query state
            .then((response) => response.json())
            .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL)) // use object destructuring to grab image urls from json response
            .then(setImages);
    }, []);


    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

    const slideRight = () => {
        setIndex((index + 1) % images.length); // increases index by 1
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
        setIndex(images.length - 1); // returns last index of images array if index is less than 0
        } else {
        setIndex(nextIndex);
        }
    };

    return (
        <>
            <div className='bulletin'>
                <button className='board-btn' onClick={slideLeft}>{"<<"}</button>
                <img className='boardImgs' src={images[index]} alt={index} />
                <button className='board-btn' onClick={slideRight}>{">>"}</button>
            </div>  
        </>
    )
}

export default Bulletin

