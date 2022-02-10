import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import "@fontsource/anton"
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    p{
        margin: 0;
        font-size: 15px;
    }
    button{
        width: 150px;
        height: 25px;
        background: var(--green);
    }
`
const QuantityWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        font-family: "anton";
        margin: 0 20px;
        font-size: 30px;
    }
    button{
        width: auto;
        height: auto;
        background: transparent;
        border: none;
        font-size: 50px;
    }
`
export default function Quantity(){
    const [quantity, SetQuantity] = useState(0);
    var output = '';
    const add = (e) => {
        e.preventDefault();
        SetQuantity((q) => q + 1 );
    }
    const subtract = (e) => {
        e.preventDefault();
        SetQuantity((q) => q - 1 );
    }
    const reset = (e) => {
        e.preventDefault();
        SetQuantity(0);
    }
    if(quantity === 0){
        output = '';
    } else if(quantity >= 300){
        output = 'huh You really uh... into this clicker arent ya?';
    } else if(quantity >= 500){
        output = 'alright buddy lets calm down now'
    } else if(quantity >= 1000){
        output = 'alright Im going to just head out then... you enjoy urself now';
    } else if(quantity >= 50){
        output = 'wow more than 49 clicks... thats gotta be a record somewhere';
    }
    console.log(output);
    return(
        <Wrapper>
        <QuantityWrapper>
            <button onClick={subtract} disabled = {quantity <= 0}>
                <AiFillMinusSquare className="button"/>
            </button>
            <p>{quantity}</p>
            <button onClick={add}>
                <AiFillPlusSquare />
            </button>
        </QuantityWrapper>
        <button onClick={reset} disabled={quantity === 0}>reset</button>
        <p>{output}</p>
        </Wrapper>
    )
}