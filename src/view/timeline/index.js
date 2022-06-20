import { useContext, useState } from "react";
import { AuthContext } from "./../temp/context";
import {
  DivMainTimeLine,
  DivPostsTimeline,
  WritePostTimeLine,
  NavBarTimeLine,
  InputsFormPost,
} from "./components/ComponentsTimeline";
import image from "./components/index.jpeg";
import LinksPosted from "./LinksPosted";
import { TbSearch } from "react-icons/tb";


export default function Timeline() {
  const {  setEdit  } = useContext(AuthContext);
  const [search, setSearch] = useState();
  return (
    <DivMainTimeLine onClick={() => setEdit(-1) }>
      <NavBarTimeLine>
        <span>LINKR</span>
        <div className="divSearch">
          <input value={search} 
            onChange={(event) => setSearch(event.target.value)} 
            placeholder="Search for people" 
            />
            <TbSearch className="search"/>
        </div>
        <img className="userImg" src={image} alt="" />
      </NavBarTimeLine>
      <DivPostsTimeline>
        <h3>Timeline</h3>
        <WritePostTimeLine>
          <img src={image} alt="" />
          <InputsFormPost>
            <p>What are you going to share today?</p>
            <input type="text" id="link" />
            <input type="text" id="text-post" />
            <button>Publish</button>
          </InputsFormPost>
        </WritePostTimeLine>
        <LinksPosted/>
      </DivPostsTimeline>
    </DivMainTimeLine>
  );
}
