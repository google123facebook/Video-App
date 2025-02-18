import InputMessageAndSendButtonContainer from "../InputMessageAndSendButtonContainer/InputMessageAndSendButtonContainer";
import MessageList from "../MessageList/MessageList";
import './ChatWrapper.css';

export default function ChatWrapper({messages, addSendMessage}) {

    return (
        <div className="ChatWrapper">
            <MessageList messages={messages} />
            <InputMessageAndSendButtonContainer addMessage={addSendMessage} />
        </div>
    )
}

