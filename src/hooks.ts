import {useState, useEffect, CSSProperties} from 'react'

const delay : number = 20 
const scGap : number = 0.02 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            return 0                        
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
            return {
                w, h
            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const x = w / 2 
    const y = h / 2
    const size : number = Math.min(w, h) / 12  
    return {
        parentStyle() : CSSProperties {
            return {
                left : `${x}px`,
                top: `${y}px`,
                position
            }
        },

        squareStyle() : CSSProperties {
            return {
                position, 
                left : `${-size / 2}px`,
                top : `${-size / 2}px`,
                background: 'indigo',
                width : `${size}px`,
                height: `${size}px`,
            }
        },

        squareOpaqueStyle() : CSSProperties{
            return {
                position, 
                left : `${-size / 2}px`,
                top : `${-size / 2}px`,
                background: 'indigo',
                width : `${size * scale}px`,
                height: `${size}px`,
                opacity: 0.3
            }
        }
    }
}