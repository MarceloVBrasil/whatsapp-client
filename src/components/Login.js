import React, {useRef} from 'react';
import "../components/css/login.css"
import { v4 as uuidv4 } from 'uuid'

export default function Login({onIdSubmit})
{
    const idRef = useRef();
    function LoginUser()
    {
        onIdSubmit(idRef.current.value);
    }

    function CreateNewId()
    {
         onIdSubmit(uuidv4());
    }

    return (
        <>
        <div className='login-container'>
             <div className='header'>Whatsapp</div>

            <div className='login-form'>
                <label>Enter your Id:</label>
                <input type="text" ref={idRef} placeholder="enter your user Id..." required/>
            </div>
                <div>
                    <button className='action-btn top-btn' type='submit' onClick={LoginUser}>Login</button>
                    <button className='action-btn bottom-btn' type='submit' onClick={CreateNewId}>Create a New Id</button>
                </div>           
        </div>  
        </>
    )
}