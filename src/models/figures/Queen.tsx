import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import whitelogo from "../../assets/white-queen.png";
import blacklogo from "../../assets/black-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.QUEEN;
  }
}
