import styled from "styled-components";

export const NavBarTimeLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
  height: 72px;
  background: #151515;
  color: #ffffff;
  font-weight: 700;
  font-size: 32px;
  span {
    margin-left: 2vh;
    cursor: pointer;
  }
  input {   
    box-sizing: border-box;
    padding-left: 17px;
    border-radius: 8px;
    width: 100%;
    height: 45px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
  }
  .divSearch {
    background-color: #E7E7E7;
    position: absolute;
    width: 563px;
    height: ${props => props.search? '176px' : '45px'};
    left: calc(50% - 281.5px);
    top: 14px;
    overflow: auto;
  }
  .search {
    position: absolute;
    right: 16px;
    top: 12px;
    font-size: 23px;
    color: #C6C6C6;
    cursor: pointer;
  }
  .results {
    width: 100%;
    height: 60px;
    margin-block: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .searchImg {
    margin-left: 17px;
    width: 39px;
    height: 39px;
    border-radius: 1.625em;
  }
  .searchName {
    margin-left: 12px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
  }
  span{
    color: #C5C5C5;
  }
  .userImg {
    width: 53px;
    height: 53px;
    border-radius: 1.625em;
    cursor: pointer;
  }
  div{border-radius: 16px;}

  p {
    margin-left: 82% !important;
    font-size: 18px;
  }

`;