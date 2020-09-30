import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, {useState, useEffect} from 'react'
import textbox from '../assets/textbox.png'
import pages from '../assets/order/order'

const TextRenderer = (props) => {
    const [text, setText] = useState(pages[0].text)

    const choices = pages[props.page].choices

    useEffect(() => {
        setText(pages[props.page].text)
    }, [props.page]);

    return (
        <MDBContainer style={{
            width: '1070px',
            position: 'absolute',
            bottom: '100px',
            padding: '0px'
        }}>
            <MDBRow>
                <MDBCol md='12' style={{
                    textAlign: 'center',
                }}>
                    <div style={{
                        backgroundImage: `url(${textbox})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '100px',
                        width: '100%'
                    }}>
                        <div style={{
                            paddingTop: '15px',
                            paddingBottom: '15px'
                        }}>
                            <span>{text}</span><br/>
                            {choices.a !== null ? <span className='hovers' onClick={()=>{props.choice(choices.a)}}>{choices.a.text}</span> : <span className='hovers' onClick={() => props.next()}>next</span>}<br/>
                            {choices.b !== null ? <span className='hovers' onClick={()=>{props.choice(choices.b)}}>{choices.b.text}</span> : <></>}
                        </div>
                        
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default TextRenderer