import { useContext } from "react";
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

export default function Timeline() {
  const {  setEdit  } = useContext(AuthContext);
  return (
    <DivMainTimeLine onClick={() => setEdit(-1) }>
      <NavBarTimeLine>
        <span>LINKR</span>
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
