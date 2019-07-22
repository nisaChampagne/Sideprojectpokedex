import React from "react";
import ButtonExampleShorthand from "./PokeButtons";

function PokeHeader(props) {
    return (
        <div>
            <h1>Not A PokeDex</h1>
            <ButtonExampleShorthand onClick={props.visitPrev} content="Prev"></ButtonExampleShorthand>
            <ButtonExampleShorthand onClick={props.visitNext} content="Next"></ButtonExampleShorthand>
        </div >
    )
};

export default PokeHeader;