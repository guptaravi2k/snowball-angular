import {EvenComponent} from "./even/even.component";
import {OddComponent} from "./odd/odd.component";
import {GameControllerComponent} from "./game-controller/game-controller.component";
import {GameHomeComponent} from "./game-home.component";
import {SampleBasicDirective} from "./declaration/sample-basic.directive";
import {SampleDeclarationDirective} from "./declaration/sample-declaration.directive";
import {HoverDeclarationDirective} from "./declaration/hover-declaration.directive";


export const GAME_APP_COMPONENTS =  [
  GameHomeComponent,
  GameControllerComponent,
  OddComponent,
  EvenComponent,
  SampleBasicDirective,
  SampleDeclarationDirective,
  HoverDeclarationDirective
]
