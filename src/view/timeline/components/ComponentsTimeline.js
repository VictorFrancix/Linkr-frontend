import styled from "styled-components";

export const DivMainTimeLine = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333333;
  font-family: "Passion One";
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NavBarTimeLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 7vh;

  background: #151515;

  color: #ffffff;
  font-weight: 700;
  font-size: 32px;

  span {
    margin-left: 2vh;
  }
`;

export const DivPostsTimeline = styled.div`
  width: 60vw;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 4.875em 0 0 0;

  h3 {
    color: #ffffff;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
  }
`;

export const WritePostTimeLine = styled.div`
  display: flex;

  width: 38.1875em;
  height: 13.0625em;

  border-radius: 1em;
  padding: 1.375em;

  background: #ffff;

  img {
    width: 3.125em;
    height: 3.125em;
    border-radius: 1.625em;
  }
`;

export const InputsFormPost = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1.375em;
  font-family: "Lato";

  input {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    color: #949494;

    width: 31.4375em;

    margin: 0.3125em 0 0.3125em 0;
    padding: 0.3125em 0.75em 0.3125em 0.75em;

    background: #efefef;

    border-radius: 0.3125em;
    border: none;
    outline: none;
  }
  #text-post {
    height: 4.125em;
  }
  #link {
    height: 1.875em;
  }
  p {
    font-size: 20px;
    color: #707070;
    padding: 0.5em 0;
  }
  button {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;

    width: 7em;
    height: 1.9375em;
    border: none;
    outline: none;
    background: #1877f2;
    border-radius: 0.3125em;
  }
`;
export const LinksPosted = styled.div`
    
    margin-top: 29px;

    position: relative;

    width: 38.1875em;
    height: 13.0625em;

    border-radius: 1em;
    padding: 1.375em;

    background: #171717;

    img {
        position: absolute;
        top: 17px;
        left: 18px;
        width: 3.125em;
        height: 3.125em;
        border-radius: 1.625em;
    }
    .icons {
        position: absolute;
        top: 23px;
        font-size: 15px;
        color: white;
        cursor: pointer;  
    }
`;

export const ContentLinkPosted = styled.div`
    p {
        margin: 0;
        position: absolute;
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #ffffff;
    }
    .name {
        width: 502px;
        height: 23px;
        left: 86px;
        top: 19px;
    }
`;

export const Input = styled.div`
    position: absolute;
    width: 503px;
    height: 44px;
    left: 87px;
    top: 49px;
    textarea {
        box-sizing: border-box;
        padding: 4px;
        width: 100%;
        height: 100%;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #4C4C4C;
        border-radius: 7px;
        border: none;
    }
    h2 {
        margin: 0;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
    }
`
export const Likes = styled.div`
    position: absolute;
    transform: translate(-50%, 0);
    left: 42px;
    top: 91px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .message-likes {
        margin-top: 14px;
        padding-inline: 4px;
        position: relative;
        width: max-content;
        height: 24px;
        border-radius: 3px;
        background-color: white;
        display: none;
        align-items: center;
    }
    .heart-icon {
        font-size: "20px";
        color: "white";
        cursor: pointer;
    }
    .zeit-icon {
        position: absolute;
        top: -19px;
        left: calc(50% - 14px);
        color: white;
        font-size: 28px;
    }
    .p1 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        text-align: center;
        color: #FFFFFF;
        margin-block: 4px;
    }
    .p2 {
        width: 100%;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 9px;
        line-height: 13px;
        color: #505050;
        text-align: center;
    }
    &:hover {
        .message-likes {
            display: flex;
        }  
    }
`