import React from 'react'

import './CaptureWto.css'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Example} from "../Example";

export const CaptureTwo = () => {
    return (
        <div className={"boxx"}>
            <DndProvider backend={HTML5Backend}>
                <br/>
                <br/>
                <Example />
            </DndProvider>
        </div>
    )
}