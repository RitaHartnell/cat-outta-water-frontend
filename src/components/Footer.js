import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="pink darken-4" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Hello and Goodbye!</h5>
            <p>
              This is all the stuff yes
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/RitaHartnell">My Github!</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/RitaHartnell/cat-outta-water-frontend">Frontend</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/RitaHartnell/cat-outta-water-backend">Backend</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Me </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;

