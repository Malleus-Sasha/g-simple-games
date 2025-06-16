interface ComponentMetadata {
  selector: string;
  template: string;
}

type Constructor = new (...args: any[]) => any;

function Component(metadata: ComponentMetadata) {
  return function<T extends Constructor>(OriginalConstructor: T) {
    return class extends OriginalConstructor {
      constructor(...args: any[]) {
        super(...args);
        const element = document.querySelector(metadata.selector);

        if (element) {
          const processedTemplate = metadata.template.replace(
            /{{(.*?)}}/g,
            (_, prop) => this[prop.trim()] || ''
          )

          element.innerHTML = processedTemplate;
        }
      }
    }
  }
}



@Component({
  selector: '#app-root',
  template: '<h2>{{title}}</h2>'
})
class AppComponent {
  title = 'Hello title';

  constructor() {
    console.log('AppComponent create')
  }
}

const app = new AppComponent();
