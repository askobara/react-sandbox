import "./App.css";
import LabelComponent from "./LabelComponent.tsx";

export default function App() {
    return (
        <div className="main">
            <LabelComponent
                text={
                    "Modivoluptatibusvoluptatibusvoluptatibus Dolorem nihil iste velit maiores"
                }
                expect="two-line"
            />
            <LabelComponent
                text={"Modivolup Dolorem nihil iste velit maiores"}
                expect="one-line"
            />
            <LabelComponent
                text={
                    "Dolorem Modivoluptatibusvoluptatibusvoluptatibus nihil iste velit maiores"
                }
                expect="one-line"
            />
        </div>
    );
}
