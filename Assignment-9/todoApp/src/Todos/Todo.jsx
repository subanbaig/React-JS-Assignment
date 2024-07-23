import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Todo = () => {
    const [Input,setInput] = useState('')
    const [item, setItem] = useState([])

    const addItem =()=>{
        // if(!Input) return
        // setItem([...item , Input])
        // setInput('')
        if (Input){
            setItem([...item, Input])
            setInput('')
            // console.log(item);
        }
    } 
    const deleteAll = ()=>{
        setItem([])
        // console.log(item);
    }

    const deleteItem = (index) => {
        const filteredItems = item.filter((e, i) => i !== index);
        setItem(filteredItems);
    };
    const editItem = (index) => {
        const updatedItems = [...item];
        updatedItems[index] = prompt('Edit Task', updatedItems[index]);
        setItem(updatedItems);
        // console.log(item);
    };
    // const deleteItem=(index)=>{

    //     const filterData = item.filter((e,i)=>{
    //         return index !== i
    //         })
    //         setItem(filterData)
    // }
  return (
    <div className='w-25 mx-auto'>
        <h1 className='text-center mt-5 mb-4'>To Do App</h1>
        <input value={Input} type="text" placeholder='Enter Task' onChange={(e)=>{setInput(e.target.value)}}/>
        <IoIosAddCircle onClick={addItem} style={{fontSize:25,marginLeft:5}}/>
        <FaDeleteLeft onClick={deleteAll} style={{fontSize:25,marginLeft:5}}/>

        {
            item.map((e,index) =>(
                <div key={index} className='my-2'>
                    <li>
                        {e}
                        <MdDeleteOutline onClick={()=>deleteItem(index)} style={{marginLeft:5}} />
                        <FaRegEdit onClick={()=>editItem(index)} style={{marginLeft:5}} />
                    </li>
                </div>
            ))
        }
    </div>
  )
}

export default Todo
