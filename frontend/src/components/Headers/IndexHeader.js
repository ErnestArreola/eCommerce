import React from "react";

import {Button, Container} from "reactstrap";



function IndexPageHeader () {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
          const updateScroll = () => {
            let windowScrollTop = window.pageYOffset / 3;
            pageHeader.current.style.transform =
              "translate3d(0," + windowScrollTop + "px,0)";
          };
          window.addEventListener("scroll", updateScroll);
          return function cleanup() {
            window.removeEventListener("scroll", updateScroll);
          };
        }
      });

    return (
        <>
        <div 
        style = {{backgroundColor: 'black'}}
        className = "page-header page-header-xs"
        ref = {pageHeader}
        >     
        <div />
        <Container>
          <div className = "section"> 
          </div>
            <div className = "motto text-left">
                <h1> Example Page </h1>
            </div>
        </Container>
        </div>
        </>
    );



}

export default IndexPageHeader;