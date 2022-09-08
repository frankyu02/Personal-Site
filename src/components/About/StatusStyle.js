import styled from "styled-components";

const StatusWrapper = styled.div`
  width: 400px;
  height: 50%;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10;
  .content {
    background: white;
    position: absolute;
    bottom: 10%;
    width: 100%;
    height: ${(props) => (props.open ? "90%" : "0")};
    overflow: hidden;
    transition: 0.2s;
    background: var(--button);
    position: absolute;
    top: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    text-align: center;
    font-family: "Supermercado One";
    font-style: italic;
  }
  .item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 25%;
    position: relative;
    .subject {
      margin-left: 10px;
      font-family: "Rowdies";
    }
    .response {
      text-decoration: underline;
      position: absolute;
      left: 60%;
      font-family: "Supermercado One";
      text-align: left;
    }
  }

  .toggle {
    width: 100%;
    height: 10%;
    font-size: 30px;
    color: var(--button-text);
    background: var(--button);
    float: bottom;
    position: absolute;
    bottom: 0;
    border: none;
    cursor: pointer;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
      transition: 0.2s;
    }
  }
  @media (max-width: 500px) {
    width: calc(100% - 20px);
    right: 10px;
  }
`;
export { StatusWrapper };
