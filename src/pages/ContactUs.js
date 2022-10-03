import React from 'react'
import "../assets/CSS/style.css"
import axios from "axios"
import {Container, Row, Col, Button, Form } from "react-bootstrap"
import {Formik} from 'formik'
import { useNavigate } from 'react-router-dom';
import { SiGooglemaps,  } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";
import * as Yup from 'yup'

function ContactUs() {
    const navigate = useNavigate();

    // const submit = async (e) =>{
    //     e.preventDefault()
    //     // console.log(e.target.name.value)
    //     const form = new URLSearchParams();
    // form.append('name', e.target.name.value)
    // form.append('email', e.target.email.value)
    // form.append('message', e.target.message.value)
    // await axios.post('http://localhost:8085/contactus', form.toString(), { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
    // console.log('ssuccess')
    // navigate('/listdata');
    // }
  return (
      <>
      <main className="position">
      <Container>
        <Row>
          <Col xs={7}  >
            <Row>
          <Col xs={2}>
          <div className="textPosition"> 
          <h1><SiGooglemaps /></h1>
          </div>
          <div className=" textPosition"> 
          <h1><FiPhone /></h1>
          </div>
          <div className=" textPosition"> 
          <h1><FiMail /></h1>
          </div>
          </Col>
          <Col xs={10}>
          <div className="textAll">
            
            <h1>ADDRESS</h1>
            <h4>71 Pilgrim Avenue Chevy Chase</h4>
            <h4>MD 20815</h4>
            </div>
            <div className="textAll ">
              <h1>PHONE</h1>
              <h4>+713-621-7636</h4>
            </div>
            <div className="textAll ">
              <h1>EMAIL</h1>
              <h4>Thompson@dayrep.com</h4>
            </div>
          </Col>
            </Row>
            
          </Col>
          <Col xs={5}>
            <div className="backdrop">
              <Formik initialValues={{name:'', email:'', message:''}} validationSchema={Yup.object({
                name: Yup.string().required('Name is required').min(2, 'Please fill name correctly'),
                email: Yup.string().required('Email is required').email('Please fill email correctly'),
                message: Yup.string().required('Message is required').min(2, 'Please input more than 2 character')
              })} onSubmit={(value)=> console.log(value)}>
                {({handleSubmit, handleChange, errors})=>{
                  return (
                    <Form onSubmit={handleSubmit}>
     <Form.Label className="textHead">LEAVE US MESSAGE</Form.Label>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} type="text" placeholder="Name" name="name" isInvalid={errors.name} isValid={!errors.name} />
         <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>           
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" placeholder="Enter email" name="email" isInvalid={errors.email} isValid={!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>           
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control onChange={handleChange} as="textarea" type="text" placeholder="Message" name="message" isInvalid={errors.message} isValid={!errors.message}/>
        <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>           
      </Form.Group>
      
      <Button variant="primary" type="submit">
        SEND
      </Button>
    </Form>
                  )
                }}
     
    </Formik>
    </div>    </Col>
        </Row>
      
    </Container>
    </main>
      </>
      
    
    
    
  )
}

export default ContactUs

