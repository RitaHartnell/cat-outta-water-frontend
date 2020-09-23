import { MDBRow, MDBCol } from 'mdbreact';
import React, {useState, useEffect} from 'react'
import pages from '../assets/order/order'
import {LayeredImage} from 'react-layered-image'



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
                    shadowColor='#fff' 
                    aspectRatio={spriteL.eyes !== '' ? (16 / 25) : (16/15)} 
                    layers={spriteL.eyes !=='' ? [spriteL.body, spriteL.eyes, spriteL.mouth] : [spriteL.body]} 
                    lightOpacity={0} 
                    shadowOpacity={0}
                />
            </MDBCol>
            <MDBCol className='no-black'>
                <LayeredImage 
                    shadowColor='#fff' 
                    aspectRatio={spriteC.eyes !== '' ? (16 / 25) : (16/15)} 
                    layers={spriteC.eyes !== '' ? [spriteC.body, spriteC.eyes, spriteC.mouth] : [spriteC.body]} 
                    lightOpacity={0} 
                    shadowOpacity={0}
                />
            </MDBCol>
            <MDBCol className='no-black'>
                <LayeredImage 
                    shadowColor='#fff' 
                    aspectRatio={spriteR.eyes !== '' ? (16 / 25) : (16/15)} 
                    layers={spriteR.eyes !== '' ? [spriteR.body, spriteR.eyes, spriteR.mouth] : [spriteR.body]} 
                    lightOpacity={0} 
                    shadowOpacity={0}
                />
            </MDBCol>
        </MDBRow>
    )
}

export default SpriteRenderer