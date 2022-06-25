/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react";
import { AuthContext } from "./../temp/context";
import {
  NavBarTimeLine,
} from "./components/styledNavBar";
import { TbSearch } from "react-icons/tb";
import axios from "axios";
import image from "./components/index.jpeg";
import { DebounceInput } from 'react-debounce-input';
import userImage from "./components/user.svg"
import { useNavigate } from "react-router-dom";



export default function NavBar() {
    const Navigate = useNavigate()
    const { url, setRoute, setReload, reload, setPage, setPostLinks } = useContext(AuthContext);
    const [result, setResult] = useState([]);
    const userId = 1;

    let tokenObject = localStorage.getItem("tokenUser");
    let userObject = localStorage.getItem("user")

    console.log(localStorage)
    console.log(typeof(userObject))
      
    
    
    function getUsers(search) {
        axios.get(`${url}/users`, { headers: { Authorization: `Bearer ${JSON.parse(tokenObject)}` }, params: { search_user: search } })
            .then((response) => {
                setResult(response.data);
                console.log(response.data)
            })
            .catch((err) => {console.log(err)})   
    }

    return (
        <NavBarTimeLine search={result.length > 0? true : false}>
        <span onClick={() => {
            setRoute('/post'); 
            setPage(0); 
            setReload(!reload); 
            setPostLinks([{posts: [], infos:[]}]);
            }}
        >LINKR</span>
        <div className="divSearch">
            <DebounceInput
                placeholder="Search for people"
                minLength={2}
                debounceTimeout={300}
                onChange={event => getUsers(event.target.value)} 
            />
            <TbSearch className="search" onClick={() => setResult([])}/>
            {result.map(e => {
                return (
                    <div className="results">
                        <img className="searchImg" src={e.image? e.image : userImage} alt=""></img>
                        <p 
                            className="searchName"
                            onClick={() => {
                                setRoute(`/post/${e.id}`); 
                                setPage(0); 
                                setReload(!reload); 
                                setPostLinks([{posts: [], infos:[]}]);
                            }}
                        >{e.user_name}<span>{e.followers_id? ' • following' : ''}</span></p>
                    </div>
                )
            })}
            
        </div>

        <p onClick={() => {
              localStorage.clear();
              Navigate("/")
            }}>sair</p>

        <img className="userImg" src={`${JSON.parse(userObject)}`} alt="user_img" onClick={() => {
            setRoute(`/post/${userId}`); 
            setPage(0); setReload(!reload); 
            setPostLinks([{posts: [], infos:[]}]);
            }} 
        />
      </NavBarTimeLine>
    )
}