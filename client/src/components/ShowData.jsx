import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

async function goru() {
    const response = await axios.get('//localhost:5000/data')
    return response.data;
}

function ShowData() {
    const [repo, setRepo] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        goru().then((data) => {
            setRepo(data)
        })
    }, [refresh]);

    if (repo == null) {
        return <h1>Loding...</h1>
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`//localhost:5000/data/${id}`)
        } catch (err) {
            console.log(err);
        }
        setRefresh(!refresh);
    }

    if (repo.length == 0) {

        return <h1>No Todo Here...</h1>

    }
    console.log(repo)

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div>
                    <h3>TODO LIST</h3>
                    <Card border="light" style={{ width: '41rem' }}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    repo.todos.map((val, index) => (
                                        <tr key={index}>
                                            <td>{val.name}</td>
                                            <td>{val.phone}</td>
                                            <td>
                                                <Button variant="primary" onClick={(e) => handleDelete(val._id)}>
                                                    Detele
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ShowData