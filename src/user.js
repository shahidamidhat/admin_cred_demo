import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import {Link} from "react-router-dom";

function User(){
    let users=useContext(UserContext);
    console.log(users);
    return (
        <>
            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Id</th>
                                            <th>Salary</th>
                                            <th>Edit Details</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Id</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {users.userlist.map((user)=>{
                                            return (
                                                <tr>
                                            <td>{user.name}</td>
                                            <td>{user.position}</td>
                                            <td>{user.office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.startdate}</td>
                                            <td>{user.salary}</td>
                                            <td><Link to={`/edituser/${user.id}`} >
                                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i>Edit</a>
                                            </Link>
                                            </td>
                                            <td>
                                            <button type="button" class="btn btn-primary" onClick={()=>{
                                                users.userlist.splice(users.userlist.findIndex(a => a.id === user.id) , 1)
                                                users.setUserList([...users.userlist])
                                            }}>Delete</button>
                                            
                                            </td>
                                        </tr>
                                            )
                                        })}
                                        
                                        
                                    </tbody>
                                </table>
                                </div>
        </>
    )
}

export default User;