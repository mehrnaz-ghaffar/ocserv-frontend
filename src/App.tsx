import { useEffect } from "react";
import OStepper from "./UI/Stepper/OStepper";
import useAxios from "./hooks/useAxios";

function Test1() {
  return <p>hiiiiiiiiiiiiiiii</p>;
}

function Test2() {
  return <p>twooooooooooooooooo</p>;
}

function Test3() {
  return <p>lasttttttttttttttttt</p>;
}

function App() {
  const {
    data: users,
    error,
    loading,
    refetch,
  } = useAxios("http://79.175.189.135:8080/api/v1/users", "GET");

  useEffect(() => {
    refetch(); // Ensures the request is made when the component mounts
  }, []);

  console.log("axios", users, loading, error);

  const steps = [
    { name: "Step 1", component: <Test1 /> },
    { name: "Step 2", component: <Test2 /> },
    { name: "Step 3", component: <Test3 /> },
  ];

  return (
    <>
      <div className="w-screen h-screen text-center">
        <OStepper steps={steps} />
      </div>
    </>
  );
}

export default App;
