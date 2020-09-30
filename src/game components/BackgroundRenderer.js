import React, {useEffect, useState} from 'react'
import TextRenderer from './TextRenderer'
import SpriteRenderer from './SpriteRenderer';
import pages from '../assets/order/order'



const BackgroundRenderer = (props) => {
    const [background, setBackground] = useState(pages[0].background);

    useEffect(()=>{
        setBackground(pages[props.page].background)
    }, [props.page])

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'bottom',
            height: '550px'
        }}>
            <SpriteRenderer page={props.page}/>
            <TextRenderer next={props.next} choice={props.choice} page={props.page}/>
        </div>
    )
}

export default BackgroundRenderer