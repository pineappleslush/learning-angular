# A Primer on Structural Directives
Structural directives can modify the DOM's structure (HTML layout) by adding, removing, or manipulating elements. 
Just like other directives, you apply structural directives onto a host element, most often prefixed by an asterisk *. 
Where they differ is that they do not require brackets or parentheses.

```angular2html
<div *ngIf="robot" class="name">{{robot.name}}</div>
```


[Here's more info](whats-with-the-asterisk) about what that asterisk `*` really does.


## Microsyntax
Angular's microsyntax parser lets you configure directives with a friendly string, which will then translate it into attributes on the `<ng-template>`.

- The `let` keyword is what lets you reference the template input variable you defined within the template. 
  The parser translates `let robot`, `let i`, and `let odd` into variables named `let-hero`, `let-i`, and `let-odd`.
- The directive is title-cased and prefixed onto the attribute name. 
  The `ngFor` example has input properties, `of` and `trackBy`, which are then parsed into `ngForOf` and `ngForTrackBy`. 
  The directive now knows that the list to loop through is `robots` and the track-by function is `trackById`.
- While `ngFor` loops through the list, it sets and resets properties of its own context object. 
  Some of those properties include `index`, `odd`, and a special property called `$implicit`.
- Angular sets the `let-i` and `let-odd` variables to the current value of the context's `index` and `odd` properties.
- A context property for `let-hero` wasn't specified, but its intended source is implicit. 
  Angular knows to set `let-hero` to the value of the context's `$implicit` property, which is what `NgFor` has initialized with the current iteration of robot.
- The `NgForOf` directive implements `NgFor`. 
  You can view addition directive properties and context properties in the [NgForOf API reference](angular.io/api/common/NgForOf(opens in a new tab).


## Create your own structural directive
In order to write your own structural directives, you'll need to know about the microsyntax constraints, grammar, and translation.

### Constraints
The following requirements must be met:
- It must be known ahead of time in order for the IDE to parse it without knowledge of the underlying semantics of the directive or what directives are present.
- It must translate to key-value attributes in the DOM.

### Grammar
Use the following grammar:
```
*:prefix="( :let | :expression ) (';' | ',')? ( :let | :as | :keyExp )*"
```

Here's what each portion of the microsyntax grammar represents:

  |  
--|--
`prefix` | HTML attribute key
`key` | HTML attribute key
`local` | local variable name used in the template
`export` | value exported by the directive under a given name
`expression` | standard Angular expression

  |
--|
`keyExp = :key ":"? :expression ("as" :local)? ";"?` |
`let = "let" :local "=" :export ";"?` |
`as = :export "as" :local ";"?` |

#### Translation
Microsyntax is translated to Angular's normal binding syntax:

Microsyntax | Translation
----------- | -----------
`*ngFor="let item of [1,2,3]"` | `<ng-template ngFor let-item [ngForOf]="[1,2,3]">`
`*ngFor="let item of [1,2,3] as items; trackBy: myTrack; index as i"` | `<ng-template ngFor let-item [ngForOf]="[1,2,3]" let-items="ngForOf" [ngForTrackBy]="myTrack" let-i="index">`
`*ngIf="exp"` | `<ng-template [ngIf]="exp">`
`*ngIf="exp as value"` | `<ng-template [ngIf]="exp" let-value="ngIf">`

You can view the actual source code for these directives here:
- [`NgIf`](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_if.ts)
- [`NgForOf`](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_for_of.ts)


## Template input variable
There's all this talk about template input variables, but what are they really? 
They are variables whose values you can reference within a single instance of the template. 
The keyword `let` prepends such variables such as `robot`, `i`, and `odd`.

The `let` keyword limits the scope of your template input variable to a single instance of the repeated template. 
That means you can use the same variable name again in other structural directives.

A template *input* variable is different from a template *reference* variable. 
They are different semantically and syntactically. 

Template *Input* Variable | Template *Reference* Variable
------------------------- | -----------------------------
Declared using the `let` keyword (`let hero`) | Declared by prefixing the variable name with `#` (`#var`)
The scope of this variable is limited to a single instance of the repeated template. | Can be accessed anywhere in the entire template.
The same variable name can be used in the definition of other structural directives. | Refers to its attached element, component, or directive.

Their variable names have their own namespaces. 
`robot` from `let robot` is not the same variable as `robot` declared as `#robot`.


## There's only room for one
There can only be one structural directive applied per host element. 
They have the ability to apply very complex changes to the host element and its descendants. 
If you attach another structural directive to perform its own set of complex changes on that same host element, it can cause for mass confusion. 
There's no way to distinguish which directive takes precedence or should run first. 
For this reason, to keep things simple, you can only apply one structural directive to an element.


## `NgSwitch` directives
Here's an inside look into the [`NgSwitch` directives](ng-switch).


## Use the asterisk `*` syntax
Angular provides an easy way to apply structural directives, so we might as well use it.
The `<ng-container>` should only be used when there is no single element to host the directive.
It is still important to know and understand what an `<ng-template>` is and does, especially when you create your own structural directives.


## The `<ng-template>`
This is an Angular element used to render HTML, but the tag itself is not displayed.
Angular replaces `<ng-template>` and its contents with a comment before rendering the view.

Structural directives are what puts `<ng-template>`s to work.
With no structural directive applied, the contents inside of `<ng-template>` are never displayed.

You can see this in action [here](ng-template).


## The `<ng-container>`
A root element usually hosts a structural directive such as a list element with an `ngFor`.
```angular2html
<li *ngFor="let robot of robots>{{robot.name}}}</li>
```

In cases where there isn't a host element, you can usually wrap the content with an HTML container element, such as a `<div>` or `<span>`.
```angular2html
<div *ngIf="robot" class="name">{{robot.name}}</div>
```
Using any one of these HTML container elements results in that element being part of the structure and rendering to the view.

Sometimes, though, you don't want the container element to be rendered. 
This could be because you were trying to wrap an element with a condition, but the parent element only accepts a specific type as children elements.
[Example #1](ng-template) shows what happens when using an unwanted container element, causing the template to not render the dropdown menu as expected.

So what's a dev to do?
That's where `<ng-container>` comes into play.
This is a grouping element provided by Angular that does not get added to the DOM.
Using an `<ng-container>` means it will not interfere with any potential stying or structural issues.
Check out [Example #2](ng-template) to see the dropdown working properly.

You can nest `<ng-container>`s inside of each other as well, just as you would add additional elements.

Remember to import the `FormsModule` from angular when using the `ngModel` directive.

One other thing to note about `<ng-container>` is that it is not a directive, component, class, or interface.
Think of it as more like the curly braces `{}` in a JS `if`-block


## Writing a structural directive
Creating a directive is similar to creating a component.
- Import the `Directive` decorator (instead of the `Component` decorator) and apply it to the directive class.
- Import `Input`, `TemplateRef`, and `ViewContainerRef` from `@angular/core` as well.
  These are needed for any structural directive.
- Define the CSS attribute selector for this directive, which will be used to apply to an element in a template.
- The name of the directive's class should end with `Directive` per [Angular's style guide](https://angular.io/guide/styleguide#02-03).

### The directive's attribute selector
The selector will typically be the directive's attribute name in square brackets `[]`.
It is the square brackets `[]` that define a CSS attribute selector.

The attribute name should use *lowerCamelCase* and begin with a prefix other than `ng` since that is reserved for Angular.

### `TemplateRef` and `ViewContainerRef`
Structural directives can create an [embedded view](https://angular.io/api/core/EmbeddedViewRef) from `<ng-template>` and insert that view into a [view container](https://angular.io/api/core/ViewContainerRef) next to the directive's original host element.

The contents from `<ng-template>` can be retrieved using a [`TemplateRef`](https://angular.io/api/core/TemplateRef).

Access to the view container can be done through a [`ViewContainerRef`](https://angular.io/api/core/ViewContainerRef).

Before continuing, here's an overview of what embedded views and a view containers are.

#### View
A view is the smallest grouping of display elements that can be created and destroyed together.
Views are rendered through the control of one or more directives.

A component class and its associated template define a view.
It is specifically represented by a `ViewRef` instance associated with a component.
A view immediately belonging to a component is called a *host view*.

Host views are created by instantiating a component with `createComponent()`.

Views are typically collected into view hierarchies, which can be loaded and unloaded dynamically based on user interaction, typically via a router.

#### Embedded View
A view hierarchy is a tree of related views that can be acted on as a unit. 
The root view is a component's *host view*.
A host view can be the root of a tree of *embedded views*, collected in a *view container* that is attached to an anchor element in the hosting component.

Views that are embedded in the context of a particular hiearchy can be host views of other components. 
For example, those components can be in the same NgModule as the hosting component, or belong to other NgModules.

An embedded view can be referenced from a component other than the hosting component whose template defines it.
It can also be defined independently by a `TemplateRef`.

Embedded views are created by instantiating a `TemplateRef` with `createEmbeddedView()`.

#### View Container
A view container instance can contain other view containers, creating a view hierarchy.
It can contain *host views* and *embedded views*.

Properties of elements can be modified dynamically based on user actions, but the structure of elements in a view cannot.
You can modify the structure of elements by inserting, moving, or removing nested views within their view containers.


### The `UnlessDirective`

Let's create a structural directive that behaves opposite of `NgIf` called `Unless`.
If the condition evaluates to `false`, our new `UnlessDirective` will display the content.

```angular2html
<p *appUnless="condition">It's show time!</p>
```

You can view the code to this new directive [here](unless.directive.ts).

The directive consumer needs to bind a boolean condition to `[appUnless]`.
This can be accomplished by creating an `appUnless` property with `@Input` decorator.

The `appUnless` property will get set whenever the value of the condition changes.
For this property to work, it requires a setter. 
- If condition is falsy and the view has not been created, the *view container* will create the *embedded view* from the template.
- If condition is truty and view is displayed, the container will clear, destroying the view along with it.

The `appUnless` property is never read, so a getter is unneccessary.
