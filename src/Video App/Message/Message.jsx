import ReceivedMessage from '../ReceivedMessage/ReceivedMessage.jsx'
import SendMessage from '../SendMessage/SendMessage.jsx';
import './Message.css'

export default function Message({message}) {
    return (
        <li>
            {message.type === 'send' ? <SendMessage text={message.text} /> : <ReceivedMessage text={message.text} />}
        </li>
    )
}