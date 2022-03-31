import Title from "./components/Title";
import Travel from "./components/Travel";
import travelData from "./components/travelData";

export default function App() {
  const newTravelData = travelData.map((item) => {
    return (
      <div>
        <Travel key={item.id} {...item} />
      </div>
    );
  });

  return (
    <div className='project'>
      <Title />
      {newTravelData}
    </div>
  );
}
