import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid var(--blue);
  border-radius: 25px;
  width: 75%;
  height: 450px;
  display: flex;
  padding: 30px 25px;
  margin-left: 10%;
  position: relative;
  background: var(--image-background);
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    img {
      width: 70%;
      max-width: 200px;
      height: auto;
    }
    .languages {
      p {
        font-family: "Source Sans Pro";
        margin-top: 0;
        font-size: 25px;
      }
      h2 {
        margin-bottom: 0;
        margin-top: 0;
        font-family: "Anton";
        font-style: italic;
        font-size: 30px;
      }
    }
  }
  .right {
    width: 50%;
    height: 100%;
    p {
      margin-top: 0;
    }
    .date {
      text-align: right;
      font-family: "Inter";
      font-size: 15px;
    }
    .description {
      overflow-y: auto;
      margin-top: 30px;
      font-family: "Source Sans Pro";
      font-size: 16px;
      max-height: 40%;
    }
    h2 {
      border-bottom: 1px solid black;
      margin: 0;
      font-family: anton;
      font-size: 38px;
    }
  }
  .github {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: center;
    font-size: 50px;
    &:visited {
      color: black;
    }
    &:hover {
      color: #8200ad;
      transition: 0.3s;
    }
  }
  @media (max-width: 1400px) {
    .left {
      img {
        width: 100%;
      }
      .languages {
        padding-top: 30px;
        h2 {
          font-size: 25px;
        }
        p {
          font-size: 20px;
        }
      }
    }
    .right {
      h2 {
        text-align: center;
        font-size: 30px;
      }
    }
    .github {
      font-size: 30px;
    }
  }
  @media (max-width: 969px) {
    padding: 0;
    padding-bottom: 30px;
    width: 90%;
    height: auto;
    min-height: 520px;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    border-radius: 10px;
    margin-right: 5%;
    margin-left: 5%;
    .github {
      bottom: 0;
      &:hover {
        color: black;
      }
    }
    .left {
      padding: 0;
      width: 100%;
      flex-direction: column-reverse;
      .languages {
        padding: 0;
        p {
          margin: 0;
        }
      }
    }
    .right {
      width: 99%;
    }
  }
`;

export { Wrapper };
