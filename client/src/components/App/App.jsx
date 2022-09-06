import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import ProductTable from "../ProductTable";
import Loader from "../Loader";
import { authorize } from "../../store/actionCreators";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.isLoading);

  useEffect(
    () => {
      dispatch(authorize(true));
    },
    []
  );

  if (isLoading) return <Loader />;
  return (
    <div className="App">
      <h1 className="text-3xl font-mono text-center font-bold my-4">
        Finance test task by Alex Verbovskiy
      </h1>
      <ProductTable />
    </div>
  );
};

export default App;
