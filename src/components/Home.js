import { MDBBox, MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBCardTitle, MDBContainer } from 'mdbreact'
import React from 'react'

export default function Home() {
    return (
        <MDBContainer>
            <MDBBox>
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
                    </MDBCardBody>
                </MDBCard>
            </MDBBox>
        </MDBContainer>
    )
}