import { MDBCardText } from 'mdbreact'
import React, { useState, useEffect } from 'react'
const api = 'http://localhost:3000/api/v1'

const Comment = (props) => {
    const [commentor, setCommentor] = useState(null)

    const findCommentor = (id) => {
        fetch(`${api}/users/${id}`)
        .then(response => response.json()
        .then(data => setCommentor(data)))
    }

    useEffect(() => {
        findCommentor(props.comment.commentor_id)
    }, [props]);

    return(
        <MDBCardText>
            <span>
                <img style={{width: '25px', height: 'auto'}} src={commentor ? commentor.avatar : ''} alt='' className='img-fluid'/> User: {commentor ? commentor.username : ''}
                <br/>
                {props.comment.comment}
            </span>
        </MDBCardText>
    )
}

export default Comment