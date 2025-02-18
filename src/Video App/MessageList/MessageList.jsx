import Message from '../Message/Message.jsx'
import './MessageList.css'

export default function MessageList({messages}) {
    return (
        <ol className='MessageList'>
            {messages.map(message=><Message key={message.id} message={message} />)}
        </ol>
    )
}