import React from "react";
import Img from "react-cool-img";
import styled from 'styled-components';
import { FaLeaf } from "react-icons/fa";
import { GiMuscleUp, GiWheat } from "react-icons/gi";
const Wrapper = styled.div`
    width: 100%;
    div{
        width: 100%;
    }
    .upper{
        display: flex;
        img{
            width: 50%;
        }
        div{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        span{
            font-weight: bold;
            font-size: 25px;
        }
        p{
            margin: 0;
            margin-top: 5px;
            width: 100%;
            padding-left: 10%;
            padding-right: 5%;
        }
        h2{
            margin-bottom: 0;
        }
        .summary{
            overflow: auto;
        }
    }
    .lower{
        display: flex;
        .ingredients{
            width: 50%;
            display: flex;
            flex-direction: column;
            h2{
                width: 100%;
                text-align: center;
            }
        }
        .Directions{
            width: 50%;
            display: flex;
            flex-direction: column;
            h2{
                width: 100%;
                text-align: center;
            }
        }
    }
    @media (max-width: 1000px){
        .upper{
            flex-direction: column;
            img{
                width: 100%;
            }
            div{
                width: 100%;
            }
        }
        .lower{
            flex-direction: column;
            .ingredients{
                width: 100%;
            }
            .Directions{
                width: 100%;
            }
        }
    }
`;

export default function RecipeDisplay({recipe}){
    return(
        <Wrapper>
            <div className="upper">
                <Img
                src={recipe.image}
                alt="Recipe Image" 
                />
                <div>
                    <h2>Overview</h2>
                    <p><span>Cooktime:</span> {recipe.readyInMinutes} Minutes</p>
                    <p><span>Recipe Serves: </span>{recipe.servings}</p>
                    {recipe.diets.length > 0 && 
                    <p><span>Diets:</span> {recipe.diets.join(', ')} </p> 
                    }
                    {recipe.vegetarian && 
                    <p><FaLeaf /> Vegetarian</p>
                    }
                    {recipe.veryHealthy && 
                    <p><GiMuscleUp /> Health Boost</p>
                    }
                    {recipe.glutenFree && 
                    <p><GiWheat /> Gluten Free</p>
                    }
                    <br></br>
                    <p className="summary" dangerouslySetInnerHTML={{__html: recipe.summary}}/>
                </div>
            </div>
            <div className="lower">
                    <div className="ingredients">
                        <h2>Ingredients:</h2>
                        <ul>
                            {recipe.extendedIngredients.map((item) =>{
                                return(
                                    <li>{parseFloat(item.measures["metric"].amount.toFixed(2))} {item.measures["metric"].unitShort} {item.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="Directions">
                        <h2>Instructions</h2>
                        <ol type="1">
                            {recipe.analyzedInstructions[0].steps?.map((step) => {
                                return(
                                    <li>{step.step}<br /><br /></li>
                                )
                            })}
                        </ol>
                    </div>
            </div>
        </Wrapper>
    )
}