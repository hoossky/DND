import React, { useState } from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { Box } from './Box'
import update from 'immutability-helper'
import { DragItem } from './interfaces'
import ex from '../img/ex.jpg'
import * as Logo from '../img/visit.png'

declare module "*.png" {
    const value: any;
}

const styles: React.CSSProperties = {
    width: 1000,
    height: 700,
    border: '1px solid black',
    position: 'relative',
}

export interface ContainerProps {
    hideSourceOnDrag: boolean
}

export interface ContainerState {
    boxes: { [key: string]: { top: number; left: number; title: string } }
}

export const Container: React.FC<ContainerProps> = ({ hideSourceOnDrag }) => {
    const [boxes, setBoxes] = useState<{
        [key: string]: {
            top: number
            left: number
            title: string

        }
    }>({
        a: { top: 20, left: 80, title: '침대' },
        b: { top: 180, left: 20, title: '냉장고'},
        c: { top: 280, left: 30, title: '식탁'},
        d: { top: 80, left: 120, title: '쇼파'}
    })

    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item: DragItem, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
            const left = Math.round(item.left + delta.x)
            const top = Math.round(item.top + delta.y)
            moveBox(item.id, left, top)
            return undefined
        },
    })

    const moveBox = (id: string, left: number, top: number) => {
        setBoxes(
            update(boxes, {
                [id]: {
                    $merge: { left, top },
                },
            }),
        )
    }
    return (
        <div ref={drop} style={styles}>
            {Object.keys(boxes).map((key) => {
                const { left, top, title } = boxes[key]
                return (
                    <Box
                        key={key}
                        id={key}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}
                    >
                        {title}
                    </Box>
                )
            })}
            <img src={ex}/>
        </div>
    )
}
