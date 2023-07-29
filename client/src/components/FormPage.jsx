import axios from 'axios'
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function FormPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        const data = 
            {name: name,
            phone: phone}
        

        try {
            const result = await axios.post('//localhost:5000/send', data)
            console.log(result.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className='m-5 d-flex justify-content-center'>
                <Card border="primary" style={{ width: '40rem' }}>
                    <Card.Title className='m-4'>ADD TODO</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm="3">
                                Name: 
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control 
                                type='text' 
                                placeholder="Enter Your Name" 
                                onChange={e => setName(e.target.value)} 
                                value={name}
                            />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="phone">
                            <Form.Label column sm="3">
                                Phone: 
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Your Phone No" 
                                onChange={e => setPhone(e.target.value)} 
                                value={phone}
                            />
                            </Col>
                        </Form.Group>
                        <div className='mb-3'>
                            <Button onClick={handleSubmit} variant="outline-primary">Submit</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default FormPage