/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import CarouselSection from "views/index-sections/CarouselSelection";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 4;
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
      <div className="page-header clear-filter" filter-color="blue">
        <CarouselSection />
        <div
          className="page-header-image"
          ref={pageHeader}
        >
          
        </div>
      
      </div>
    </>
  );
}

export default IndexHeader;
