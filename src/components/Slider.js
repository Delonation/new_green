import React, { useRef } from "react"
import useSlider from "./UseSlider"

const Slider = ({ images }) => {
    const slideImage = useRef(null)
    const slideText = useRef(null)
    const { goToPreviousSlide, goToNextSlide } = useSlider(
        slideImage,
        slideText,
        images
    )

    return (

        <div className="slider" ref={slideImage}>
            <div className="slider--content">
                <button onClick={goToPreviousSlide} className="slider__btn-left">
                    ←
                </button>
                <div className="slider--feature">
                    <h1 className="feature--title">NEO GREEN</h1>
                    <p ref={slideText} className="feature--text"></p>
                </div>
                <button onClick={goToNextSlide} className="slider__btn-right">
                    →
                </button>
            </div>
        </div>
    )
}

export default Slider