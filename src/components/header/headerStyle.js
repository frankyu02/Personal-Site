import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 80px;
    display: flex;
    position: sticky;
    .OpenBtn{
        width: 80px;
        height: 100%;
        border-right: 1px solid black;
        position: absolute;
        visibility: hidden;
        button{
            width: 100%;
            height: 100%;
            background: white;
            border: none;
            cursor: pointer;
        }
    }
    .CloseBtn{
        width: 80px;
        height: 100%;
        border-right: 1px solid black;
        position: absolute;
        visibility: hidden;
        button{
            width: 100%;
            height: 100%;
            background: white;
            border: none;
            cursor: pointer;
            font-size: 20px;
        }
    }
    @media (max-width: 500px){
        .OpenBtn{
            visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
        }
        .CloseBtn{
            visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
        }
    }
`;
const Pages = styled.div`
    border-right: 1px solid black;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #0a93c4;
    background: white;
    a{
        text-decoration: none;
        font-size: 18px;
        font-family: "Rowdies";
            & : visited{
                color: #0a93c4;
            }
    }
    .linkHolder{
        & : hover{
                transform: rotate(-10deg);
                transition: 0.3s;
                a{
                    color: #3ede89;
                }
            }
    }
    @media (max-width: 500px){
        position: absolute;
        flex-direction: column;
        height: calc(100vh - 80px);
        top: 80px;
        z-index: 100;
        visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
        width: 70%;
        .linkHolder{
            width: 100%;
            height: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            & : hover{
                transform: none;
                a{
                    color: #0a93c4;
                }
            }
        }
    }
`
const Media = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
        color: black;
        font-size: 18px;
    }
    .linkedIn{
        & : hover{
            color: #0a93c4;
        }
    }
    .Github{
        & : hover{
            color: #a45abf;
        }
    }
    .Disc{
        & : hover{
            color: #738ADB;
        }
    }
    @media (max-width: 500px){
        width: calc(100% - 80px);
        padding-left: 80px;
    }
`;

export{
    Wrapper,
    Pages,
    Media
}