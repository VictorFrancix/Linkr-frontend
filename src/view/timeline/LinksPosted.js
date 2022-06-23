import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./../temp/context";

import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { CgRepeat } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";

import {
    ContentPosted,
    Posteds,
    ContentLinkPosted,
    Input,
    Likes,
    Urlmetadata
} from "./components/styledLinkPosted";

import userImage from "./components/user.svg"

import axios from "axios";

export default function LinksPosted() {
    const {  edit, setEdit  } = useContext(AuthContext);

    const [postsLinks, setPostLinks] = useState({posts: [], infos:[]});
    const [page, setPage] = useState([]);

    const [ like, setLike ] = useState([]);
    const userId = 1;
    const [titulo, setTitulo] = useState('');

    const [reload, setReload] = useState(false);
    const [desable, setdesable] = useState([]);

    const token = 142536

    useEffect(() => {
        axios.get(`${'http://localhost:4000'}/post`, { headers: { authorized: token }, params: { page: 0 } })
        .then((response) => {
            //console.log(response.data)
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
            setdesable(desable.filter(e => e !== postId+'T'))
        })
        .catch((err) => {
            console.log(err)
            setdesable(desable.filter(e => e !== postId+'T'))
        })
    }
    function editPost (postId){
        axios.put(`${'http://localhost:4000'}/post/${postId}`, { title : titulo }, { headers: { authorized: token } })
        .then((response) => {
            console.log(response)
            setReload(!reload); setEdit(-1);
            setdesable(desable.filter(e => e !== postId+'E'));
        })
        .catch((err) => {
            console.log(err)
            setdesable(desable.filter(e => e !== postId+'E'));
        })
    } 
    function postLike (postId){
        axios.post(`${'http://localhost:4000'}/like`, {}, {headers: { authorized: token }, params: {post_id: postId}})
        .then((response) => {
            setReload(!reload);
            setdesable(desable.filter(e => e !== postId+'E'));
        })
        .catch((err) => {
            console.log(err)
            setdesable(desable.filter(e => e !== postId+'E'));
        })
    }
    ////////////////////////

    function calcMi(numTotal) {
        return (
            numTotal < 1000 ? 
            numTotal : numTotal < 1000000 ? parseInt(numTotal / 1000) + ' MIL'
            : parseInt(numTotal / 1000000) + ' MI'
        );
    }

    if ( postsLinks.length ==  0 ){
        return <></>
    } else {
        return (
            postsLinks.posts.map((e, i) => {
                const info = postsLinks.infos[i]
                               
                let userLikes = '';
                like.includes(i) ? userLikes += 'você, ' : userLikes = '';
                //e.userLikes.forEach((el, j) => j < e.userLikes.length -1 ? userLikes += el + ', ' : userLikes += el);
               
                return (
                    <ContentPosted repost={e.creat_user === e.post_user ? '276px' : '309px'} key={i} >
                        <CgRepeat className="reposted_icon"/><p className="reposted_name">Re-posted by <span>{e.post_user === userId ? 'you' : e.post_userName}</span></p>
                        <Posteds>
                            <img className="userImg" src={e.user_image? e.user_image : userImage} alt="" onClick={() => setReload(!reload)} />
                            <Likes>                    
                                { e.like != null ? 
                                    <FcLike className="heart-icon" onClick={ () => {if ( e.post_user == e.creat_user) {setdesable([...desable, e.id+'L']); postLike(e.id)}} } /> : 
                                    <BiHeart className="heart-icon" onClick={ () => {if ( e.post_user == e.creat_user) {setdesable([...desable, e.id+'L']); postLike(e.id)}} } /> 
                                }
                                <p className="p1">{calcMi(info.numLikes)} Likes</p>
                                {/* <div className="message-likes">
                                    <CgZeit className="zeit-icon"/>
                                    <p className="p2">{'you'} e outras {15 - e.userLikes.length} pessoas</p>    
                                </div> */}
                                <AiOutlineComment className="aux-icon" style={{top: '56px'}}/>
                                <p className="aux-icon p1" style={{top: '74px'}}>{calcMi(info.numComments)} Comments</p>
                                <CgRepeat className="aux-icon" style={{top: '100px'}}/>
                                <p className="aux-icon p1" style={{top: '116px'}}>{calcMi(info.numRe_posts)} Re-post</p>
                            </Likes>
                            <ContentLinkPosted>
                                <p className="name">{e.post_userName}</p>                    
                                {e.post_user === userId ? 
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
                                    {edit === i && e.post_user === userId ? 
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
                    </ContentPosted>
                )
            })
        )
    }
}
