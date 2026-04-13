import Link from "next/link";
import PageTitle from "@/components/PageTitle";

const PokemonLayout = ({children}) => {   
    return (
        <div> 
            <PageTitle title="Pokemon Layout" />
            <div>
                <Link href="/pokemon/types">Types</Link>
                <Link href="/pokemon/species">Species</Link>
            </div>
            {children}
        </div>
    )
}
export default PokemonLayout;



