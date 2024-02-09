import "./CustomSlider.css";
import React, { useCallback, useEffect, useState, useRef } from "react";

function CustomSlider(props) {
    const [position, setPosition] = useState(
        Math.round(props.max - props.min / 2)
    );
    const [percentage, setPercentage] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const handleRef = useRef(null);

    const handleDrag = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            var x = e.clientX ?? e.touches[0].clientX;

            const offset = x - sliderRef.current.getBoundingClientRect().left;

            var localPercentage = (offset / sliderRef.current.clientWidth) * 100;

            if (localPercentage < 0) {
                setPosition(props.min);
                handleRef.current.style.transform = `translateY(-50%) translateX(calc(00cqw - 25px)`;
                localPercentage = 0;
                setPercentage(localPercentage);
                return;
            }

            
        }
    )

}