import React from 'react'
import "../assets/CSS/style.css"
import {Button, Form } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();

    const submit = async (e) =>{
        e.preventDefault()
        // console.log(e.target.name.value)
        const form = new URLSearchParams();
    form.append('name', e.target.name.value)
    form.append('email', e.target.email.value)
    form.append('message', e.target.message.value)
    await axios.post('http://localhost:8085/contactus', form.toString(), { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
    console.log('ssuccess')
    navigate('/listdata');
    }
  return (
      <>
      <div className="backdrop">
     <Form onSubmit={submit}>
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Message" name="message"/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>    
      </>
      
    
    
    
  )
}

export default ContactUs

