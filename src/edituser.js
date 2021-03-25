import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

function Edituser(props){
    console.log(props)

    let users=useContext(UserContext);
    let curuserindex=users.userlist.findIndex(x => x.id ==props.match.params.id);
    console.log(curuserindex);
    const [name,setName]=useState(users.userlist[curuserindex].name);
    const [position, setPosition]=useState(users.userlist[curuserindex].position);
    const [office, setOffice]=useState(users.userlist[curuserindex].office);
    const [age, setAge]=useState(users.userlist[curuserindex].age);
    const [id, setId]=useState(users.userlist[curuserindex].id);
    const [salary, setSalary]=useState(users.userlist[curuserindex].salary);

    let curuserdata={name,position,office,age,id,salary};

    
    return (
        <>
            <h1>User: {props.match.params.id}</h1>
            <div className="container">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    users.userlist[curuserindex]=curuserdata;
                    users.setUserList([...users.userlist]);                    
                    alert("Details Updated Successfully")

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
                        <button type="submit" className="btn btn-primary">Update</button>
                </div>
                </div>
                </form>
                
            </div>
        </>
    )
}

export default Edituser;