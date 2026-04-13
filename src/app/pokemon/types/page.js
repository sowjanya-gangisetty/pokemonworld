import {localFont} from "next/font/local"

const sairaStencil = localFont({
  src: [
    { path: "../../../../public/fonts/SairaStencil-Italic.ttf" },
  ],
  variable: "--font-saira-stencil",
  weight :"400",
  style: "italic",
  subsets: ["latin"],
})

const PokemonTypes = () => {    
    return (
        <div className={sairaStencil.className}>
            <h1>Pokemon Types page</h1>
        </div>
    );
}   
export default PokemonTypes;