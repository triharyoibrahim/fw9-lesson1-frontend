import React from 'react'
import { useEffect, useState } from 'react'
import {Table, Button, Pagination} from 'react-bootstrap'
import axios from 'axios';

function ListData() {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8085/contactus').then(({ data }) => {
      setData(data.results)
    })
  }, [])
  return (
      <>
      <div className='backdrop mt-4'>
      <h1>Message from contact us's data list</h1>
    <Table responsive striped bordered hover size="sm">
      
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
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
    <div className='p-2'>
      <div className='d-flex justify-content-start m-2'>
        Go to homepage
      </div>
      <div className='d-flex justify-content-end p-2'>
    <Button variant="danger" type="submit" className='m-2'>
        Delete
    </Button>
    <Button variant="primary" type="submit" className='m-2'>
        Edit
    </Button>
      </div>
      <div className='d-flex justify-content-end'> 
      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
            
      <Pagination.Ellipsis />

      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
      </Pagination>
      </div>
      </div>
    </div>
        </>
  )
}

export default ListData