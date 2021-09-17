import React from 'react'
import { useState, useEffect } from 'react'
import './styles/Loading.css'

export default function Loading() {
    const [isHidden, setIsHidden] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setIsHidden(true)
        }, 2000)
    })

    return (
        <div class={isHidden ? 'loader hidden' : 'loader'}>
            <div class="ball ball-1"></div>
            <div class="ball ball-2"></div>
            <div class="ball ball-3"></div>
            <div class="ball ball-4"></div>
        </div>
    )
}
