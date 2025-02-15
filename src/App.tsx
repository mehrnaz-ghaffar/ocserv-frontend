import OStepper from "./UI/Stepper/OStepper";

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
  const steps = [
    { name: "Step 1", component: <Test1 /> },
    { name: "Step 2", component: <Test2 /> },
    { name: "Step 3", component: <Test3 /> },
  ];

  return (
    <>
      <div className="w-80">
        <OStepper steps={steps} />
      </div>
    </>
  );
}

export default App;
