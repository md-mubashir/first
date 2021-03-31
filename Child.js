import React, { useState } from 'react';

let Child = (props)=>{

    let [username, setUsername] = useState('');

        let updateInput = (event)=>{
                setUsername(event.target.value);
                props.sendData(event.target.value);
                
        }

        
    return(
        <React.Fragment>
                    <div className="col-md-4 mt-3">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                Child Card
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <form>
                                        <label htmlFor="">User Name: </label>
                                        <input  className="form-control" type="text" value={username} onChange={updateInput}  />
                                        
                                        <span> From Parent : { props.message } </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}
export default Child;