import React, { useState } from "react"
import "@fontsource/rowdies";
import styled from "styled-components";
import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import SEO from "../components/SEO";
import RecipeDisplay from "../components/Misc/RecipeDisplay";
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    margin-bottom: 50px;
`;
export default function A(){
    const [recipe, setRecipe] = useState();
    function getRecipe(){
        fetch('https://api.spoonacular.com/recipes/random?apiKey=3d5ee971653049b698198efc9aaac317&tags=dinner,main').then(response => response.json()).then(data =>{
            console.log('DATA', data.recipes[0]);
            setRecipe(data.recipes[0]);
        })
    }
    return(
        <>
            <SEO title="Recipe Generator" description="Fetch me a random recipe"/>
            <div className="container">
                <Wrapper>
                    <AwesomeButtonProgress
                     type="primary"
                     action={(element, next) => {
                        //  getRecipe();
                        //  next();
                        fetch('https://api.spoonacular.com/recipes/random?apiKey=3d5ee971653049b698198efc9aaac317&tags=dinner,main')
                        .then(response => response.json())
                        .then(data =>{
                        console.log('DATA', data.recipes[0]);
                        setRecipe(data.recipes[0]);
                        next();
                        })
                      }}
                      loadingLabel="Fetching .."
                     >
                        Find me a Random Recipe
                    </AwesomeButtonProgress>
                    {recipe && 
                    <>
                        <h1>{recipe.title}</h1> 
                        <RecipeDisplay recipe={recipe} />
                    </>
                    }
                </Wrapper>
            </div>
        </>
    )
}