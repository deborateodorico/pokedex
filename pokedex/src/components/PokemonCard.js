import React from 'react';

export default function PokemonCard({pokemon}) {
  let background = ""; 
  let borderPokemon = "";

  const changeCardColor = () => {
    if(pokemon.type[0] === "bug") {
      background = "linear-gradient(135deg, #5BC468 0%, rgba(91, 196, 104, 0.16) 100%)";
      borderPokemon = "1px solid #5BC468";
    } else if(pokemon.type[0] === "dragon") {
      background = "linear-gradient(135deg, #FF5775 0%, rgba(255, 87, 117, 0.12) 100%)";
      borderPokemon = "1px solid #FF5775";
    } else if(pokemon.type[0] === "fairy") {
      background = "linear-gradient(135deg, #F19AB5 0%, rgba(241, 154, 181, 0.12) 100%)";
      borderPokemon = "1px solid #F19AB5";
    } else if(pokemon.type[0] === "fire") {
      background = "linear-gradient(135deg, #EF8148 0%, rgba(239, 129, 72, 0.12) 100%)";
      borderPokemon = "1px solid #EF8148";
    } else if(pokemon.type[0] === "ghost") {
      background = "linear-gradient(135deg, #7E67F6 0%, rgba(126, 103, 246, 0.12) 100%)";
      borderPokemon = "1px solid #7E67F6";
    } else if(pokemon.type[0] === "ground") {
      background = "linear-gradient(135deg, #B94D2A 0%, rgba(185, 77, 42, 0.12) 100%)";
      borderPokemon = "1px solid #B94D2A";
    } else if(pokemon.type[0] === "normal") {
      background = "linear-gradient(135deg, #C5CCDC 0%, rgba(197, 204, 220, 0.12) 100%)";
      borderPokemon = "1px solid #C5CCDC";
    } else if(pokemon.type[0] === "psychic") {
      background = "linear-gradient(135deg, #F5629D 0%, rgba(245, 98, 157, 0.12) 100%)";
      borderPokemon = "1px solid #F5629D";
    } else if(pokemon.type[0] === "steel") {
      background = "linear-gradient(135deg, #8698C6 0%, rgba(134, 152, 198, 0.12) 100%)";
      borderPokemon = "1px solid #8698C6";
    } else if(pokemon.type[0] === "dark") {
      background = "linear-gradient(135deg, #687289 0%, rgba(104, 114, 137, 0.12) 100%)";
      borderPokemon = "1px solid #687289";
    } else if(pokemon.type[0] === "electric") {
      background = "linear-gradient(135deg, #F6C94F 0%, rgba(246, 201, 79, 0.12) 100%)";
      borderPokemon = "1px solid #F6C94F";
    } else if(pokemon.type[0] === "fighting") {
      background =  "linear-gradient(135deg, #E3524A 0%, rgba(227, 82, 74, 0.12) 100%)";
      borderPokemon = "1px solid #E3524A";
    } else if(pokemon.type[0] === "flying") {
      background = "linear-gradient(135deg, #599BD9 0%, rgba(89, 155, 217, 0.12) 100%)";
      borderPokemon = "1px solid #599BD9";
    } else if(pokemon.type[0] === "grass") {
      background = "linear-gradient(135deg, #3F8A84 0%, rgba(63, 138, 132, 0.12) 100%)";
      borderPokemon = "1px solid #3F8A84";
    } else if(pokemon.type[0] === "ice") {
      background = "linear-gradient(135deg, #78B6FF 0%, rgba(120, 182, 255, 0.12) 100%)";
      borderPokemon = "1px solid #78B6FF";
    } else if(pokemon.type[0] === "poison") {
      background = "linear-gradient(135deg, #A87EF7 0%, rgba(168, 126, 247, 0.12) 100%)";
      borderPokemon = "1px solid #A87EF7";
    } else if(pokemon.type[0] === "rock") {
      background = "linear-gradient(135deg, #A3A3AB 0%, rgba(163, 163, 171, 0.12) 100%)";
      borderPokemon = "1px solid #A3A3AB";
    } else if(pokemon.type[0] === "water") {
      background = "linear-gradient(135deg, #77D4F5 0%, rgba(119, 212, 245, 0.12) 100%)";
      borderPokemon = "1px solid #77D4F5";
    }
  }

  changeCardColor();
  return (
    <div key={pokemon.id} className="pokemon" style={{borderPokemon}}>
      <div className="pokemon-infos" style={{background}}>
        <p className="pokemon-id">#{("0000" + pokemon.id).slice(-4)}</p>
        <img src={pokemon.picture} alt={pokemon.name}/>
        <p className="pokemon-name">{pokemon.name}</p>
      </div>
      
      <div className="pokemon-type-wrapper">
        <div className="pokemon-type">{pokemon.type.map((item) => {
          let border
          if(item === "bug") {
            border = "1px solid #5BC468";
          } else if(item === "dragon") {
            border = "1px solid #FF5775";
          } else if(item === "fairy") {
            border = "1px solid #F19AB5";
          } else if(item === "fire") {
            border = "1px solid #EF8148";
          } else if(item === "ghost") {             
            border = "1px solid #7E67F6";
          } else if(item === "ground") {
            border = "1px solid #B94D2A";
          } else if(item === "normal") {
            border = "1px solid #C5CCDC";
          } else if(item === "psychic") {
            border = "1px solid #F5629D";
          } else if(item === "steel") {
            border = "1px solid #8698C6";
          } else if(item === "dark") {
            border = "1px solid #687289";
          } else if(item === "electric") {
            border = "1px solid #F6C94F";
          } else if(item === "fighting") {
            border = "1px solid #E3524A";
          } else if(item === "flying") {
            border = "1px solid #599BD9";
          } else if(item === "grass") {
            border = "1px solid #3F8A84";
          } else if(item === "ice") {
            border = "1px solid #78B6FF";
          } else if(item === "poison") {
            border = "1px solid #A87EF7";
          } else if(item === "rock") {
            border = "1px solid #A3A3AB";
          } else if(item === "water") {
            border = "1px solid #77D4F5";
          }
          return <p className="pokemon-type-paragraph" style={{border}}>{item}</p>
        })}</div>
      </div>
    </div>
  )
}
 