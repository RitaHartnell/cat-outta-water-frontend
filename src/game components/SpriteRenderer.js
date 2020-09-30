import { MDBRow, MDBCol } from 'mdbreact';
import React, {useState, useEffect} from 'react'
import pages from '../assets/order/order'
import LayeredImage from './LayeredImage'



const SpriteRenderer = (props) => {
    const [spriteL, setSpriteLeft] = useState(pages[0].spriteLeft);
    const [spriteC, setSpriteCenter] = useState(pages[0].spriteCenter);
    const [spriteR, setSpriteRight] = useState(pages[0].spriteRight);

    function useSprite(pageID) {
        useEffect(()=>{
            setSpriteLeft(pages[pageID].spriteLeft)
            setSpriteCenter(pages[pageID].spriteCenter)
            setSpriteRight(pages[pageID].spriteRight)
        }, [pageID])
    }

    useSprite(props.page)

    return (
        <MDBRow bottom style={{
            width: '99%',
            position: 'absolute',
            bottom: '100px',
        }}>
            <MDBCol className='no-black'>
                <LayeredImage
                    aspectRatio={spriteL.eyes !== '' ? (16/25) : (16/15)} 
                    sprite={spriteL} 
                />
            </MDBCol>
            <MDBCol className='no-black'>
                <LayeredImage
                    aspectRatio={spriteC.eyes !== '' ? (16 / 25) : (16/15)} 
                    sprite={spriteC}
                />
            </MDBCol>
            <MDBCol className='no-black'>
                <LayeredImage
                    aspectRatio={spriteR.eyes !== '' ? (16 / 25) : (16/15)} 
                    sprite={spriteR}
                />
            </MDBCol>
        </MDBRow>
    )
}

export default SpriteRenderer