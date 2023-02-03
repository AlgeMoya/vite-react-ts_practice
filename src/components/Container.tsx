import React, { useState } from "react";
import Section from "./Sections";

export default function Container() {
    const [count, setCount] = useState(1);
    type A = "a" | "b";
    let a:A;

    return (
        <div>
            <h3>Container</h3>
            <Section count={count} setCount={setCount} />
        </div>
    );
}