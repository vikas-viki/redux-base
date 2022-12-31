import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from "../State/action-creators/main";
import { bindActionCreators } from 'redux';

const Home = () => {
    const dispatch = useDispatch();
    const { deposit, withdraw } = bindActionCreators(actions, dispatch)
    return (
        <>
            <div className='d-flex flex-column'>
                <h2>ATM</h2>
                <div className='d-flex'>

                    <button className='btn btn-primary mx-3' onClick={() => { withdraw(500) }}>-</button>
                    <h5>Withdraw money</h5>
                    <button className='btn btn-primary mx-3' onClick={() => { deposit(1000) }}>+</button>
                </div>
            </div>
        </>
    )
}

export default Home