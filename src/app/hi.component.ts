import { Component, Input } from '@angular/core'

@Component({
  selector: 'hi-app',
  template: `<div>Hi Component</div>`,
  styles:[`h1 { font-family: Lato; }`]

})

export class HiComponent{
  @Input() name:string;
}