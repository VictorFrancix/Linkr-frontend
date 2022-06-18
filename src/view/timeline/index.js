import { BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { CgZeit } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import {
  DivMainTimeLine,
  DivPostsTimeline,
  WritePostTimeLine,
  NavBarTimeLine,
  InputsFormPost,
  LinksPosted,
  ContentLinkPosted,
  Input,
  Likes
} from "./components/ComponentsTimeline";
import image from "./components/index.jpeg";
import { useState } from "react";
export default function Timeline() {
  const [postsLinks, setPostLinks] = useState();

  const [ like, setLike ] = useState(false);
  const [ edit, setEdit ] = useState(false);
  const likes = 15234325;
  
  const [ value, setValue ] = useState("Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material")

  const numLikes = likes < 1000 ? likes : likes < 1000000 ? parseInt(likes / 1000) + ' MIL' : parseInt(likes / 1000000) + ' MI';

  return (
    <DivMainTimeLine onClick={() => setEdit(false) }>
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
        <LinksPosted>
                <img src={image} alt="" />
                <Likes>                    
                    { like ? 
                        <FcLike className="heart-icon" onClick={ () => setLike(!like) } /> : 
                        <BiHeart className="heart-icon" onClick={ () => setLike(!like) } /> 
                    }
                    <p className="p1">{numLikes} Likes</p>
                    <div className="message-likes">
                        <CgZeit className="zeit-icon"/>
                        <p className="p2">{'João'}, {'Maria'} e outras {likes - 2} pessoas</p>    
                    </div>
                </Likes>
                <ContentLinkPosted>
                    <p className="name">Juvenal Juvêncio</p>                    
                    { edit ? 
                        <>
                            <FaTrash className="icons" style={ { right: "22px" } }/>
                            <FaPencilAlt className="icons" style={ { right: "43px" } }/>
                        </> : "" 
                    }
                    <Input onClick={(event) => {setEdit(true); event.stopPropagation()}}>
                        {edit ? 
                            <textarea type="text" value={value} onChange={(event) => setValue(event.target.value)} ></textarea>
                            : 
                            <h2>{value}</h2>
                        }
                    </Input>
                    {/* <p>urlmetadata</p> */}
                </ContentLinkPosted>
            </LinksPosted>
      </DivPostsTimeline>
    </DivMainTimeLine>
  );
}
