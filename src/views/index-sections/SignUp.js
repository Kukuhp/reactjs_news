import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";

// core components

function SignUp() {
  
  const [items, setArray] = React.useState([]);
  const [state, setState] = React.useState({ username: "", password: "", email: ""});
  let bodyFormData = new FormData();
  const handleSubmit = e => {
     e.preventDefault();
     
     bodyFormData.append('username',state.username);
     bodyFormData.append('password',state.password);
     bodyFormData.append('email',''+state.email);
     bodyFormData.append('refferalSender','1');
     bodyFormData.append('imei','1');
     bodyFormData.append('token',''+'1');
     bodyFormData.append('myLink',''+'1');

     let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

  //   console.log(bodyFormData);

 
      //  axios({
      //    method:'post',
      //    url: 'http://192.168.43.238:8000/createuser',
      //    data: bodyFormData,
      //    headers: {'Content-Type': 'multipart/form-data' },
   
      //  })
      axios.post('https://cors-anywhere.herokuapp.com/http://192.168.43.238:8000/createuser',
      bodyFormData,
      {
        headers: headers
      })
           .then(function(response){
           console.log("success");
          // setArray(response.data);
       })
           .catch(function(error){
           setArray([])
       });
    // console.log(state);
   };
   const handleChange = e => {
     setState({
       ...state,
       [e.target.name]: e.target.value
     });
   };

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="" onSubmit = {handleSubmit}>
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                     
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                     
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username..."
                      type="text"
                      name = "username"
                      onChange = {handleChange}
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="text"
                      name = "email"
                      onChange = {handleChange}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (lastFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password..."
                      type="password"
                      name = "password"
                      onChange = {handleChange}
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    type = "submit"
                    size="lg"
                  >
                    Sign Up
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default SignUp;
