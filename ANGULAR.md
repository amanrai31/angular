Angular framework is used to build client side app, great for SPAs.

**Why =>** Angular uses modular approach(opinionated), re-usable code, quick dev.

Angular CLI uses node & its associated package manager(npm,yarn,pnpm) to install & run JS tools outside the browser.

Node can be installed `using` nvm, fnm, docker `with` npm, yarn or pnpm

**Create new angular app in your local**

- `npm install -g @angular/cli` => install angular cli
- `ng new <my-app>`             => create angular app with boiler code
- `cd <my-app>`             
- `ng serve`                    => starts the local server

Angular applications are modular in nature, 2-way data binding, dependency injection, lazy loading, tree-shaking, component based routing, cross platform(web,mobile,desktop). 

**angular.json -** Project specific configuration/settings => We can change port, name of index.html/main.ts, build related rules. Basically we can customize all things about our project

**Learn about SSR & static site generation, also about server routing & App engine API, learn about RxJS**

- Angular uses real DOM, means change done in entire tree structure using *change detection*.
- Angular does not require state management libraries though we have NgRx (Based on redux, uses RxJS internally for handling state changes reactively)
- Angular use Observables instead of Promise because Angular prefers reactive programming (RxJS library(reactive extension for JS) allows reactive programming)

**FLUX (Redux) :** An architecture that promotes unidirectional data flow through a store that saves the current state of the app => An action that is request to change app state & reducer to perform this request.

---

Angular has at-least one module (root module/app module).

root component/app component > component(s) > files (html + css + js/ts + other files(service.ts, route.ts, module.ts, comp.spac.ts specs.ts,) )   

Primary files => main.ts, index.html, style.css

---

#### Angular CLI(command line interface)

Helps to quickly create, build, and manage Angular projects with simple commands. Provide boiler codes.

e.g. => ng g <c/s/i/r> <name of file|component>  => ng g c Home (generates a component with boiler code with name "Home")

e.g. => ng g i Users => generates an interface Users (interface let component know what type of data to expect)

---

```ts
@Component({                                             // component decorator (meta data)
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],  
  template: `./home.component.html `,                 // we can have inline template also, if we have small template(html)
  styleUrls: ['./home.component.css']
})
```

Benefits of dependency injection/DI (dependency is service which is injected where required)=> Reusable code , maintainable code, testable code. 

To use a service as dependency, it must be provided in angular DI system => 
1. In ```@Injectable({ providedIn: 'root' })``` Recommended way, check service file.
2. In a Specific Module (providers array in @NgModule)

Where we can use DI => service(most common), component, directives, pipes, guard & interceptor

Passing data in components from parent to child with *@Input* properties.

---

1. [] => Property binding, one-way, flow is from component to UI. Used for rendering purpose only. Any change in component reflect in UI. Works with HTML attributes(like src, href, disabled)
        e.g. <img [src]="imageUrl"> => if imageUrl change the image updates. **Here src is HTML attribute not th element content** 

2. {{}} => Interpolation, one-way, flow is from component to UI. e.g. `<h1> Username - {{userName}} </h1>`. Any change in component reflect in UI.

**NOTE :** Diff b/w [] & {{}} => {{}} works only inside element content([] - works inside HTML attribute), works only with strings ([]- works with any data type).

**NOTE :** ```html <p [innerText]="title"></p>```, technically we can use [innerText] instead of {{}} but ```html <p>{{title}}</p>``` is more readable.

3. [()] => Data binding, two-way, sync b/w component and UI. Uses [(ngModel)]. UseCase => We can use this for input boxes. 

4. () => Event binding, listen for selection change event. 


----
### Directives in Angular

Directives allow to modify the structure, behavior or appearance of elements in DOM.

1. Component Directives → (@Component) - Special type of directive with a template.(Every Angular component is a directive but not every directive is a component.)

2.  Structural Directives (Always start with * ) => Used to modify the DOM structure (add/remove elements dynamically).

- ***ngIf** => structural directive (for conditions, if we have to show some component/template or not)
- ***ngFor** => looping directive   (for loop)

3. Attribute directive(Always inside square bracket - []) => Modify the appearance or behavior of elements.

- **[ngClass]** => Dynamically add CSS classes. e.g. ```<p [ngClass]="{'red-text': isError, 'bold-text': isBold}">Hello World</p>```. Define isError & isBold in component.

- **[ngStyle]** => ```html <p [ngStyle]="{'color': textColor, 'font-size.px': fontSize}">Styled Text</p>```


**NOTE =====>** We can make custom directive too ```ng g d <directiveName>```. Learn more about this.

---

### Router, http client, template variable

**Router outlet =>** A placeholder where angular loads component dynamically based on current route.

1. Dynamically component loading - no need for multiple HTML pages
2. Efficient navigation - Browser never reloads page, makes nav fast

**HTTP client =>** Look at service file about http client.

**Template variable =>** It is a reference to a DOM element, component, or directive inside a template. It allows to interact with elements without using component class properties. Use the ```#``` followed by a variable name *inside a template*

```html
<input #userInput type="text">
<button (click)="logInput(userInput.value)">Log Input</button>

```

The #userInput reference the <input> element.

**Component class properties** => variable defined inside the TypeScript class of a component. Normal variables.
