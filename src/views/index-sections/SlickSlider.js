import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import {Container,Card,Col} from 'react-bootstrap';


const SlickSlider = () =>{
    const [items, setArray] = React.useState([]);

    React.useEffect(() => {
      getList();
    },[])

    const getList = () =>{
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=12a8bbf5792192dbb805552499dd61d8&language=en-US&page=1")
            .then(function(response){
            setArray(response.data.results);
        })
            .catch(function(error){
            setArray([])
        });
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return(
        <Container>
            <Slider {...settings}>
                { items.map(function(movie){
                    var poster = movie.poster_path;
                    return (
                        <React.Fragment>
                            <Col >
                                <Card>
                                    <Card.Img 
                                    variant = "top"
                                    src = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                                </Card>
                                <Card.Body>
                                    <span>{movie.title}</span>
                                </Card.Body>
                            </Col>
                        </React.Fragment>
                    )
                })

                }
            </Slider>
        </Container>
    )
}

export default SlickSlider;


