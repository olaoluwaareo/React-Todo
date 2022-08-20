import React from 'react'
import { useState } from "react"
import AddItem from './components/AddItem'
import ListOfItem from './components/ListOfItem'
const App = () => {
  const [allItem, setallItem] = useState([])
  const [myBtn, setmyBtn] = useState("Add Item")
  const [myIndex, setmyIndex] = useState(0)
  const addItem = (items) => {
    let myItem = items.myItem
    if (myItem == "") {
      alert("please kindly enter an item")
    }
    else {
      let indItem = { myItem }
      if (myBtn == "Add Item") {
        let newItem = [...allItem, items]
        setallItem(newItem)
        items.stateChange.setmyItem("")
      }
    }

    if (myBtn == "Edit Item") {
      let newEditItem = items ;
      allItem[myIndex] = newEditItem; 
      setallItem(allItem)
      setmyBtn("Add Item")
      items.stateChange.setmyItem("")
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
    allItem[myInd].stateChange.setmyItem(allItem[myInd].myItem)
    setmyIndex(myInd)

  }
  return (
    <>
      <div className='container bg-dark shadow p-3'>
        <h2 className='card-header text-light text-center'>To Do List</h2>
        <div className='column'>
          <AddItem addItem= {addItem} myBtn={myBtn} allItem editBtn/>

          <div className='row-md-6 text-light'>
            {allItem.length < 1 ? <h3 className='mt-5'>Kindly Enter an Item</h3> :
                <ListOfItem allItem={allItem} editBtn={editBtn} deleteBtn={deleteBtn}/>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App

