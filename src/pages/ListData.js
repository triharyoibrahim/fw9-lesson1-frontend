import React from 'react'
import { useEffect, useState } from 'react'

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
    <div>ListData</div>
    {data.map(element => (
        <tr key={element.id}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.email}</td>
          <td>{element.message}</td>
        </tr>
    ))}
        </>
  )
}

export default ListData