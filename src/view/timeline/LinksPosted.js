import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./../temp/context";
import  InfiniteScroll  from  "react-infinite-scroller"; 
import useInterval from "use-interval";
import axios from "axios";

import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { CgRepeat } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { CgZeit } from "react-icons/cg";
import { TbSend } from "react-icons/tb"

import {
    ContentPosted,
    Posteds,
    ContentLinkPosted,
    Input,
    Likes,
    Urlmetadata,
    Comment,
    NewPosteds
} from "./components/styledLinkPosted";
import userImage from "./components/user.svg"


export default function LinksPosted() {
    const { url, edit, setEdit, openComment, 
        setOpenComment, route, setRoute, reload, 
        setReload, page, setPage, 
        postsLinks, setPostLinks 
    } = useContext(AuthContext);

    const [postsComment, setPostsComment] =useState([]);
    const [likes, setLikes] = useState([{likeUser: [], numLikes: 0}]);
    const [comment, setComment] = useState('');

    const [test, setTest] = useState(true)

    const userId = 1;
    const [titulo, setTitulo] = useState('');

    const [desable, setdesable] = useState([]);

    const token = 142536

    useEffect(() => {
        axios.get(`${url + route}`, { headers: { authorized: token }, params: { page: page } })
        .then((response) => {
            setPostLinks([...postsLinks, response.data]);
            setPage(page + 1);
            if(response.data.posts.length > 0){
                setTest(true)
            }
        })
        .catch((err) => {console.log(err)})    
    },[reload])

    const [newPosts, setNewPosts] = useState(0);
    useInterval(() => {
        if(postsLinks.length > 1){
            axios.get(`${url}/new${route}`, {headers: {authorized: token }, params: {date: "2022-06-24 17:43:12.836617"} })
            .then((response) => {
                if(response.data.length === 2){
                    setNewPosts(response.data[0].count + response.data[1].count);
                } else if(response.data.length === 1){
                    setNewPosts(response.data[0].count);
                }
            })
            .catch((err) => {console.log(err)}) 
        }
    }, 5000);

    ////////////////////////         colocar alerts nos erros 
    function deletePost (postId){
        axios.delete(`${'http://localhost:4000'}/post/`, { headers: { authorized: token } })
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
        axios.post(`${url}/like`, {}, {headers: { authorized: token }, params: {post_id: postId}})
        .then((response) => {
            setReload(!reload);
            setdesable(desable.filter(e => e !== postId+'E'));
        })
        .catch((err) => {
            console.log(err)
            setdesable(desable.filter(e => e !== postId+'E'));
        })
    }
    function getLike (postId){
        axios.get(`${url}/like`, {headers: { authorized: token }, params: {post_id: postId}})
        .then((response) => {
            setLikes([response.data, postId]);
        })
        .catch((err) => {
            console.log(err)
        })
    }
    function postComment (post_id){
        axios.post(`${url}/comment`, {post_id, text: comment}, {headers: { authorized: token }})
        .then((response) => {
            setComment('');
            setReload(!reload);
            setdesable(desable.filter(e => e !== post_id+'S'));
        })
        .catch((err) => {
            console.log(err)
            setdesable(desable.filter(e => e !== post_id+'S'));
        })
    }
    function getComment (post_id) {
        axios.get(`${url}/comment`, {headers: { authorized: token }, params: {post_id, page: 0}})
        .then((response) => {
            setPostsComment(response.data);
            setOpenComment(post_id);
            setReload(!reload);
            setdesable(desable.filter(e => e !== post_id+'C'));
        })
        .catch((err) => {
            console.log(err)
            setdesable(desable.filter(e => e !== post_id+'C'));
        })
    }
    function postRepost (post_id){
        axios.post(`${url}/repost`, {}, {headers: { authorized: token }, params: {post_id}})
        .then((response) => {
            setReload(!reload);
            setdesable(desable.filter(e => e !== post_id+'R'));
        })
        .catch((err) => {
            console.log(err)
            setdesable(desable.filter(e => e !== post_id+'R'));
        })
    }
    function deleteRepost (repost_id){
        axios.delete(`${url}/repost`, {}, {headers: { authorized: token }, params: {repost_id}})
        .then((response) => {
            setReload(!reload);
            setdesable(desable.filter(e => e !== repost_id+'T'));
        })
        .catch((err) => {
            console.log(err)
            setdesable(desable.filter(e => e !== repost_id+'T'));
        })
    }
    ////////////////////////

    function calcMi(numTotal) {
        return (
            numTotal < 1000 ? 
            numTotal : numTotal < 1000000 ? parseInt(numTotal / 1000) + ' K'
            : parseInt(numTotal / 1000000) + ' MI'
        );
    }
    
    if ( postsLinks.length ===  0 ){
        return <></>
    } else {
        return (<>
            <NewPosteds new={newPosts > 0}>{newPosts} new posts, load more!</NewPosteds>

            <InfiniteScroll
            loadMore={() => {setPage(page); setReload(!reload); console.log(page); setTest(false)}}
            hasMore={test}
            initialLoad={false}
            //loader={<Loading key={0}></Loading>}
        >{
            postsLinks.map(posted => {
                return (posted.posts.map((e, i) => {
                const info = posted.infos[i]
                const youLike = likes[0].likeUser.find(li => li.user != null) 
                const followLike = likes[0].likeUser.filter(li => li.userFollower != null).map(li => li.userFollower);             
               
                return (
                    <ContentPosted 
                        repost={e.creat_user === e.post_user ? '276px' : '309px'} 
                        openComment={ openComment === e.id }
                        key={i} 
                    >
                        <CgRepeat className="reposted_icon"/><p className="reposted_name">Re-posted by <span>{e.post_user === userId ? 'you' : e.creat_userName}</span></p>
                        <Posteds>
                            <img className="userImg" src={e.user_image? e.user_image : userImage} alt="" />
                            <Likes>                    
                                { e.like != null ? 
                                    <FcLike className="heart-icon" 
                                        onClick={ () => {if ( e.post_user === e.creat_user){
                                            setdesable([...desable, e.id+'L']); 
                                            postLike(e.id);
                                        }} 
                                        } 
                                        onMouseEnter={() => {getLike(e.id)}}
                                        onMouseLeave={() => {setLikes([{likeUser: [], numLikes: 0}])}}
                                    /> : 
                                    <BiHeart className="heart-icon" 
                                        onClick={ () => {if ( e.post_user === e.creat_user){
                                            setdesable([...desable, e.id+'L']); 
                                            postLike(e.id);
                                        }} 
                                        }
                                        onMouseEnter={() => {getLike(e.id)}}
                                        onMouseLeave={() => {setLikes([{likeUser: [], numLikes: 0}])}} 
                                    /> 
                                }
                                <p className="p1">{calcMi(info.numLikes)} Likes</p>

                                <div className={info.numLikes > 0 && likes[1] === e.id ? "message-likes" : "displaynone"} >
                                    <CgZeit className="zeit-icon"/>
                                    <p className="p2">{youLike ? 'your' : ''} {followLike.length > 0 ? followLike.join(', ') : ''} e outras {info.numLikes - likes[0].likeUser.length} pessoas</p>    
                                </div>

                                <AiOutlineComment 
                                    className={ desable.includes(e.id+'C') ? "aux-icon desable" : "aux-icon" }
                                    style={{top: '56px'}} 
                                    onClick={(event) => {
                                        if (!desable.includes(e.id+'C') && e.post_user === e.creat_user) {
                                            getComment(e.id); 
                                            setdesable([...desable, e.id+'C']);
                                            setComment('');
                                            event.stopPropagation();
                                        }
                                    }}
                                />        

                                <p className="aux-icon p1" style={{top: '74px'}}>{calcMi(info.numComments)} Comments</p>

                                <CgRepeat className={ desable.includes(e.id+'R') ? "aux-icon desable" : "aux-icon" }
                                    style={{top: '100px'}} 
                                    onClick={() => {
                                        if (!desable.includes(e.id+'R') && e.post_user === e.creat_user) {
                                            postRepost(e.id)
                                        }
                                    }}
                                />
                                <p className="aux-icon p1" style={{top: '116px'}}>{calcMi(info.numRe_posts)} Re-post</p>

                            </Likes>
                            <ContentLinkPosted>
                                <p className="name" 
                                    onClick={() => {
                                        setRoute(`/post/${e.post_user}`); 
                                        setPostLinks([{posts: [], infos:[]}]);
                                        setPage(0); 
                                        setReload(!reload)
                                        }} 
                                    >{e.post_userName}</p>                   
                                {e.post_user === userId ? 
                                    <>
                                        <FaTrash className={desable.includes(e.id+'T') ? "icons desable" : "icons" } 
                                            style={ { right: "22px" } }                                         
                                            onClick={() => {
                                                if (!desable.includes(e.id+'T')) {
                                                    if (e.creat_user === e.post_user) {
                                                        deletePost(e.id);
                                                        setdesable([...desable, e.id+'T'])
                                                    } else {
                                                        deleteRepost(e.id);
                                                        setdesable([...desable, e.id+'T'])
                                                    }
                                                }
                                            }} 
                                        />                                        
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
                                            onKeyUp={(event) => {
                                                if (event.code === "Enter" && !event.shiftKey ){ 
                                                    setdesable([...desable, e.id+'E']); 
                                                    editPost(e.id) 
                                                }
                                            }}
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
                        <Comment 
                            open={ openComment === e.id }
                            onClick={(event) => event.stopPropagation()}
                        >
                            {openComment === e.id? postsComment.map(post => {
                                    return (
                                        <div key={post.id}>
                                            <img className="comment-img" src={post.image? post.image : userImage} alt=""></img>
                                            <p className="comment-name" 
                                                onClick={() => {
                                                    setRoute(`/post/${post.user_id}`); 
                                                    setPostLinks([{posts: [], infos:[]}]);
                                                    setPage(0); setReload(!reload);
                                                }}
                                            >{post.user_name}<span>{post.followers_id? ' • following' : ''}</span></p>
                                            <p className="comment-text">{post.text}</p>
                                        </div>
                                    )
                                }) : <></>
                            }
                            <img className="user-img" src={e.user_image? e.user_image : userImage} alt=""></img>
                            <input 
                                placeholder="write a comment..."
                                type="text" value={comment} 
                                onChange={(event) => setComment(event.target.value)}
                            />
                            <TbSend className={ desable.includes(e.id+'S') ? "send desable" : "send" }
                                onClick={() => {
                                    if (!desable.includes(e.id+'S')) {
                                        postComment(e.id); 
                                        setdesable([...desable, e.id+'S'])
                                    }
                                }}
                            />
                        </Comment>             
                    </ContentPosted>
                )
            })
            )})
        }</InfiniteScroll>
        </>)
    }
}