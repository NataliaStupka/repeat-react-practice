import PaintingList from "./components/PaintingList";
import Section from "./components/Section";

import paintings from './paintings.json'



//   PaintingList - це ?children, передаємо paintings (масив об'єктів)   */
function App() {
    return (
        <div>
            <Section title='Топ тижня:'>
                <PaintingList  items={paintings} />
            </Section>

            <Section title='Краще:'></Section>
        </div>
    )
}

export default App;