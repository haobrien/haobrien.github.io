import React from 'react'
import { useEffect } from 'react'
import './styles/Loader.css'

export default function Loader({ setIsLoading }) {

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    })

    return (
        <div className='loader'>
            <div className="ball ball-1"></div>
            <div className="ball ball-2"></div>
            <div className="ball ball-3"></div>
            <div className="ball ball-4"></div>
        </div>
    )
}
