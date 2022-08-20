import React from 'react'
import { useEffect } from 'react'
function ListOfItem({allItem, editBtn, deleteBtn}) {




  return (

    <div>
        <table className='table text-light'>
                <thead>
                  <th>S/N</th>
                  <th>Item</th>
                  <th>Action</th>

                </thead>
                {
                  allItem.map((aud, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{aud.myItem}</td>
                      <td>
                        <button className='btn bg-warning text-light ms-2' onClick={() => editBtn(index)}>Edit</button>
                        <button className='btn bg-danger ms-2' onClick={() => deleteBtn(index)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }

              </table>

    </div>
  )
}

export default ListOfItem