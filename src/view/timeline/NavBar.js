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


export default function NavBar() {
    const { url, setRoute, setReload, reload } = useContext(AuthContext);
    const [result, setResult] = useState([]);
    const userId = 1;

    const token = 142536    
    
    
    function getUsers(search) {
        axios.get(`${url}/users`, { headers: { authorized: token }, params: { search_user: search } })
            .then((response) => {
                setResult(response.data);
                console.log(response.data)
            })
            .catch((err) => {console.log(err)})   
    }

    return (
        <NavBarTimeLine search={result.length > 0? true : false}>
        <span onClick={() => {setRoute('/post'); setReload(!reload)}}>LINKR</span>
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
                        <p className="searchName">{e.user_name}<span>{e.followers_id? ' • following' : ''}</span></p>
                    </div>
                )
            })}
        </div>
        <img className="userImg" src={image} alt="" onClick={() => {setRoute(`/post/${userId}`); setReload(!reload)}} />
      </NavBarTimeLine>
    )
}