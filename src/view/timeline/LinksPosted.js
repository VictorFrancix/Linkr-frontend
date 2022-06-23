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
    const [titulo, setTitulo] = useState('');

    const [reload, setReload] = useState(false);
    const [desable, setdesable] = useState([]);

    const token = 142536

    useEffect(() => {
        axios.get(`${'http://localhost:4000'}/post/1`, { headers: { authorized: token }, params: { page: 0 } })
        .then((response) => {
            //console.log(postsLinks.includes(...response))
            setPostLinks(response.data);
            //setLike(response.data.map((e, i) => e.like === true ? i : ''));
        })
        .catch((err) => {console.log(err)})    
    },[reload])

    ////////////////////////         colocar alerts nos erros 
    function deletePost (postId){
        axios.delete(`${'http://localhost:4000'}/post/${postId}`, { headers: { authorized: token } })
        .then((response) => {
            console.log(response)
            setReload(!reload);
            setdesable(like.filter(e => e !== postId+'T'))
        })
        .catch((err) => {
            console.log(err)
            setdesable(like.filter(e => e !== postId+'T'))
        })
    }
    function editPost (postId){
        axios.put(`${'http://localhost:4000'}/post/${postId}`, { title : titulo }, { headers: { authorized: token } })
        .then((response) => {
            console.log(response)
            setReload(!reload); setEdit(-1);
            setdesable(like.filter(e => e !== postId+'E'));
        })
        .catch((err) => {
            console.log(err)
            setdesable(like.filter(e => e !== postId+'E'));
        })
    } 
    function deleteLike (postId){
        const header = {'user': sessionStorage.user, 'token': localStorage.token};
        axios.delete(`${'http://localhost:4000'}/like`, {}, {headers: header, params: {ID: postId}})
        .then((response) => {
            console.log(response)
            setReload(!reload);
        })
        .catch((err) => console.log(err))
    }
    function postLike (postId){
        const header = {'user': sessionStorage.user, 'token': localStorage.token};
        axios.post(`${'http://localhost:4000'}/like`, {}, {headers: header, params: {ID: postId}})
        .then((response) => {
            console.log(response)
            setReload(!reload);
        })
    }
    ////////////////////////
    console.log(postsLinks)

    if ( postsLinks.length ==  0 ){
        return <></>
    } else {
        return (
            postsLinks.map((e, i) => {
                //const likes = e.numLikes;
                //const numLikes = likes < 1000 ? likes : likes < 1000000 ? parseInt(likes / 1000) + ' MIL' : parseInt(likes / 1000000) + ' MI';
                //let userLikes = '';
                //like.includes(i) ? userLikes += 'você, ' : userLikes = '';
                //e.userLikes.forEach((el, j) => j < e.userLikes.length -1 ? userLikes += el + ', ' : userLikes += el);
                return (
                    <Posteds key={i}>
                        <img className="userImg" src={e.user_image} alt="" onClick={() => setReload(!reload)} />
                        <Likes>                    
                            {/* { like.includes(i) ? 
                                <FcLike className="heart-icon" onClick={ () => {setLike(like.filter(e => e !== i)); deleteLike()} } /> : 
                                <BiHeart className="heart-icon" onClick={ () => {setLike([...like, i]); postLike()} } /> 
                            } */}
                            <p className="p1">{e.id} Likes</p>
                            {/* <div className="message-likes">
                                <CgZeit className="zeit-icon"/>
                                <p className="p2">{'you'} e outras {15 - e.userLikes.length} pessoas</p>    
                            </div> */}
                        </Likes>
                        <ContentLinkPosted>
                            <p className="name">{e.user_name}</p>                    
                            {e.user_id === userId ? 
                                <>
                                    <FaTrash className={desable.includes(e.id+'T') ? "icons desable" : "icons" } 
                                        style={ { right: "22px" } }                                         
                                        onClick={() => {if (!desable.includes(e.id+'T')) deletePost(e.id); setdesable([...desable, e.id+'T'])} } />                                        
                                    <FaPencilAlt className={desable.includes(e.id+'E') ? "icons desable" : "icons" } 
                                        style={ { right: "43px" } } 
                                        onClick={(event) => { 
                                            if (!desable.includes(e.id+'E')) {
                                                edit >= 0 ? setEdit(-1) : setEdit(i); 
                                                setTitulo(e.title); 
                                                event.stopPropagation()
                                            }
                                        }}
                                    />
                                </> : "" 
                            }
                            <Input>
                                {edit === i && e.user_id === userId ? 
                                    <textarea type="text" value={titulo} 
                                        onChange={(event) => setTitulo(event.target.value)} 
                                        onClick={(event) => {event.stopPropagation()}}
                                        onKeyUp={(event) => {if (event.code === "Enter" && !event.shiftKey ) { setdesable([...desable, e.id+'E']); editPost(e.id) }}}
                                    ></textarea>
                                    : 
                                    <h2>{e.title}</h2>
                                }
                            </Input>
                            <Urlmetadata>
                                <h2>{e.subject}</h2>
                                <p className="text">{e.presentation}</p>
                                <p className="ref">{e.link}</p>
                                <img src={e.image} alt="img"></img>
                            </Urlmetadata>                
                        </ContentLinkPosted>
                    </Posteds>
                )
            })
        )
    }
}
