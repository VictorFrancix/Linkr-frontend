import { useState, useContext } from "react";
import { InputsFormPost } from "./components/styledFormPosted";
import { AuthContext } from "../temp/context";
import axios from "axios";

export default function FormPosted() {
    const { url} = useContext(AuthContext);

    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [desable, setdesable] = useState(false);

    const token = 142536

    function postTimeline(){
        axios.post(`${url}/post`, {title, link}, {headers: { authorized: token }})
        .then((response) => {
            setdesable(false);
            setLink(''); setTitle('');
        })
        .catch((err) => {
            console.log(err)
            setdesable(false);
        })
    }

    return (
        <InputsFormPost desable={desable}>
            <p>What are you going to share today?</p>
            <input className="link input" 
                type="text" 
                value={link} 
                onChange={event => setLink(event.target.value)} 
                placeholder="http://..." 
            />
            <textarea className="text-post input" 
                type="text" value={title} 
                onChange={event => setTitle(event.target.value)}
                placeholder="Awesome article about #javascript" 
            ></textarea>
            <button 
                onClick={() => {if(!desable) {postTimeline(); setdesable(true)}}}
            >Publish</button>
        </InputsFormPost>
    )
}