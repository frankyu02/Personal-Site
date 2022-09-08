import styled from "styled-components";

const Wrapper = styled.div`
  outline: 1px solid var(--paragraph);
  width: 100%;
  height: 80px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 200;
  background: white;
  .OpenBtn {
    width: 80px;
    height: 100%;
    border-right: 1px solid black;
    position: absolute;
    visibility: hidden;
    padding-top: 15px;
    padding-left: 15px;
  }
  @media (max-width: 500px) {
    .OpenBtn {
      visibility: visible;
    }
  }
`;
const Pages = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  background: var(--background);
  border-right: 1px solid var(--paragraph);
  a {
    text-decoration: none;
    font-size: 18px;
    font-family: "Rowdies";
    color: white;
  }
  .linkHolder {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.5);
      transition: 0.3s;
    }
  }
  @media (max-width: 500px) {
    position: absolute;
    flex-direction: column;
    height: calc(100vh - 80px);
    top: 80px;
    z-index: 100;
    overflow: hidden;
    width: ${(props) => (props.isOpen ? "80%" : "0")};
    transition: 0.3s;
    .linkHolder {
      width: 100%;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
      &:hover {
        transform: none;
        a {
          color: #0a93c4;
        }
      }
    }
  }
`;
const Media = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--background);
  a {
    transition: all 0.2s ease-in-out;
    color: white;
    font-size: 18px;
  }
  .linkedIn {
    &:hover {
      transform: scale(1.5);
      transition: 0.3s;
      color: #0a93c4;
    }
  }
  .Github {
    &:hover {
      transform: scale(1.5);
      transition: 0.3s;
      color: #a45abf;
    }
  }
  .Mail {
    &:hover {
      transform: scale(1.5);
      transition: 0.3s;
      color: #738adb;
    }
  }
  @media (max-width: 500px) {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
`;

export { Wrapper, Pages, Media };
