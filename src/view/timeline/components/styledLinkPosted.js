import styled from "styled-components";

export const ContentPosted = styled.div`
    height: ${(props) => props.repost};
    width: 611px;

    border-radius: 16px;
    margin-bottom: 16px;
    background-color: #1E1E1E;
    position: relative;

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

    .userImg {
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
        font-size: 20px;
        color: #FFFFFF;
        cursor: pointer;
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
    &:hover {
        .message-likes {
            display: flex;
        }  
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