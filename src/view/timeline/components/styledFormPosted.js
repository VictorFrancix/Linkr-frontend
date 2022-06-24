import styled from "styled-components";

export const InputsFormPost = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 1.375em;
    font-family: "Lato";

    .input {
        width: 488px !important;
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;

        color: #949494;

        width: 31.4375em;

        margin-top: 0.3125em;
        padding: 0.3125em 0em 0.3125em 0em;

        background: #efefef;

        border-radius: 0.3125em;
        border: none;
        outline: none;
    }
    .text-post {
        height: 4.125em;
    }
    .link {
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
        margin-left: 390px;
        margin-top: 8px;

        color: #ffffff;

        width: 7em;
        height: 1.9375em;
        border: none;
        outline: none;
        background: ${props => props.desable? '#707070' : '#1877f2'};
        border-radius: 0.3125em;
        border: none;
    }
`;