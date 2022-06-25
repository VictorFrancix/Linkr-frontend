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
import { useNavigate } from "react-router-dom";


export default function Timeline() {
  const { setEdit, setOpenComment } = useContext(AuthContext);
  let userObject = localStorage.getItem('user')

  return (
    <>
    <NavBar/>
    <DivMainTimeLine onClick={() => {setEdit(-1); setOpenComment('')} }>
      <DivPostsTimeline>
        <h3>Timeline</h3>
        <WritePostTimeLine>
          <img src={`${JSON.parse(userObject)}`} alt="" />
          <FormPosted/>
        </WritePostTimeLine>
        <LinksPosted/>
      </DivPostsTimeline>
      <TrendingHashtags/>
    </DivMainTimeLine>
    </>
  );
}