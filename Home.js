import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Logo from "./ELClub logo.jpg";
import serviceimage1 from "./service image1.jpg";
import serviceimage2 from "./service image2.jpg";
import serviceimage3 from "./service image3.jpg";
import memberimage1 from "./member image1.jpg";
import memberimage2 from "./member image2.jpg";
import memberimage3 from "./member image3.jpg";
import memberimage4 from "./member image4.jpg";
import memberimage5 from "./member image5.jpg";
import memberimage6 from "./member image6.jpg";
import "./App.css";
import {  Card, CardColumns, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Home(){
    return(
        <Fragment>  
               
                <Nav>
                    < Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand >
                     <img
                      alt=""
                      src="/ELClub logo.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                        />{' '}
                       English Learning Club
                    </Navbar.Brand>
                    </ Navbar> 
                    <Navbar bg="light" variant="light" expand="lg">
                        <Navbar.Toggle aria-controls="responsive-Navbar-Nav" />
                        <Navbar.Collapse id="responsive-Navbar-Nav">
                        <Nav className="xs-auto" >
                            <Nav.Link ><Link to="/">HOME</Link></Nav.Link>
                            <NavLink ><Link to="/about">ABOUT US</Link></NavLink>
                        </Nav>
                        <Dropdown as={ButtonGroup}>
                            <Button variant="light">SIGN IN</Button>
                                <Dropdown.Toggle split variant="light" id="dropdown-split-responsive" />
                                <Dropdown.Menu >
                                   <Dropdown.Item ><Link to="/register">Register</Link></Dropdown.Item>
                                   <Dropdown.Item ><Link to="/login">Login</Link></Dropdown.Item>
                                   </Dropdown.Menu>
                        </Dropdown>
                        </Navbar.Collapse>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>
                        <Navbar bg="light" variant="light" expand="lg"></Navbar>   
                        <Form inline>
                            <FormControl type="text" placeholder="Search"  className="mr-lg-2 active" />
                            <Button type="submit">Submit</Button>
                        </Form>
                           
                          
                    </  Navbar>
                        
                </Nav>
            
                <div className="Background">
                <br/>
                <br/>
      
               <div className="container" align="center">
                <img src={Logo} alt= "" width="200px" /><br/><br/>
                <h1><b><i>Welcome To English Learning Club</i></b></h1>
              </div>
              <br/>
              <div className="container">
                <div className="jumbotron">
                  <h2><i>About Us</i></h2>
                  <p>An English Learning  Club is a place for language learners to use English in a casual setting.
                     Practising your skills in the classroom is important, but it is not like real life. 
                     In the classroom, you often focus on one skill and one item (for example: grammar - future tense). 
                     After learning the rules your teacher gives you time to practise using the item.
                  </p>
                  <p><b><i>"God gave us two ears and one mouth so that we can hear twice as much as we say."</i></b></p>
                  <p>So the English Learning Club provides you English Movies and Books through which you can improve 
                     your skill while watching movies and listening the dilogues carefully, and also while reading the books.</p><br/>
                  <h3 ><i>How can you join  English Learning Club ?</i></h3><br/>
                  <p>You can start by Register yourself or if you are already a member of the club then just Login 
                     yourself and start learning English by Listening and Reading.</p>
                   <br/><br/>  
                </div>
              </div><br/><br/></div>
              <div className="service"><br/><br/>
                 <div className="container">
                
                  <h2 align ="center"><b><i>OUR SERVICES</i></b></h2><br/><br/>
                  <Row align="center"> 
                  <CardColumns>
                  <Card  style={{ width: '18rem' }}>
                    <Card.Body>
                  <img src={serviceimage1} alt= "" width="200px" /><br/><br/>
                  <Card.Text>
                    By watching movies you are able to hear and understand
                    spoken English fully. Hearing how certain words are 
                    pronounced will help you to remember and memorize the
                    sounds. Reading is definitely helpful in improvin your
                    English but hearing how to speak English is also equally 
                    important.</Card.Text><br/><br/>
                     </Card.Body></Card>
                     <Card.Body align="center" ><img src={serviceimage3} alt="" width="200px" id="oval"/></Card.Body><br/>
                     <Card  style={{ width: '18rem' }}>
                     <Card.Body>
                     <img src={serviceimage2} alt= "" width="200px" />
                      <Card.Text>
                      If practiced correctly, reading books and novels suiting
                      your level can accelerate vocabulary-building, improve
                      grammar, and sharpen writing. Although reading doesn't 
                      directly impact your spoken English, it can to some extent
                      improve it through better vocabulary, reading out loud,
                      and a deeper knowledge base.</Card.Text>
                        </Card.Body>
                        </Card>
                        </CardColumns></Row>
                </div><br/><br/>
              </div>
              <div className="Background2"><br/>
               <div className="container">
                <div className="secondpart"><br/>
                  
                   <h3 align="center"><b>OUR MEMBER</b></h3>  <br/><br/>
                   
                   <CardColumns align ="center">
                   <Card  style={{ width: '18rem' }}>
                     <Card.Body>
                     <img src={memberimage1} alt= "" width="200px" />
                     <Card.Text>
                           Anne Parker<br/>
                    Bussiness Analyst,TISCO
                     </Card.Text>
                     </Card.Body> 
                   </Card>
                   <Card  style={{ width: '18rem' }}>
                     <Card.Body>
                     <img src={memberimage2} alt= "" width="200px" />
                     <Card.Text>
                           James <br/>
                       HR,CNH Industries
                     </Card.Text>
                     </Card.Body> 
                   </Card>
                   
                   <Card  style={{ width: '18rem' }}>
                     <Card.Body>
                     <img src={memberimage3} alt= "" width="200px" />
                     <Card.Text>
                            Daisy <br/>
                       Web Developer, TCS
                     </Card.Text>
                     </Card.Body> 
                   </Card>
                   
                   <Card  style={{ width: '18rem' }}>
                     <Card.Body>
                     <img src={memberimage4} alt= "" width="200px" />
                     <Card.Text>
                            Lucas<br/>
                       Hr Consultant,Microsoft
                     </Card.Text>
                     </Card.Body> 
                   </Card>
                   
                   <Card  style={{ width: '18rem' }}>
                     <Card.Body>
                     <img src={memberimage5} alt= "" width="200px" />
                     <Card.Text>
                            Rose Jordan<br/>
                        Python Developer ,Infosys    

                     </Card.Text>
                     </Card.Body> 
                   </Card>
                   <Card  style={{ width: '18rem' }}>
                     <Card.Body>
                     <img src={memberimage6} alt= "" width="200px" />
                     <Card.Text>
                         William Bonner<br/>
                       Data Analyst,HCL  
                     </Card.Text>
                     </Card.Body> 
                   </Card>
                   </CardColumns>
                </div>
            </div>
          </div>
          <div className="third">
            <div className="container"><br/><br/>
            <Row align="center">
          <Col >
            <Card id="card1" style={{ width: '18rem' }}>
              <Card.Text>
            <h6><b>COMPANY</b></h6>
            <a href="App.js"> Website </a><br/>
            Terms and Conditions<br/>
            Privacy Policy <br/>
            Do Not Sell My Personal Information
            </Card.Text>
            </Card></Col>
            <Col align="center">
            <Card id="card1" style={{ width:'18rem'}}>
              <Card.Text>
                <h6><b>OUR SERVICES</b></h6>
                Our Service
              </Card.Text>
            </Card></Col>
            <Col >
            <Card id="card1" style={{ width:'18rem'}}>
              <Card.Text>
                <h6><b>OUR MEMBER</b></h6>
                Our Member
              </Card.Text>
            </Card>
            
          </Col></Row>
          <div className="footer-copyright text-center py-3"><br/><br/>
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.react-bootstrap.com"> React-Bootstrap.com </a>
        </Container>
      </div>
          <br/><br/>

            </div>    
            </div> 
            
        </Fragment>
        
    );
}