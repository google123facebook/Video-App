import {useEffect, useState} from 'react'
import './ChatSection.css'
import  ChatWrapper  from '../ChatWrapper/ChatWrapper';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
    withCredentials: false
});
socket.on("connect", () => {
    console.log(socket.id); 
});
socket.on("disconnect", () => {
    console.log(socket.id);
});

const pc = new RTCPeerConnection({ iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]});
const dc = pc.createDataChannel("chat", {
    ordered: true,              
    protocol: "text/plain",   
    negotiated: false, 
});

pc.addEventListener("icecandidate", (e)=>{
    if(e.candidate) {
        socket.emit("singnal", JSON.stringify({candidate : e.candidate}));
    }
})

pc.addEventListener("connectionstatechange", (e)=>{
    console.log(pc.connectionState);
})

pc.addEventListener("signalingstatechange", (e)=>{
    console.log(pc.signalingState);
})

pc.addEventListener('iceconnectionstatechange', ()=>{
    console.log(pc.iceConnectionState);
})

pc.addEventListener("icegatheringstatechange", ()=>{
    console.log(pc.iceGatheringState);
})

export function ChatSection() {
    const [messages, setMessages] = useState([ ]);
    const [isConnected, setIsConnected] = useState(false);

    function addSendMessage(text) {
        setMessages(oldMessages => [...oldMessages, 
            {
                id: Date.now(),
                text,
                type: 'send'
            }
        ])
        dc.send(text);
    }

    function addResivedMessage(text) {
        setMessages( oldMessages => [...oldMessages, 
            {
                id: Date.now(),
                text,
                type: 'resived'
            }
        ])    
    }

    useEffect(()=>{
        socket.on("singnal", async (data)=>{
            data = JSON.parse(data);
            const type = data.type;
            console.log(data);
            if(type === 'offer') {
                await pc.setRemoteDescription(data);
                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);
                socket.emit("singnal", JSON.stringify({type: "answer", sdp: answer.sdp}));
            }
            else if(type === 'answer') {
                console.log(pc.remoteDescription);
                await pc.setRemoteDescription(data);
            }
            else {
                console.log(data.candidate);
                await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
            }
        })
    }, []);

    useEffect(()=>{
        dc.addEventListener("open", (e)=>{
            // dc.send("Hello");
            setIsConnected(true);
          })
          
          pc.addEventListener('datachannel', (e)=>{
              const dc = e.channel;
              dc.addEventListener('message', (e)=>{
                //   console.log(e.data);
                addResivedMessage(e.data);
              })
        })
    }, []);

    // useEffect(()=>{
    //     socket.on('message', (msg)=>{
    //     console.log(msg);
    //     addResivedMessage(msg);
    // })}, []);

    async function handleClick() {
        const offer = await pc.createOffer({offerToReceiveAudio:1,
            offerToReceiveVideo: 1
        });
        await pc.setLocalDescription(offer);
        socket.emit('singnal', JSON.stringify({type: 'offer', sdp: offer.sdp}));
    }

    return (
        <div className='ChatSection'>
            { isConnected === false? <button className='startBtn' onClick={handleClick}>start</button> : <ChatWrapper messages={messages} addSendMessage={addSendMessage} /> }
        </div>
    )
}


