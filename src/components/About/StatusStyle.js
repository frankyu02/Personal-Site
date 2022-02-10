import styled from "styled-components";

const StatusWrapper = styled.div`
    width: 400px;
    height: 50%;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    .content{
        background: white;
        position: absolute;
        bottom: 10%;
        width: 100%;
        height: ${props => props.open ? '90%' : '0'};
        overflow: hidden;
        transition: 0.2s;
        background: linear-gradient(22deg, rgba(23,123,145,1) 0%, rgba(28,148,173,1) 16%, rgba(32,175,205,1) 26%, rgba(15,191,228,1) 34%, rgba(115,224,238,0.9612219887955182) 43%, rgba(237,253,255,1) 60%);
        .trivia{
            position: absolute;
            top: 0;
            margin: 0 auto;
            left: 0;
            right: 0;
            text-align: center;
            font-family: "Supermercado One";
            font-style: italic;
        }
        .item{
            display: flex;
            align-items: center;
            width: 100%;
            height: 25%;
            border: 1px solid var(--blue);
            border-bottom: 0;
            position: relative;
            .subject{
                margin-left: 10px;
                font-family: "Rowdies";
            }
            .response{
                text-decoration: underline;
                position: absolute;
                left: 60%;
                font-family: "Supermercado One";
            }
        }
    }
    .toggle{
        width: 100%;
        height: 10%;
        font-size: 30px;
        color: var(--green);
        background: var(--darkblue);
        float: bottom;
        position: absolute;
        bottom: 0;
        cursor: pointer;
        span{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
            transition: 0.2s;
        }
    }
    @media(max-width: 500px){
            width: calc(100% - 20px);
            right: 10px;
        }
`;
export{
    StatusWrapper,
}