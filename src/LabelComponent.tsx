import { useState, useRef, useLayoutEffect } from "react";
import "./LabelComponent.css";

type LabelComponentParams = {
    text: string;
    expect: string;
};

export default function LabelComponent({ text, expect }: LabelComponentParams) {
    const [width, setWidth] = useState(0);
    const [isTwoLine, setIsTwoLine] = useState(false);
    const [output, setOutput] = useState(text.split(" ")[0] ?? "");

    const elementRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        if (elementRef.current) {
            setWidth(elementRef.current.scrollWidth);
            setIsTwoLine(
                elementRef.current.scrollWidth > elementRef.current.offsetWidth,
            );
        }

        setOutput(text);
    }, [text]);

    return (
        <div style={{ border: "1px solid black" }}>
            <p ref={elementRef} className={isTwoLine ? "two-line" : "one-line"}>
                {output}
            </p>

            <p>expect: {expect}</p>
            <p>actual: {isTwoLine ? "two-line" : "one-line"}</p>
            <p>{width}</p>
        </div>
    );
}
