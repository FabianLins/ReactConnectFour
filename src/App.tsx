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

  const checkRightDiagonal = (row: number, col: number, tmpField: number, currPlayer: Player) => {
    console.log('----------')
    console.log('FUNCTION: checkRightDiagonal')
    console.log(`currPlayer: ${currPlayer}`)
    console.log(`tmpField: ${tmpField}`)
    let currArr: number[] = []
    if (currPlayer === Player.Yellow) {
      currArr = yellowArr
    }
    else {
      currArr = redArr
    }
    switch (col) {

      case 0:
        console.log(`col == ${col}`)
        if (row < 3 && currArr.includes(tmpField + 8) && currArr.includes(tmpField + 16) && currArr.includes(tmpField + 24)) {
          console.log(`[row == ${row} (row < 3)] && 3 diagonalDownRight set`)
          alert(`${currPlayer} WON DIAGONAL RIGHT`)
        }
        break

      case 1:
        console.log(`col == ${col}`)
        if (row < 4 && currArr.includes(tmpField + 8) && currArr.includes(tmpField + 16)) {
          console.log(`[row == ${row} (row < 4)] && 2 diagonalDownRight set`)
          if (currArr.includes(tmpField - 8)) {
            console.log('diagonalTopLeft set && 2 diagonalDownRight set')
            alert(`${currPlayer} WON DIAGONAL RIGHT`)
          }
          if (currArr.includes(tmpField + 24)) {
            console.log('diagonalTopLeft NOT set && 3 diagonalDownRight set')
            alert(`${currPlayer} WON DIAGONAL RIGHT`)
          }
        }
        break

      case 2:
        console.log(`col == ${col}`)
        if (row < 5 && currArr.includes(tmpField + 8)) {
          console.log(`[row == ${row} (row < 5)] && diagonalDownRight set`)
          if (currArr.includes(tmpField - 8)) {
            console.log('diagonalTopLeft set')
            if (currArr.includes(tmpField + 16)) {
              console.log(`2 diagonalDownRight set && diagonalTopLeft`)
              alert(`${currPlayer} WON DIAGONAL RIGHT`)
            }
            if (currArr.includes(tmpField - 16)) {
              console.log('(1st) diagonalDownRight set && (1st, 2nd) diagonalTopLeft set')
              alert(`${currPlayer} WON DIAGONAL RIGHT`)
            }
          }
          if (currArr.includes(tmpField + 16) && currArr.includes(tmpField + 24)) {
            console.log('(1st) diagonalDownRight NOT set && (1st, 2nd, 3rd) diagonalTopLeft set')
            alert(`${currPlayer} WON DIAGONAL RIGHT`)
          }
        }
        break

      case 3:
        console.log(`col == ${col}`)
        if (currArr.includes(tmpField - 8)) {
          console.log('(1st) diagonalTopLeft set')
          if (currArr.includes(tmpField - 16)) {
            console.log('(1st, 2nd) diagonalTopLeft set')
            if (currArr.includes(tmpField - 24)) {
              console.log('(1st, 2nd, 3rd) diagonalTopLeft set')
              alert(`${currPlayer} WON DIAGONAL RIGHT`)
            }
            if (currArr.includes(tmpField + 8)) {
              console.log('(1st, 2nd) diagonalTopLeft set && (1st) diagonalDownRight set && (3rd) diagonalTopLeft NOT set')
              alert(`${currPlayer} WON DIAGONAL RIGHT`)
            }
          }
          if (currArr.includes(tmpField + 8) && currArr.includes(tmpField + 16)) {
            console.log('(1st) diagonalTopLeft set && (1st, 2nd) diagonalDownRight set && (2nd) diagonalTopLeft NOT set')
            alert(`${currPlayer} WON DIAGONAL RIGHT`)
          }
        }
        if (currArr.includes(tmpField + 8) && currArr.includes(tmpField + 16) && currArr.includes(tmpField + 24)) {
          console.log('(1st, 2nd, 3rd) diagonalDownLeft set && (1st) diagonalTopRight NOT set')
          alert(`${currPlayer} WON DIAGONAL RIGHT`)
        }
        break

      case 4:
        console.log(`col == ${col}`)
        if (row > 0) {
          console.log(`[row == ${row} (row > 0)]`)
          if (currArr.includes(tmpField - 8)) {
            console.log('(1st) diagonalTopLeft set')
            if (currArr.includes(tmpField - 16)) {
              console.log('(1st, 2nd) diagonalTopLeft set')
              if (currArr.includes(tmpField + 8)) {
                console.log('(1st, 2nd) diagonalTopLeft && (1st) diagonalDownRight set')
                alert(`${currPlayer} WON DIAGONAL RIGHT`)
              }
            }
            if (currArr.includes(tmpField + 8) && currArr.includes(tmpField + 16)) {
              console.log('(1st) diagonalTopLeft set && (1st, 2nd) diagonalDownRight')
              alert(`${currPlayer} WON DIAGONAL RIGHT`)
            }
          }
          if (currArr.includes(tmpField + 8) && currArr.includes(tmpField + 16) && currArr.includes(tmpField + 24)) {
            console.log('diagonalTopLeft NOT set && (1st, 2nd, 3rd) diagonalDownRight set')
            alert(`${currPlayer} WON DIAGONAL RIGHT`)
          }
        }
        break

      case 5:
        console.log(`col == ${col}`)
        if (row > 1 && currArr.includes(tmpField - 8) && currArr.includes(tmpField - 16)) {
          console.log(`[row == ${row} (row > 1)] && (1st, 2nd) diagonTopLeft set`)
          if (currArr.includes(tmpField + 8)) {
            console.log('(1st, 2nd) diagonalTopLeft set && (1st) diagonalDownRight set')
            alert(`${currPlayer} WON DIAGONAL RIGHT`)
          }
          if (currArr.includes(tmpField - 24)) {
            console.log('(1st) diagonalDownRight NOT set && (1st, 2nd, 3rd) diagonalTopLeft set')
            alert(`${currPlayer} WON DIAGONAL RIGHT`)
          }
        }
        break

      case 6:
        if (row > 2 && currArr.includes(tmpField - 8) && currArr.includes(tmpField - 16) && currArr.includes(tmpField - 24)) {
          console.log('col == 6 && row > 2 && (1st, 2nd, 3rd) diagonalTopLeft set')
          alert(`${currPlayer} WON DIAGONAL RIGHT`)
        }
        break
    }
  }

  const checkLeftDiagonal = (row: number, col: number, tmpField: number, currPlayer: Player) => {
    console.log(`currPlayer: ${currPlayer}`)
    console.log(`tmpField: ${tmpField}`)
    let currArr: number[] = []
    if (currPlayer === Player.Yellow) {
      currArr = yellowArr
    }
    else {
      currArr = redArr
    }
    switch (col) {
      case 0:
        if (row > 2 && currArr.includes(tmpField - 6) && currArr.includes(tmpField - 12) && currArr.includes(tmpField - 18)) {
          console.log('col == 0 && row > 2 && 3 diagonalTopRight set')
          alert(`${currPlayer} WON DIAGONAL LEFT`)
        }
        break

      case 1:
        if (row > 1) {
          console.log('col == 1 && row > 1')
          if (currArr.includes(tmpField + 6)) {
            console.log('&& diagonalDownLeft set')
            if (currArr.includes(tmpField - 6) && currArr.includes(tmpField - 12)) {
              console.log('diagonalDownLeft set && 2 diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
          }
          if (currArr.includes(tmpField - 6) && currArr.includes(tmpField - 12) && currArr.includes(tmpField - 18)) {
            console.log(']diagonalDownLeft NOT set && 3 diagonalTopRight set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        break

      case 2:
        if (row > 0) {
          console.log('col == ${col} && row > 0')
          if (currArr.includes(tmpField + 6) && currArr.includes(tmpField - 6)) {
            console.log('&& diagonalDownLeft set')
            if (currArr.includes(tmpField + 12)) {
              console.log('diagonalDownLeft set && 2 diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
            else if (currArr.includes(tmpField - 12)) {
              console.log('diagonalDownLeft set && 2 diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
          }
          if (currArr.includes(tmpField - 6) && currArr.includes(tmpField - 12) && currArr.includes(tmpField - 18)) {
            console.log('diagonalDownLeft NOT set && 3 diagonalTopRight set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        break

      case 3:
        console.log('col == 3')
        if (currArr.includes(tmpField - 6)) {
          console.log('diagonalTopRight set')
          if (currArr.includes(tmpField - 12)) {
            console.log('diagonalTopRight set && 2 diagonalTopRight set')
            if (currArr.includes(tmpField - 18)) {
              console.log('diagonalTopRight set && 2 diagonalTopRight set && 3 diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
            else if (currArr.includes(tmpField + 6)) {
              console.log('diagonalTopRight set && 2 diagonalTopRight set && 3 diagonalTopRight NOT set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
          }
          else if (currArr.includes(tmpField + 6) && currArr.includes(tmpField + 12)) {
            console.log('diagonalTopRight set && diagonalDownLeft NOT set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        if (currArr.includes(tmpField + 6) && currArr.includes(tmpField + 12) && currArr.includes(tmpField + 18)) {
          console.log('diagonalTopRight NOT set && 3 diagonalDownLeft set')
          alert(`${currPlayer} WON DIAGONAL LEFT`)
        }
        break

      case 4:
        if (row < 5 && currArr.includes(tmpField + 6)) {
          console.log('col == 4 && row < 5')
          if (currArr.includes(tmpField - 6)) {
            console.log('diagonalTopRight set')
            if (currArr.includes(tmpField - 12)) {
              console.log('2 diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)

            }
            if (currArr.includes(tmpField + 12)) {
              console.log('diagonalTopRight set && diagonalDownLeft NOT set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
          }
          if (currArr.includes(tmpField + 12) && currArr.includes(tmpField + 18)) {
            console.log('diagonalTopRight NOT set && 3 diagonalDownLeft set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        break

      case 5:
        if (row < 4 && currArr.includes(tmpField + 6) && currArr.includes(tmpField + 12)) {
          console.log('col == 5 && row < 4')
          if (currArr.includes(tmpField - 6)) {
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
          if (currArr.includes(tmpField + 18)) {
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        break

      case 6:
        if (row < 3 && currArr.includes(tmpField + 6) && currArr.includes(tmpField + 12) && currArr.includes(tmpField + 18)) {
          console.log('col == 6 && row < 3 && 3 diagonalDownLeft set')
          alert(`${currPlayer} WON DIAGONAL LEFT`)
        }
        break
    }
  }

  const checkSide = (col: number, tmpField: number, currPlayer: Player) => {
    console.log(`currPlayer: ${currPlayer}`)
    console.log(`tmpField: ${tmpField}`)
    let currArr: number[] = []
    if (currPlayer === Player.Yellow) {
      currArr = yellowArr
    }
    else {
      currArr = redArr
    }

    switch (col) {
      case 0:
        if (currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2) && currArr.includes(tmpField + 3)) {
          console.log('Case 0 && 3 nextField set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

      case 1:
        if (currArr.includes(tmpField - 1) && currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2)) {
          console.log('Case 1 && prevField set && 2 nextField set')
          alert(`${currPlayer} WON SIDE`)
        }
        else if (currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2) && currArr.includes(tmpField + 3)) {
          console.log('col == 1 && prevField NOT set && 3 nextField set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

      case 2:
        if (currArr.includes(tmpField - 1)) {
          console.log('col == ${col} && prevField set')
          if (currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2)) {
            console.log('col == ${col} && prevField set && nextField set && nextNextField set')
            alert(`${currPlayer} WON SIDE`)
          }
        }
        else if (currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2) && currArr.includes(tmpField + 3)) {
          console.log('col == ${col} && prevField NOT set && 3 nextField set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

      case 3:
        if (currArr.includes(tmpField - 1)) {
          console.log('col == 3 && prevField set')
          if (currArr.includes(tmpField + 1)) {
            console.log('col == 3 && prevField set && nextField set')
            if (currArr.includes(tmpField + 2)) {
              console.log('col == 3 && prevField set && nextField set && nextNextField set')
              alert(`${currPlayer} WON SIDE`)
            }
            else if (currArr.includes(tmpField - 2)) {
              console.log('col == 3 && prevField set && nextField set && nextNextField NOT set && prevPrevField set')
              alert(`${currPlayer} WON SIDE`)
            }
          }
        }
        else if (currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2) && currArr.includes(tmpField + 3)) {
          console.log('col == 3 && prevField NOT set && 3 nextField set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

      case 4:
        if (currArr.includes(tmpField + 1)) {
          console.log('col == 4 && nextField set')
          if (currArr.includes(tmpField - 1) && currArr.includes(tmpField - 2)) {
            console.log('col == 4 && nextField set && prevField set && prevPrevField set')
            alert(`${currPlayer} WON SIDE`)
          }
        }
        else if (currArr.includes(tmpField - 1) && currArr.includes(tmpField - 2) && currArr.includes(tmpField - 3)) {
          console.log('col == 4 && nextField NOT set && 3 prevField set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

      case 5:
        if (currArr.includes(tmpField + 1) && currArr.includes(tmpField - 1) && currArr.includes(tmpField - 2)) {
          console.log('col == 5 && nextField set && 2 prevField set')
          alert(`${currPlayer} WON SIDE`)
        }
        else if (currArr.includes(tmpField - 1) && currArr.includes(tmpField - 2) && currArr.includes(tmpField - 3)) {
          console.log('col == 5 && nextField NOT set && 3 prevField set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

      case 6:
        if (currArr.includes(tmpField - 1) && currArr.includes(tmpField - 2) && currArr.includes(tmpField - 3)) {
          console.log('col == 6 && 3 prevField set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

    }
  }

  const checkBottom = (row: number, tmpField: number, currPlayer: Player) => {
    if (row < 3) {
      console.log(`currPlayer: ${currPlayer}`)
      console.log(`tmpField: ${tmpField}`)
      let currArr: number[] = []
      if (currPlayer === Player.Yellow) {
        currArr = yellowArr
      }
      else {
        currArr = redArr

      }
      if (currArr.includes(tmpField + 7) && currArr.includes(tmpField + 14) && currArr.includes(tmpField + 21)) {
        alert(`${currPlayer} WON BOTTOM`)
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
    checkSide(col, tmpField, currPlayer)
    checkLeftDiagonal(row, col, tmpField, currPlayer)
    checkRightDiagonal(row, col, tmpField, currPlayer)

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