import React,{useState} from 'react';


function Page  ()  {
    const[popup,setpop]=useState(false);
    const handleClickopen=()=>{
        setpop(!popup);
    }
    const closePopup=()=>{
        setpop(false);
    }
    return (
        <div className='App'>
            <button onClick={handleClickopen}>Open popup</button>
            <div>
                {popup?
                <div className='main'>
                <div className='popup'>
                    <div className='popup-header'>
                        <h1>popup</h1>
                        <h1 onClick={closePopup}>x</h1>
                    </div>
                    <div>
                        <p>This Simple popup in react js .....</p>
                    </div>
                  </div>
                </div>:''}
            </div>
        </div>
    );
}

export default Page;
