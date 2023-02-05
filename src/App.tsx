import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const gridRef = useRef<HTMLDivElement>()
  const [redArr, updateRedArr] = useState<number[]>([])
  const [yellowArr, updateYellowArr] = useState<number[]>([])

  enum Player {
    Red = "RED",
    Yellow = "YELLOW"
  }
  const countWin = (winArr: number[], playerArr: number[]) => {
    let winCtr = 0
    winArr.forEach(currWinEl => {
      console.log(currWinEl)
      if (playerArr.includes(currWinEl)) {
        winCtr++
      }
    })
    return winCtr
  }

  const checkUpperRightDiagonal = (row: number, col: number, tmpField: number, currPlayer: Player) => {
    if (col > 2 && row > 2) {
      console.log(`currPlayer: ${currPlayer}`)
      console.log(`tmpField: ${tmpField}`)
      let winCtr: number = 0
      let winArr: number[] = [tmpField - 6, tmpField - 12, tmpField - 18]
      if (currPlayer === Player.Yellow) {
        winCtr = countWin(winArr, yellowArr)
      }
      else {
        winCtr = countWin(winArr, redArr)
      }
      if (winCtr === 3) {
        alert("WON UPPER RIGHT DIAGONAL")
      }
    }
  }

  const checkUpperLeftDiagonal = (row: number, col: number, tmpField: number, currPlayer: Player) => {
    if (col > 2 && row > 2) {
      console.log(`currPlayer: ${currPlayer}`)
      console.log(`tmpField: ${tmpField}`)
      let winCtr: number = 0
      let winArr: number[] = [tmpField - 8, tmpField - 16, tmpField - 24]
      if (currPlayer === Player.Yellow) {
        winCtr = countWin(winArr, yellowArr)
      }
      else {
        winCtr = countWin(winArr, redArr)
      }
      if (winCtr === 3) {
        alert("WON UPPER LEFT DIAGONAL")
      }
    }
  }

  const checkLowerRightDiagonal = (row: number, col: number, tmpField: number, currPlayer: Player) => {
    if (col < 4 && row > 1) {
      console.log(`currPlayer: ${currPlayer}`)
      console.log(`tmpField: ${tmpField}`)
      let winCtr: number = 0
      let winArr: number[] = [tmpField + 8, tmpField + 16, tmpField + 24]
      if (currPlayer === Player.Yellow) {
        winCtr = countWin(winArr, yellowArr)
      }
      else {
        winCtr = countWin(winArr, redArr)
      }
      if (winCtr === 3) {
        alert("WON LOWER RIGHT DIAGONAL")
      }
    }
  }

  const checkLowerLeftDiagonal = (row: number, col: number, tmpField: number, currPlayer: Player) => {
    if (col > 2 && row < 3) {
      console.log(`currPlayer: ${currPlayer}`)
      console.log(`tmpField: ${tmpField}`)
      let winCtr: number = 0
      let winArr: number[] = [tmpField + 6, tmpField + 12, tmpField + 18]
      if (currPlayer === Player.Yellow) {
        winCtr = countWin(winArr, yellowArr)
      }
      else {
        winCtr = countWin(winArr, redArr)
      }
      if (winCtr === 3) {
        alert("WON LOWER LEFT DIAGONAL")
      }
    }
  }

  const checkRight = (col: number, tmpField: number, currPlayer: Player) => {
    if (col < 3) {
      console.log(`currPlayer: ${currPlayer}`)
      console.log(`tmpField: ${tmpField}`)
      let winCtr: number = 0
      let winArr: number[] = [tmpField + 1, tmpField + 2, tmpField + 3]
      if (currPlayer === Player.Yellow) {
        winCtr = countWin(winArr, yellowArr)
      }
      else {
        winCtr = countWin(winArr, redArr)
      }
      if (winCtr === 3) {
        alert("WON RIGHT")
      }
    }
  }

  const checkLeft = (col: number, tmpField: number, currPlayer: Player) => {
    if (col > 2) {
      console.log(`currPlayer: ${currPlayer}`)
      console.log(`tmpField: ${tmpField}`)
      let winCtr: number = 0
      let winArr: number[] = [tmpField - 1, tmpField - 2, tmpField - 3]
      if (currPlayer === Player.Yellow) {
        winCtr = countWin(winArr, yellowArr)
      }
      else {
        winCtr = countWin(winArr, redArr)
      }
      if (winCtr === 3) {
        alert("WON LEFT")
      }
    }
  }

  const checkBottom = (row: number, tmpField: number, currPlayer: Player) => {
    if (row <= 2) {
      console.log(`currPlayer: ${currPlayer}`)
      console.log(`tmpField: ${tmpField}`)
      let winCtr: number = 0
      let winArr: number[] = [tmpField + 7, tmpField + 14, tmpField + 21]
      if (currPlayer === Player.Yellow) {
        winCtr = countWin(winArr, yellowArr)
      }
      else {
        winCtr = countWin(winArr, redArr)
      }
      if (winCtr === 3) {
        alert("WON BOTTOM")
      }
    }
  }

  const setToken = (event: React.MouseEvent<HTMLElement>) => {
    let gridIndex: number = parseInt((event.target as HTMLButtonElement).value)
    let col: number = gridIndex % 7
    let row: number = Math.floor(gridIndex / 7)
    console.log(`Current field: ${gridIndex}`)
    console.log(`Col: ${col}`)
    console.log(`Row: ${row}`)
    row = 5
    let tmpField: number = 0
    let currPlayer: Player = Player.Yellow
    if (count % 2 === 0) {
      currPlayer = Player.Red
    }
    while (row >= 0) {
      tmpField = (row * 7) + col
      if (redArr.includes(tmpField) || yellowArr.includes(tmpField)) {
        row--
      }
      else {
        let color: string = ""
        if (currPlayer === Player.Red) {
          updateRedArr(arr => [...arr, tmpField])
          color = "bg-red-500"
        }
        else {
          updateYellowArr(arr => [...arr, tmpField])
          color = "bg-yellow-500"
        }
        gridRef.current?.children[tmpField].classList.remove("bg-white")
        gridRef.current?.children[tmpField].classList.add(color)
        break
      }
    }
    console.log(redArr)
    console.log(yellowArr)
    checkBottom(row, tmpField, currPlayer)
    checkLeft(col, tmpField, currPlayer)
    checkRight(col, tmpField, currPlayer)
    checkLowerLeftDiagonal(row, col, tmpField, currPlayer)
    checkLowerRightDiagonal(row, col, tmpField, currPlayer)
    checkUpperLeftDiagonal(row, col, tmpField, currPlayer)
    checkUpperRightDiagonal(row, col, tmpField, currPlayer)

    setCount(count + 1)
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