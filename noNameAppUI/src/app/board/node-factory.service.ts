import { Injectable, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NodeComponent } from './node/node.component';

@Injectable({
  providedIn: 'root'
})
export class NodeFactoryService {

  constructor(private factoryResolver: ComponentFactoryResolver) {}

  createNode(viewContainerRef: ViewContainerRef) {
    const factory = this.factoryResolver.resolveComponentFactory(NodeComponent);
    const component = factory.create(viewContainerRef.parentInjector);
    viewContainerRef.insert(component.hostView);
  }
}
