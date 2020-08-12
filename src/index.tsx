import React, { Fragment, useCallback, useRef } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import {Example} from './component/Example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Cindex from "./component/capture/Cindex";
import styled, { createGlobalStyle } from 'styled-components'
import { useCapture } from '../src/component/capturetwo/index'
import {CaptureTwo} from '../src/component/capturetwo/CaptureTwo'



const Wrapper = styled.div`
  text-align: center;
`

const Headline = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
`

const Subline = styled.p`
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
`

const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto ;
  background-color: red;
  
`

const Button = styled.input.attrs({ type: 'button' })``


function App() {
    const { snap } = useCapture()
    const element = useRef(null)
    const onClick = useCallback(() => {
        snap(element, { file: 'download.png' })
    }, [snap, element])

    return (
        <div className="App">
            <Fragment>
                <Wrapper>
                    <Headline>캡쳐</Headline>
                    <ComponentWrapper ref={element}>
                        <CaptureTwo/>
                    </ComponentWrapper>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    <Button onClick={onClick} value="Download" />
                </Wrapper>
            </Fragment>
   {/*         <DndProvider backend={HTML5Backend}>

                <Cindex/>
                <br/>
                <br/>
                <Example />

            </DndProvider>*/}
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)