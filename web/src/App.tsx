interface ButtonProps {
  title: string;
}

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Button title="send 1" />
      <Button title="send 2"/>
      <Button title="send 3"/>
  </div>
  )
}

function Button(props: ButtonProps){
  return (
    <button> {props.title} </button>
  )
}

export default App
