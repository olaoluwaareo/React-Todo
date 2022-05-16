import React from 'react'
import { useState } from "react"
const App = () => {
  const [myItem, setmyItem] = useState("")
  const [allItem, setallItem] = useState([])
  const [myBtn, setmyBtn] = useState("Add Item")
  const [myIndex, setmyIndex] = useState(0)
  const addItem = () => {
    if (myItem == "") {
      alert("please kindly enter an item")
    }
    else {
      let indItem = { myItem }
      if (myBtn == "Add Item") {
        let newItem = [...allItem, indItem]
        setallItem(newItem)
        setmyItem("")
      }
    }

    if (myBtn == "Edit Item") {
      console.log(`I dey answer you John-Fixit`);
      let newEditItem = { myItem };
      allItem[myIndex] = newEditItem;
      setallItem(allItem)
      setmyBtn("Add Item")
      setmyItem("")
    }
  }
  const deleteBtn = (myInd) => {
    let findMe = allItem.filter((others, index) => (
      index != myInd
    ))
    setallItem(findMe)
  }
  const editBtn = (myInd) => {
    setmyBtn("Edit Item")
    setmyItem(allItem[myInd].myItem)
    setmyIndex(myInd)

  }
  return (
    <>
      <div className='container bg-dark shadow p-3'>
        <h2 className='card-header text-light text-center'>To Do List</h2>
        <div className='column'>
          
          <div className='row-md-6'>
            <input className='form-control col-sm-12 col-md-5 mx-auto' type="text" placeholder="Enter your item here" onChange={(event) => setmyItem(event.target.value)} value={myItem} />
            <button className='btn btn-warning float-end mt-3' onClick={addItem}>{myBtn}</button>
          </div>
          <div className='row-md-6 text-light'>
        { allItem.length<1 ? <h3 className='mt-5'>Kindly Enter an Item</h3>:
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
}
          </div>
        </div>
      </div>

    </>
  )
}

export default App

