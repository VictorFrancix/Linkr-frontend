import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./../temp/context";

import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { CgZeit } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

import {
    Posteds,
    ContentLinkPosted,
    Input,
    Likes,
    Urlmetadata
} from "./components/ComponentsTimeline";

import axios from "axios";

export default function LinksPosted() {
    const {  edit, setEdit  } = useContext(AuthContext);

    const [postsLinks, setPostLinks] = useState([]);    
    const [ like, setLike ] = useState([]);
    const userId = 1;
    const [titulo, setTitulo] = useState('')

    useEffect(() => {
    axios.get(`${'http://localhost:4000'}/posts`)
    .then((response) => {
        setPostLinks(response.data);
        setLike(response.data.map((e, i) => e.like === true ? i : ''));
    })
    .catch((err) => {console.log(err)})    
    },[])

    return (
        postsLinks.map((e, i) => {
            const likes = e.numLikes;
            const numLikes = likes < 1000 ? likes : likes < 1000000 ? parseInt(likes / 1000) + ' MIL' : parseInt(likes / 1000000) + ' MI';
            let userLikes = '';
            e.userLikes.forEach((el, j) => j < e.userLikes.length -1 ? userLikes += el + ', ' : userLikes += el);
            return (
                <Posteds key={e.interactionCount +i}>
                    <img className="userImg" src={e.image} alt="" />
                    <Likes>                    
                        { like.includes(i) ? 
                            <FcLike className="heart-icon" onClick={ () => {setLike(like.filter(e => e !== i))} } /> : 
                            <BiHeart className="heart-icon" onClick={ () => {setLike([...like, i])} } /> 
                        }
                        <p className="p1">{numLikes} Likes</p>
                        <div className="message-likes">
                            <CgZeit className="zeit-icon"/>
                            <p className="p2">{userLikes} e outras {likes - e.userLikes.length} pessoas</p>    
                        </div>
                    </Likes>
                    <ContentLinkPosted>
                        <p className="name">Juvenal Juvêncio</p>                    
                        {edit === i && e.userId === userId ? 
                            <>
                                <FaTrash className="icons" style={ { right: "22px" } }/>
                                <FaPencilAlt className="icons" style={ { right: "43px" } }/>
                            </> : "" 
                        }
                        <Input onClick={(event) => {setEdit(i); setTitulo(e.title); event.stopPropagation()}}>
                            {edit === i && e.userId === userId ? 
                                <textarea type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} ></textarea>
                                : 
                                <h2>{e.title}</h2>
                            }
                        </Input>
                        <Urlmetadata>
                            <h2>{e.title}</h2>
                            <p className="text">{e.title}</p>
                            <p className="ref">{"https://medium.com/@pshrmn/a-simple-react-router"}</p>
                            <img src={e.image} alt="img"></img>
                        </Urlmetadata>                
                    </ContentLinkPosted>
                </Posteds>
            )
        })
    )
}