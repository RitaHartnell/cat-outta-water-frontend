import React from 'react'

const LayeredImage = (props) => {
    const height = 366/props.aspectRatio
    console.log(props.sprite.body)
    return (
        <div style={{
            width: '100%',
            height: height,
            position: 'relative'
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundImage: `url(${props.sprite.body})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}>

            </div>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundImage: `url(${props.sprite.eyes})`,
                backgroundSize: 'contain',
                ackgroundRepeat: 'no-repeat'
            }}>

            </div>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundImage: `url(${props.sprite.mouth})`,
                backgroundSize: 'contain',
                ackgroundRepeat: 'no-repeat'
            }}>

            </div>
        </div>
    )
}

export default LayeredImage