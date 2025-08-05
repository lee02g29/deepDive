import AlertCard from "./components/AlertCard";
import Loading from "./components/Loading";
import Tap from "./components/Tap";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <>
      <AlertCard />
      <AlertCard info={true} />
      <AlertCard success={true} />
      <AlertCard warning={true} />
      <br />
      <br />

      <Tap />

      <br />
      <br />

      <Loading isLoading={true} />
      <Loading />

      <br />
      <br />

      <Checkbox />
    </>
  );
}

export default App;
