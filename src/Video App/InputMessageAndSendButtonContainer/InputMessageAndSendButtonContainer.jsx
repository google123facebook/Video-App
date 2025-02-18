import { useState } from 'react'
import './InputMessageAndSendButtonContainer.css'

export default function InputMessageAndSendButtonContainer({addMessage}) {
    const [text, setText] = useState('');
    function handleClick() {
        addMessage(text);
        setText('');
    }
    return (
        <div className='InputMessageAndSendButtonContainer'>
            <input type='text' value={text} placeholder='Enter Message' onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleClick}>Send</button>
        </div>
    )
}