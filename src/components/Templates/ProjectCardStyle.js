import styled from "styled-components";

const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 25px;
    width: 45%;
    height: 450px;
    display: flex;
    padding: 30px 25px;
    position: relative;
    background: rgb(23,123,145);
    background: linear-gradient(22deg, rgba(23,123,145,1) 0%, rgba(28,148,173,1) 16%, rgba(32,175,205,1) 26%, rgba(15,191,228,1) 34%, rgba(115,224,238,0.9612219887955182) 43%, rgba(237,253,255,1) 60%);
    .left{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        img{
            width: 70%;
            max-width: 200px;
            height: auto;
        }
        .languages{
            p{
                font-family: "Source Sans Pro";
                margin-top: 0;
                font-size: 25px;
                color: #e6e6e6;
            }
            h2{
                margin-bottom: 0;
                margin-top: 0;
                font-family: anton;
                font-style: italic;
                font-size: 30px;
            }
        }
    }
    .right{
        width: 50%;
        height: 100%;
        p{
            margin-top: 0;
        }
        .date{
            text-align: right;
            font-family: "Inter";
            font-size: 15px;
        }
        .description{
            overflow-y: auto;
            margin-top: 30px;
            font-family: "Source Sans Pro";
            font-size: 16px;
            max-height: 40%;
        }
        h2{
            border-bottom: 1px solid black;
            margin: 0;
            font-family: anton;
            font-size: 38px;
        }
    }
    .github{
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: 10px;
        text-align: center;
        font-size: 30px;
        & : hover{
            color: var(--green);
        }
    }
    @media (max-width: 1400px){
        .left{
            img{
                width: 100%;
            }
            .languages{
                padding-top: 30px;
                h2{
                    font-size: 25px;
                }
                p{
                    font-size: 20px;
                }
            }
        }
        .right{
            h2{
                font-size: 30px;
            }
        }        
    }
    @media(max-width: 1400px){
        padding: 0;
        padding-bottom: 30px;
        width: 90%;
        height: auto;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        .github{
            bottom: 0;
        }
        .left{
            padding: 0;
            width: 100%;
            flex-direction: column-reverse;
            .languages{
                padding: 0;
                p{
                    margin: 0;
                }
            }
        }
        .right{
            width: 100%;
        }
    }
`;

export {Wrapper};