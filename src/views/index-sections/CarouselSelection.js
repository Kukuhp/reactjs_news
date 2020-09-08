import React from "react";
import "assets/css/carouselStyle.css";
import axios from 'axios';

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  CarouselControl
} from "reactstrap";

// core components

// const items = [
//   {
//     src: require("assets/img/bg1.jpg"),
//     altText: "Nature, United States",
//     caption: "Nature, United States",
//   },
//   {
//     src: require("assets/img/bg3.jpg"),
//     altText: "Somewhere Beyond, United States",
//     caption: "Somewhere Beyond, United States",
//   },
//   {
//     src: require("assets/img/bg4.jpg"),
//     altText: "Yellowstone National Park, United States",
//     caption: "Yellowstone National Park, United States",
//   },
// ];

const CarouselSection = (props) => {

  const [items, setArray] = React.useState([]);

  React.useEffect(() => {
    getList();
  },[])

  const getList= () =>{

  axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=da5bdc26331345d4be3d60903f8131ec")
  .then(function(response){
    setArray(response.data.articles);
    console.log({response})
  })
  .catch(function(error){
    setArray([])
  });
}

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.slice(0,5).length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.slice(0,5).length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

//  articles = {items};
  
  // console.log({items})
  // const slides = items && items.map((item, id) => {
  //   return (
  //     <CarouselItem
  //       onExiting={() => setAnimating(true)}
  //       onExited={() => setAnimating(false)}
  //       key={item.title}
  //     >
  //       <img src={item.urlToImage}  />
  //       <CarouselCaption captionText={item.title} captionHeader={item.description} />
  //     </CarouselItem>
  //   );
  // });

    var settings = {
        
    };

  return (
    <>
      <div >
          
      <Carousel className = "carousel-inner"
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items.slice(0,5)}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {
                   items && items.slice(0,5).map(function(item){
                     let checkImageNull;
                     if (item.urlToImage){
                        checkImageNull = <img src={item.urlToImage} />
                     }else{
                      checkImageNull = <img src="http://fbsh.hamzanwadi.ac.id/asset/foto_berita/no-image.jpg" />
                     }
                    return <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.title}
                    >
                     
                      {checkImageNull}
                      <div className="carousel-caption d-none d-md-block">
                      <h5>{item.title}</h5>
                      </div>
                    
                  </CarouselItem>;
                  })
                }
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>


                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            
      </div>
    </>
  );
}

export default CarouselSection;
