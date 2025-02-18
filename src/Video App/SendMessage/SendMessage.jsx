import TextContainer from '../TextContainer/TextContainer'
import './SendMessage.css'

export default function SendMessage({text}) {
    return (
        <div className='sendMessage'>
            <TextContainer text={text} />
        </div>
    )
}