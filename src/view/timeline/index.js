import { useContext, useState } from "react";
import { AuthContext } from "./../temp/context";
import {
  DivMainTimeLine,
  DivPostsTimeline,
  WritePostTimeLine,
  NavBarTimeLine,
} from "./components/ComponentsTimeline";
import image from "./components/index.jpeg";
import LinksPosted from "./LinksPosted";
import { TbSearch } from "react-icons/tb";
import FormPosted from "./FormPosted";
import TrendingHashtags from "./../trendings/index.js"


export default function Timeline() {
  const {  setEdit, setOpenComment, setRoute, setReload, reload } = useContext(AuthContext);
  const [search, setSearch] = useState();
  const userId = 1;

  return (
    <>
    <NavBarTimeLine>
        <span onClick={() => {setRoute('/post'); setReload(!reload)}}>LINKR</span>
        <div className="divSearch">
          <input value={search} 
            onChange={(event) => setSearch(event.target.value)} 
            placeholder="Search for people" 
            />
            <TbSearch className="search"/>
        </div>
        <img className="userImg" src={image} alt="" onClick={() => {setRoute(`/post/${userId}`); setReload(!reload)}} />
    </NavBarTimeLine>
    <DivMainTimeLine onClick={() => {setEdit(-1); setOpenComment('')} }>
      <DivPostsTimeline>
        <h3>Timeline</h3>
        <WritePostTimeLine>
          <img src={image} alt="" />
          <FormPosted/>
        </WritePostTimeLine>
        <LinksPosted/>
      </DivPostsTimeline>
      <TrendingHashtags/>
    </DivMainTimeLine>
    </>
  );
}
