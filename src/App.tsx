import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)

  //let redArr: number[] = []
  //let yellowArr: number[] = []
  const gridRef = useRef<HTMLElement>()
  const [redArr, updateRedArr] = useState<number[]>([])
  const [yellowArr, updateYellowArr] = useState<number[]>([])

  const setToken = (event: React.MouseEvent<HTMLElement>) => {
    let gridIndex: number = parseInt((event.target as HTMLButtonElement).value)
    let col: number = gridIndex % 7
    let row: number = Math.floor(gridIndex / 7)
    console.log(`Current field: ${gridIndex}`)
    console.log(`Col: ${col}`)
    console.log(`Row: ${row}`)
    row = 5
    let tmpField: number = 0
    while (row >= 0) {
      tmpField = (row * 7) + col
      if (redArr.includes(tmpField) || yellowArr.includes(tmpField)) {
        row--
      }
      else {
        let color: string = ""
        if (count % 2 === 0) {
          updateRedArr(arr => [...arr, tmpField])
          color = "bg-red-500"
        }
        else {
          updateYellowArr(arr => [...arr, tmpField])
          color = "bg-yellow-500"
        }
        gridRef.current?.children[tmpField].classList.remove("bg-white")
        gridRef.current?.children[tmpField].classList.add(color)
        setCount(count + 1)
        break
      }
    }
    console.log(redArr)
    console.log(yellowArr)
    //Check if won
    console.log(tmpField)
  }

  return (
    <div className="App">
      <div className="round">Round: {count}</div>

      <div className="grid bg-blue-500 grid-cols-7 gap-4 p-4" ref={gridRef}>
        {Array.from(Array(42)).map((currElement, index) =>
          <button onClick={setToken} value={index} className="aspect-square bg-white rounded-full"> {index} </button>
        )}
      </div>
    </div>
  )
}

export default App
