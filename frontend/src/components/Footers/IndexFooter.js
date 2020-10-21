import React from "react";

import {Row, Container, Col} from "reactstrap";


const IndexFooter = ()  => {
    return(
        <footer className = "m-t-10 footer footer-black">
            <Container>
                <Row>
                    <Col lg="3" md="6">
                        <h5> Something so Special</h5>
                        <h5> Click On more </h5>
                    </Col>
                    <Col lg = "3" md = "6">
                    </Col>
                    <Col lg = "3" md = "6">
                    </Col>
                    <Col lg = "3" md = "6">
                    </Col>
                </Row>
                <div className = "footer">
                <Row lg= "3" md = "6">
                    <Col md="12">
                        <div className = "d-flex font-14 footer">
                            <div className = "m-t-10 m-b-10 footer copyright"> All rights Reserved by Ernest</div>
                            <div className = "m-t-10 m-b-10 ml-auto footer links"> 
                                <a href = "#" className = "p-10 p-l-0">  Yup  </a>
                                <a href = "#"> Run it back</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </footer>
    );
}


export default IndexFooter;