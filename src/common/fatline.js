import React from "react";
import FooterBottom from "../common/FooterBottom";
const FatLine = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5,
                marginTop: 70
            }}
        />
    );
    return (
        <ColoredLine color=": #141414" />
    );
};

export default FatLine;
