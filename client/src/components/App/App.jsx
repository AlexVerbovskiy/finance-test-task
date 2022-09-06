import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import AppBody from "../AppBody";
import Loader from "../Loader";
import { authorize } from "../../store/actionCreators";

const App = () => {
  const dispatch = useDispatch();
  const {main: tempProduct} = useSelector(state => state);
  const {isLoading, isAuth} = tempProduct;

  useEffect(() => {
    dispatch(authorize(true));
  }, []);

  if (isLoading) return <Loader />;

  if (isAuth)
    return (
      <div className="App">
        <h1 className="text-3xl font-mono text-center font-bold my-4">
          Finance test task by Alex Verbovskiy
        </h1>
        <AppBody />
      </div>
    );

  return <div>Error! Write me if you see this message!</div>;
};

export default App;
