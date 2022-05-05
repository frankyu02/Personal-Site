import React, { useState } from "react"
import "@fontsource/rowdies";
import styled from "styled-components";
import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import SEO from "../components/SEO";
import RecipeDisplay from "../components/Misc/RecipeDisplay";
import RecipeSearch from "../components/Misc/recipeSearch";
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    margin-bottom: 50px;
    .readmore{
        text-decoration: none;
        font-size: 25px;
        &:visited{
            color: var(--blue);
        }
        &:hover{
            font-style: italic;
            color: var(--green);
            transition: 0.2s;
            text-decoration:underline;
        }
    }
    .idtext{
        margin-top: 0;
    }
`;
export default function A(){
    const [recipe, setRecipe] = useState();
    const [err, setErr] = useState(false);
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
                    <p>or...</p>
                    <RecipeSearch setRecipe={setRecipe} setError={setErr} />
                    {err && 
                    <p>Sorry that ID is not valid. Please try another one.</p>
                    }
                    {recipe && 
                    <>
                        <h1>{recipe.title}</h1> 
                        <p className="idtext">ID: {recipe.id}</p>
                        <RecipeDisplay recipe={recipe} />
                        <a className="readmore" href={recipe.sourceUrl} target="_blank">Read More</a>
                    </>
                    }
                </Wrapper>
            </div>
        </>
    )
}