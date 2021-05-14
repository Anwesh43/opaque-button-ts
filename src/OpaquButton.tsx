import React from 'react'
import {useStyle} from './hooks'

interface OpaqueButtonProps {
    w  : number, 
    h : number, 
    scale : number, 
    onClick : Function 
}

const OpaqueButton = (props : OpaqueButtonProps) => {
    const {parentStyle, squareStyle, squareOpaqueStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {parentStyle()} onClick = {() =>  props.onClick()}>
            <div style = {squareStyle()}></div>
            <div style = {squareOpaqueStyle()}></div>
        </div>
    )
}