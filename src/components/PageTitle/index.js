import styles from "./pageTitle.module.css"; 
import {Lobster} from 'next/font/google';

const lobster = Lobster({
        subsets: ["latin"],
        weight: "400",
    });

const PageTitle = ({ title }) => {
    
    return (
        <h1 className={lobster.className}>
            {title}
        </h1>
    );
}
export default PageTitle;