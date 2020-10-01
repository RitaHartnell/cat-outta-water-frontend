import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle, MDBContainer } from 'mdbreact'
import React from 'react'
import sample from '../assets/sample.png'

export default function Home() {
    return (
        <MDBContainer>
                <MDBCard>
                    <MDBCardHeader>
                        <MDBCardTitle>
                            Cat Became Hungry
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            With this project, I have decided to showcase my abilities by making a short visual novel with react. It is currently a work in progress, with a story that is not yet complete. I hope you all enjoy what I have so far!
                        </MDBCardText>
                        <MDBCardImage alt='' src={sample} className='img-fluid'/>
                    </MDBCardBody>
                    <MDBCardFooter>

                    </MDBCardFooter>
                </MDBCard>
                <MDBCard>
                    <MDBCardHeader>
                        <MDBCardTitle>
                            The Story
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            Some college girls find a cat outside their dorm and decide to smuggle it into their room. Shenanigans ensue. The catch? You play as the cat in the story!
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter>
                        
                    </MDBCardFooter>
                </MDBCard>
        </MDBContainer>
    )
}