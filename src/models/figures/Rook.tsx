import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import whitelogo from "../../assets/white-rook.png";
import blacklogo from "../../assets/black-rook.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.ROOK;
  }
}
