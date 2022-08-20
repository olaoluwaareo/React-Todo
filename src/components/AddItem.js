import React from 'react'
import { useState } from 'react'
function AddItem({ addItem, myBtn, editBtn}) {
    const [myItem, setmyItem] = useState("")

    let stateChange = {setmyItem}

    return (
        <>
        
            <div className='row-md-6'>
                <input className='form-control col-sm-12 col-md-5 mx-auto' type="text" placeholder="Enter your item here" onChange={(event) => setmyItem(event.target.value)} value={myItem} />
                <button className='btn btn-warning float-end mt-3' onClick={() => addItem({myItem, stateChange, editBtn:{editBtn}})}>{myBtn}</button>
            </div>

        </>
    )
}
export default AddItem
