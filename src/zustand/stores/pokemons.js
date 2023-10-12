import create from "zustand";
import APICall from "../../api/API";

const usePokemonStore = create( (set,get) => ({
    getPokemon: async() =>{
        try {
            set({hasError: false, isLoading:true, errorMessage:""});
            // throw new Error("Hey!");
            const pokemonsResult = await APICall({
                url: ' https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
            });
            set({pokemons: pokemonsResult.results});
          } catch (error) {
            //Aqui caería el error en caso que caiga la llamda a la API
            set({ 
                pokemons: [], 
                hasError:true, 
                errorMessage:"Nuestros pokemones están un poco timidos, intentalo más tarde"
            });
          }finally{
            set({isLoading: false});
          }
    }, 
    pokemons: [],

    getPokemonDetail: async (id) =>{
        if(!id) Promise.reject("Indicar pokemon a analizar") ;
        try {
            set({isLoading: true, hasError: false})
            // throw new Error("Hey!");
            const pokemonResult = await APICall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}/`
            });
            set({pokemon: pokemonResult});
        } catch (error) {
            // Sonido de pokebola dañada
            set({ 
                pokemon: {},
                hasError:true, 
                errorMessage:"El pokemon no quiso salir de la pokebola, intentalo más tarde"
            });
        } finally{
            set({isLoading: false})
        }
    }, 
    pokemon: {}, 
    isLoading: false,
    hasError: false, 
    errorMessage: ""
}));

export default usePokemonStore;