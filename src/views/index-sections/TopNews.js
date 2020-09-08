import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import "assets/css/centerdiv.css";
import axios from 'axios';
import { Link } from "react-router-dom";

const TopNews = (props) => {
    const [items, setArray] = React.useState([]);

    var apa = props.view;

    React.useEffect(() => {
      getList();
    },[])

    const getList = () =>{
        axios.get("https://newsapi.org/v2/top-headlines?category="+apa+"&country=id&apiKey=da5bdc26331345d4be3d60903f8131ec")
            .then(function(response){
            setArray(response.data.articles);
        })
            .catch(function(error){
            setArray([])
        });
    }


  return (
    <div style = {{height: 500, overflow: 'scroll'}}>
      
          { 
              items && items.map(function(item){
                  let itemsOnImage;
                  if (item.urlToImage){
                    itemsOnImage = <img src= {item.urlToImage} className="img-fluid img-thumbnail"/>
                  }else{
                    itemsOnImage = <img src= "http://fbsh.hamzanwadi.ac.id/asset/foto_berita/no-image.jpg" className="img-fluid img-thumbnail"/>
                  }
                  let data = {title: item.title, pict: item.urlToImage, description: item.content, url: item.url,source: item.source.name}
              return <Row className = "margin">
                <Col lg="4">
                  {itemsOnImage}
                </Col>
                <Col lg="8">
                <Link className = "colorText" to = {{pathname: "/profile-page", data: data}}  > {item.title}</Link>
                </Col>
                </Row>
              })
          }
          
        
    </div>
  );
};

export default TopNews;