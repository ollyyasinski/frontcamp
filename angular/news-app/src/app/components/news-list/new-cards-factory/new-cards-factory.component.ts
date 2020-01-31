import {
  Component,
  Input,
  ViewContainerRef,
  ViewChild,
  ReflectiveInjector,
  ComponentFactoryResolver
} from "@angular/core";

@Component({
  selector: "app-new-cards-factory",
  templateUrl: "./new-cards-factory.component.html",
  styleUrls: ["./new-cards-factory.component.css"]
})
export class NewCardsFactoryComponent {
  currentComponent = [];

  @ViewChild("dynamicComponentContainer", { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;

  @Input() set componentData(articlesData: { component: any; inputs: any }) {
    if (!articlesData) {
      return;
    }

    this.dynamicComponentContainer.clear();

    articlesData.inputs.forEach(data => {
      const inputProviders = Object.keys(data).map(inputName => ({
        provide: inputName,
        useValue: data[inputName]
      }));
      const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

      const injector = ReflectiveInjector.fromResolvedProviders(
        resolvedInputs,
        this.dynamicComponentContainer.parentInjector
      );

      const factory = this.resolver.resolveComponentFactory(
        articlesData.component
      );

      const component = factory.create(injector);

      this.dynamicComponentContainer.insert(component.hostView);

      this.currentComponent.push(component);
    });
  }

  constructor(private resolver: ComponentFactoryResolver) {}
}
