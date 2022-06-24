import styled from "styled-components";

export const ContentPosted = styled.div`
    height: ${(props) => props.repost};
    width: 611px;

    border-radius: 16px;
    margin-bottom: 16px;
    background-color: #1E1E1E;
    position: relative;

    margin-bottom: ${(props) => props.openComment? '370px' : '16px'};

    .reposted_name {
        position: absolute;
        top: 10px;
        left: 39px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF;
    }
    span {
        font-weight: bold;
    }
    .reposted_icon {
        position: absolute;
        top: 3px;
        left: 10px;
        color: #FFFFFF;
        font-size: 26px;
    }
    .displaynone {
        display: none;
    }
`

export const Posteds = styled.div`
    
    position: absolute;
    bottom: 0;
    
    width: 611px;
    height: 276px;
    box-sizing: border-box;

    border-radius: 1em;
    padding: 1.375em;

    background: #171717;
    z-index: 1;

    .userImg {
        position: absolute;
        top: 17px;
        left: 18px;
        width: 3.125em;
        height: 3.125em;
        border-radius: 1.625em;
        cursor: pointer;
    }
    .icons {
        position: absolute;
        top: 23px;
        font-size: 15px;
        color: white;
        cursor: pointer;  
    }
`;
export const Comment = styled.div`
    box-sizing: border-box;
    padding-top: 25px;
    width: 611px;
    height: 350px;
    border-radius: 16px;
    background-color: #1E1E1E;
    position: absolute;
    bottom: -325px;                         ///////////////
    display: ${(props) => props.open? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    input {
        box-sizing: border-box;
        padding-left: 15px;
        position: absolute;
        color: #F3F3F3;
        bottom: 25px;
        left: 78px;
        width: 510px;
        height: 39px;
        background-color: #252525;
        border-radius: 8px;
        border: none;
        font-family: 'Lato';
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }
    input::placeholder {
        background-color: #252525;
        border-radius: 8px;
        color: #575757;
    }
    .send {
        font-size: 19px;
        position: absolute;
        bottom: 36px;
        right: 38px;
        color: #F3F3F3;
        cursor: pointer;
    }
    img {
        position: absolute;
        width: 39px;
        height: 39px;
        border-radius: 1.625em;
    }
    .user-img {
        bottom: 25px;
        left: 25px;
    }
    .comment-img {
       bottom: 16px;
       left: 2px;
    }
    p {
        position: absolute;
        width: 400px;
        left: 62px;
    }
    .comment-name {
        top: 15px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #F3F3F3;
    }
    .comment-text {
        top: 35px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #ACACAC;
    }
    div {
        position: relative;
        width: 571px;
        height: 74px;
        margin-bottom: 5px;
        border-bottom: 1px solid #353535;        
    }
    
`
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
        align-items: center;
        display: flex;
        z-index: 1;
    }
    .heart-icon {
        font-size: 20px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .zeit-icon {
        position: absolute;
        top: -19px;
        left: calc(50% - 14px);
        color: white;
        font-size: 28px;
    }
    .aux-icon {
        position: absolute;
        font-size: 20px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .p1 {
        width: 80px;
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
`
export const Urlmetadata = styled.div`
    position: absolute;
    width: 503px;
    height: 155px;
    left: 87px;
    top: 101px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;

    cursor: pointer;

    h2 {
        margin: 24px 0 0 20px;
        width: 310px;
        height: 40px;
        overflow: hidden;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #CECECE;
    }
    .text {
        width: 310px;
        height: 39px;
        margin: 5px 0 0 20px;
        overflow: hidden;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #9B9595;
    }
    .ref {
        width: 310px;
        height: 13px;
        margin: 57px 0 0 20px;
        overflow: hidden;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #CECECE;
    }
    img {
        position: absolute;
        width: 153.44px;
        height: 155px;
        right: -1px;
        top: -1px;
        border-radius: 0px 10px 10px 0px;
    }
`