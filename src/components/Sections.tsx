import React, { useState } from "react";

type SectionType = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Section({ count, setCount }; SectionType) {
    const onPressButton = (value: number) => {
        setCount(value);
    };

    return (
        <div>
            {count}
            <button onClick={() => onPressButton(2)}>Click!</button>
        </div>
    );
}