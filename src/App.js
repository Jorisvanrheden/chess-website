import { Component } from "react";
import React from "react";

class BoardSquare extends Component
{
  constructor(props)
  {
    super(props);
  }

  getStyling(index)
  {
    if(index % 2 === 0) return "squarelight";
    return "squaredark";
  }

  render()
  {
    return(
      <img 
        className={this.getStyling(this.props.x + this.props.y)}
        onClick={()=>{this.props.clickSquare(this.props.x, this.props.y)}}
        src="queen_white.png"
      >
      </img>
    );
  }
}

class ChessBoard extends Component
{
  constructor(props)
  {
    super(props);
  }

  

  clickSquare(x, y)
  {
    console.log("Clicked the tile at: " + x + ", " + y);
  }

  render()
  {
    const rows = [1,2,3,4,5,6,7,8];
    const columns = [1,2,3,4,5,6,7,8];

    var elem = document.getElementById('squarelight');
    console.log(elem);
    //elem.style.width = 70 + "%";

    return(
      <div>        
        {
          rows.map((value, rowIndex) => 
          (
            columns.map((value, columnIndex) => 
            (
              <BoardSquare clickSquare={this.clickSquare} x={rowIndex} y={columnIndex}/>
            ))
          ))
        }
      </div>   
    );
  }
}

function App() {
  return (
    <div>
      <ChessBoard/>
    </div>
  );
}

export default App;
