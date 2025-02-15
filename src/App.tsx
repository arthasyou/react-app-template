import { Suspense } from "react";
import "./App.css";
import TabBar from "./components/common/TabBar";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TabBar />
    </Suspense>
  );
};

export default App;
