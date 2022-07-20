import {
  Component,
  VERSION,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';
import { HelloComponent } from './hello.component';
import { HiComponent } from './hi.component';
import { HostDirective } from './host.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @ViewChild(HostDirective, { static: true }) childRef: HostDirective;

  constructor(public componentFactory: ComponentFactoryResolver) {}

  compoments = [HiComponent, HelloComponent];

  showMe(id) {
    this.childRef.containerRef.clear();
    const component = this.componentFactory.resolveComponentFactory(
      this.compoments[id]
    );
    this.childRef.containerRef.createComponent(component);
  }
}
