import React, { useState, useCallback } from 'react'
import {Container} from './Container'

export const Example: React.FC = () => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
    const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
        hideSourceOnDrag,
    ])

    return (
        <div>
            <Container hideSourceOnDrag={hideSourceOnDrag} />

        </div>
    )
}
