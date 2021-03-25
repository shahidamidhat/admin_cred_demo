import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import {useState} from "react";
import {Link} from "react-router-dom";


function Createuser(){
    let users=useContext(UserContext);
    const [name,setName]=useState("");
    const [position, setPosition]=useState("");
    const [office, setOffice]=useState("");
    const [age, setAge]=useState("");
    const [id, setId]=useState("");
    const [salary, setSalary]=useState("");

    let userdata={name,position,office,age,id,salary};



    return (
        <>
            <div className="container">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    users.setUserList([...users.userlist,userdata]);
                    setName("")
                    setOffice("")
                    setPosition("")
                    setSalary("")
                    setId("")
                    setAge("");

                }}>
                    <div className="row">
                <div className="col-6 mt-2">
                    <label for="name">Name</label><br/>
                    <input name="Name" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div className="col-6 mt-2">
                    <label for="position">Position</label><br/>
                    <input name="pos" className="form-control" id="position" value={position} onChange={(e)=>{setPosition(e.target.value)}}/>
                </div><div className="col-6 mt-2">
                    <label for="office">Office</label><br/>
                    <input name="Office" className="form-control" id="office" value={office} onChange={(e)=>{setOffice(e.target.value)}}/>
                </div><div className="col-6 mt-2">
                    <label for="age">Age</label><br/>
                    <input name="Age" className="form-control" id="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                </div>
                <div className="col-6 mt-2">
                    <label for="Start">Id</label><br/>
                    <input name="Start" className="form-control" id="start" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                </div>
                <div className="col-6 mt-2">
                    <label for="Sal">Salary</label><br/>
                    <input name="Salary" className="form-control" id="salary"value={salary}  onChange={(e)=>{setSalary(e.target.value)}}/>
                </div>
                <div className="col-6 mt-2">
                        <button type="submit" className="btn btn-primary">Add User</button>
                </div>
                </div>
                </form>
                
            </div>
        </>
    )
}

export default Createuser;