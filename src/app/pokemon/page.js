
import styles from "./pokemon.module.css";
import PageTitle from "@/components/PageTitle";
import {Lato} from 'next/font/google';

const lato = Lato({
        subsets: ["latin"],
        weight: "400",
        variable: "--font-lato",
    });


const PokemonPage  = () => {
  return (
    <div className={styles.page}>
      <PageTitle title="Pokemon Page" />
      <p>This is the Pokemon page.js</p>
      <p className={lato.className}>Here is some content with imported font LATO</p>
      <p>There are hundreds of different Pokemon in the world.</p>

    </div>
  );
}
export default PokemonPage;