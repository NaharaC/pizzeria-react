import { Header } from "../components/Header";
import { useContext } from "react";
import { CardContext } from "../context/CardProvider";

export const Home = () => {
    
    const {renderCard} = useContext(CardContext)

    return <>
            <Header/>
            <div className="d-flex p-4 justify-content-around flex-wrap">
            {renderCard()}
            </div>
        </>;
};
