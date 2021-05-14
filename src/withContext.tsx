import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const mainProps = {
            w, 
            h, 
            scale, 
            onClick 
        }
        return (
            <React.Fragment>
                <MainComponent {...mainProps}/>
            </React.Fragment>
        )
    }
}

export default withContext