import { useAppContext } from "./contexts/appContext"

function App() {
  const { missionaries } = useAppContext();

  console.log(missionaries)
  return (
    <>
      <div>
        Hello World
      </div>
    </>
  )
}

export default App
