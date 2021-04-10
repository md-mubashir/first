import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizzaImage from '../assets/images/pizza.jpg';
import { buy_pizza } from '../redux/pizzaHut/pizzaActions';



let PizzaHut = ()=>{
    let dispatch = useDispatch();

    let pizzaState = useSelector( (state)=>{
        return state.pizza;
    })

    let pizzaClick=()=>{
        dispatch(buy_pizza());
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <pre>
                {pizzaState.count}
                </pre>
                <div className="row">
                    <div className="col">
                        <p className="h3 text-danger">PizzaHut</p>
                        <p className="lead">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={pizzaImage} alt="" className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-md-8">
                        <p className="h4">Available :  <span className="font-weight-bold text-danger">{pizzaState.count}</span>   
                        <span className="font-weight-bold text-danger"></span>
                        </p>
                        <button onClick={pizzaClick} className="btn btn-sm btn-outline-success">Buy Pizza</button>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default PizzaHut;
