import React from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function ShowData() {
    return (
        <div>
             <div className='d-flex justify-content-center'>
                <div>
                    <h3>TODO LIST</h3>
                    <Card border="light" style={{ width: '40rem' }}>
                        <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ShowData