import TextContainer from '../TextContainer/TextContainer'
import './ReceivedMessage.css'

export default function ReceivedMessage({text}) {
    return (
        <div className='ReceivedMessage'>
            <TextContainer text={text} />
        </div>
    )
}