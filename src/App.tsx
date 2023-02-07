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
    console.log(`col == ${col}`)
    switch (col) {
      case 0:
        if (row < 3 && currArr.includes(tmpField + 8) && currArr.includes(tmpField + 16) && currArr.includes(tmpField + 24)) {
          console.log(`[row == ${row} (row < 3)] && 3 diagonalDownRight set`)
          alert(`${currPlayer} WON DIAGONAL RIGHT`)
        }
        break

      case 1:
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
          console.log('[row == ${row} (row > 2)] && (1st, 2nd, 3rd) diagonalTopLeft set')
          alert(`${currPlayer} WON DIAGONAL RIGHT`)
        }
        break
    }
  }

  const checkLeftDiagonal = (row: number, col: number, tmpField: number, currPlayer: Player) => {
    console.log('----------')
    console.log('FUNCTION: checkLeftDiagonal')
    console.log(`currPlayer: ${currPlayer}`)
    console.log(`tmpField: ${tmpField}`)
    let currArr: number[] = []
    if (currPlayer === Player.Yellow) {
      currArr = yellowArr
    }
    else {
      currArr = redArr
    }
    console.log(`col == ${col}`)
    switch (col) {
      case 0:
        if (row > 2 && currArr.includes(tmpField - 6) && currArr.includes(tmpField - 12) && currArr.includes(tmpField - 18)) {
          console.log(`row == ${row} (row > 2) && (1st, 2nd, 3rd) diagonalTopRight set`)
          alert(`${currPlayer} WON DIAGONAL LEFT`)
        }
        break

      case 1:
        if (row > 1 && currArr.includes(tmpField - 6) && currArr.includes(tmpField - 12)) {
          console.log(`row == ${row} (row > 1)`)
          if (currArr.includes(tmpField + 6)) {
            console.log('diagonalDownLeft set && 2 diagonalTopRight set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
          if (currArr.includes(tmpField - 18)) {
            console.log(']diagonalDownLeft NOT set && 3 diagonalTopRight set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        break

      case 2:
        if (row > 0 && currArr.includes(tmpField - 6)) {
          console.log(`row == ${row} (row > 0)`)
          if (currArr.includes(tmpField + 6)) {
            console.log('&& diagonalDownLeft set')
            if (currArr.includes(tmpField + 12)) {
              console.log('diagonalDownLeft set && 2 diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
            if (currArr.includes(tmpField - 12)) {
              console.log('diagonalDownLeft set && 2 diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
          }
          if (currArr.includes(tmpField - 12) && currArr.includes(tmpField - 18)) {
            console.log('diagonalDownLeft NOT set && 3 diagonalTopRight set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        break

      case 3:
        if (currArr.includes(tmpField - 6)) {
          console.log('(1st) diagonalTopRight set')
          if (currArr.includes(tmpField - 12)) {
            console.log('(1st, 2nd) diagonalTopRight set')
            if (currArr.includes(tmpField - 18)) {
              console.log('(1st, 2nd, 3rd) diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
            if (currArr.includes(tmpField + 6)) {
              console.log('(1st, 2nd) diagonalTopRight set && (1st) diagonalDownLeft set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
          }
          if (currArr.includes(tmpField + 6) && currArr.includes(tmpField + 12)) {
            console.log('(1st) diagonalTopRight set && (2nd) diagonalTopRight NOT set && (1st, 2nd) diagonalDownLeft set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        if (currArr.includes(tmpField + 6) && currArr.includes(tmpField + 12) && currArr.includes(tmpField + 18)) {
          console.log('(1st) diagonalTopRight NOT set && (1st, 2nd, 3rd) diagonalDownLeft set')
          alert(`${currPlayer} WON DIAGONAL LEFT`)
        }
        break

      case 4:
        if (row < 5 && currArr.includes(tmpField + 6)) {
          console.log(`row == ${row} (row < 5) && (1st) diagonalDownLeft set`)
          if (currArr.includes(tmpField - 6)) {
            console.log('(1st) diagonalDownLeft set && (1st) diagonalTopRight set')
            if (currArr.includes(tmpField - 12)) {
              console.log('(1st) diagonalDownLeft set && (1st, 2nd) diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
            if (currArr.includes(tmpField + 12)) {
              console.log('(1st, 2nd) diagonalDownLeft set && (1st) diagonalTopRight set')
              alert(`${currPlayer} WON DIAGONAL LEFT`)
            }
          }
          if (currArr.includes(tmpField + 12) && currArr.includes(tmpField + 18)) {
            console.log('diagonalTopRight NOT set && (1st, 2nd, 3rd) diagonalDownLeft set')
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        break

      case 5:
        if (row < 4 && currArr.includes(tmpField + 6) && currArr.includes(tmpField + 12)) {
          console.log(`row == ${row} (row < 4) && (1st, 2nd) diagonalDownLeft set`)
          if (currArr.includes(tmpField - 6)) {
            console.log(`(1st, 2nd) diagonalDownLeft set && (1st) diagonalTopRight set`)
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
          if (currArr.includes(tmpField + 18)) {
            console.log(`(1st, 2nd, 3rd) diagonalDownLeft set && (1st) diagonalTopRight NOT set`)
            alert(`${currPlayer} WON DIAGONAL LEFT`)
          }
        }
        break

      case 6:
        if (row < 3 && currArr.includes(tmpField + 6) && currArr.includes(tmpField + 12) && currArr.includes(tmpField + 18)) {
          console.log(`row == ${row} (row < 3) && (1st, 2nd, 3rd) diagonalDownLeft set`)
          alert(`${currPlayer} WON DIAGONAL LEFT`)
        }
        break
    }
  }

  const checkSide = (col: number, tmpField: number, currPlayer: Player) => {
    console.log('----------')
    console.log('FUNCTION: checkSide')
    console.log(`currPlayer: ${currPlayer}`)
    console.log(`tmpField: ${tmpField}`)
    let currArr: number[] = []
    if (currPlayer === Player.Yellow) {
      currArr = yellowArr
    }
    else {
      currArr = redArr
    }
    console.log(`col == ${col}`)
    switch (col) {
      case 0:
        if (currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2) && currArr.includes(tmpField + 3)) {
          console.log('(1st, 2nd, 3rd) right set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

      case 1:
        if (currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2)) {
          console.log('(1st, 2nd) right set')
          if (currArr.includes(tmpField - 1)) {
            console.log('(1st, 2nd) right set && (1st) left set')
            alert(`${currPlayer} WON SIDE`)
          }
          if (currArr.includes(tmpField + 3)) {
            console.log('(1st, 2nd, 3rd) right set && (1st) left NOT set')
            alert(`${currPlayer} WON SIDE`)
          }
        }
        break

      case 2:
        if (currArr.includes(tmpField + 1)) {
          console.log('(1st) right set')
          if (currArr.includes(tmpField - 1)) {
            console.log('(1st) right set && (1st) left set')
            if (currArr.includes(tmpField + 2)) {
              console.log('(1st, 2nd) right set && (1st) left set')
              alert(`${currPlayer} WON SIDE`)
            }
            if (currArr.includes(tmpField - 2)) {
              console.log('(1st) right set && (1st, 2nd) left set')
              alert(`${currPlayer} WON SIDE`)
            }
          }
          if (currArr.includes(tmpField + 2) && currArr.includes(tmpField + 3)) {
            console.log('(1st, 2nd, 3rd) right set')
            alert(`${currPlayer} WON SIDE`)
          }
        }
        break

      case 3:
        if (currArr.includes(tmpField - 1)) {
          console.log('(1st) left set')
          if (currArr.includes(tmpField + 1)) {
            console.log('(1st) left set && (1st) right set')
            if (currArr.includes(tmpField + 2)) {
              console.log('(1st) left set && (1st, 2nd) right set')
              alert(`${currPlayer} WON SIDE`)
            }
            if (currArr.includes(tmpField - 2)) {
              console.log('(1st, 2nd) left set && (1st) right set')
              alert(`${currPlayer} WON SIDE`)
            }
          }
        }
        if (currArr.includes(tmpField + 1) && currArr.includes(tmpField + 2) && currArr.includes(tmpField + 3)) {
          console.log('(1st, 2nd, 3rd) right set && (1st) left NOT set')
          alert(`${currPlayer} WON SIDE`)
        }
        break

      case 4:
        if (currArr.includes(tmpField - 1)) {
          console.log('(1st) left set')
          if (currArr.includes(tmpField + 1)) {
            console.log('(1st) left set && (1st) right set')
            if (currArr.includes(tmpField - 2)) {
              console.log('(1st, 2nd) left set && (1st) right set')
              alert(`${currPlayer} WON SIDE`)
            }
            if (currArr.includes(tmpField + 2)) {
              console.log('(1st) left set && (2nd) left NOT Set && (1st, 2nd) right set')
              alert(`${currPlayer} WON SIDE`)
            }
          }
          if (currArr.includes(tmpField - 2) && currArr.includes(tmpField - 3)) {
            console.log('(1st, 2nd, 3rd) left set && (1st) right NOT set')
            alert(`${currPlayer} WON SIDE`)
          }
        }
        break

      case 5:
        if (currArr.includes(tmpField - 1) && currArr.includes(tmpField - 2)) {
          console.log('(1st, 2nd) left set')
          if (currArr.includes(tmpField + 1)) {
            console.log('(1st, 2nd) left set && (1st) right set')
            alert(`${currPlayer} WON SIDE`)
          }
          if (currArr.includes(tmpField - 3)) {
            console.log('(1st, 2nd, 3rd) left set && (1st) right NOT set')
            alert(`${currPlayer} WON SIDE`)
          }
        }
        break

      case 6:
        if (currArr.includes(tmpField - 1) && currArr.includes(tmpField - 2) && currArr.includes(tmpField - 3)) {
          console.log('(1st, 2nd, 3rd) left set')
          alert(`${currPlayer} WON SIDE`)
        }
        break
    }
  }

  const checkBottom = (row: number, tmpField: number, currPlayer: Player) => {
    console.log('----------')
    console.log('FUNCTION: checkBottom')
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
    console.log('----------')
    console.log('FUNCTION: setToken')
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