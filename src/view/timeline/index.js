import { useContext } from "react";
import { AuthContext } from "./../temp/context";
import {
  DivMainTimeLine,
  DivPostsTimeline,
  WritePostTimeLine,
} from "./components/ComponentsTimeline";
import image from "./components/index.jpeg";
import LinksPosted from "./LinksPosted";
import FormPosted from "./FormPosted";
import NavBar from "./NavBar";
import TrendingHashtags from "./../trendings/index.js"


export default function Timeline() {
  const { setEdit, setOpenComment } = useContext(AuthContext);

  return (
    <DivMainTimeLine onClick={() => {setEdit(-1); setOpenComment('')} }>
      <NavBar/>

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
  );
}