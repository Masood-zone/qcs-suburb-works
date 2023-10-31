import { Routes, Route } from "react-router-dom";
import Layout from "../../components/layout";
import Cities from "./City";
import NewCity from "./City/NewCity";

export default function MainApp() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/cities" element={<Cities />} />
          <Route path="/newCity" element={<NewCity />} />
        </Route>
      </Routes>
    </div>
  );
}
