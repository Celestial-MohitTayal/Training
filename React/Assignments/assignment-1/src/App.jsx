import FetchData from "./components/fetchData";
import ShowData from "./components/showData";

function App() {
  return (
    <div className="App">
      <h1>Data Fetching Using Class Component</h1>
      <FetchData render={(props) => <ShowData {...props} />} />
    </div>
  );
}

export default App;
