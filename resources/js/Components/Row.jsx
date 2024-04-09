import React from 'react'

function Row(props) {
  return (
    <tr className='py-6'>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.content}</td>
        <td><button className="btn btn-primary px-3 py-2">Sửa</button></td>
        <td><button className="btn btn-danger px-3 py-2">Xóa</button></td>
    </tr>
  )
}

export default Row