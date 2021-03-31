import React, { useState } from 'react';
import Child from './Child';

let Parent = ()=>{
    let [username, setUsername] = useState('');
    let [user, setUser]= useState('');
    let updateInput = (event)=>{
        setUsername(event.target.value);
    }
    let receiveData=(value)=>{
        setUser(value);
    }

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                Parent Card
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <form>
                                        <label htmlFor="">User Name: </label>
                                        <input onChange={updateInput} className="form-control" value={username} type="text"  />
                                        
                                        <span> From Child : { user } </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Child message={username} sendData={receiveData}/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Parent;