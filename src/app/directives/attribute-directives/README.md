# Attribute Directives
Attribute directives can change the appearance and behaviour of a DOM element.
It does not modify the DOM structure in any way. 
If you want to add or remove elements, you'll want to use a structural directive instead.

## [`BasicHighlightDirective`](basic-highlight.directive.ts)
[`ElementRef`](https://angular.io/api/core/ElementRef) gives you direct access to the host DOM element via `nativeElement` property.

There is a security risk with using `ElementRef` however,  making your application more vulnerable to XSS attacks. 
Angular [recommends](https://angular.io/guide/security#direct-use-of-the-dom-apis-and-explicit-sanitization-calls) avoiding direct interaction with the DOM and using Angular templates instead.
If this is unavoidable, you should utilize Angular's built-in sanitization functions provided by [`DomSanitizer`](https://angular.io/api/platform-browser/DomSanitizer).

## `Renderer2`
[`Renderer2`](https://angular.io/api/core/Renderer2) can intercept Angular's rendering calls and allow you to render to something other than the DOM.
This comes in especially handy when you don't know the static name of the property or attribute you want to set. 
With `Renderer2`, you can use methods like `setProperty()` and `setAttribute()`. 

[`RendererHighlightDirective`](renderer-highlight.directive.ts) is an example of `Renderer2` in action.

Angular is not limited to running in the browser. Your app can be a [Progressive Web App](https://web.dev/progressive-web-apps/) (PWA), utilizing Angular [service workers](https://angular.io/guide/service-worker-intro).

## Respond to user interaction with `@HostListener`
Listens to DOM events, providing a handler method to run when that event occurs.

See this in action in the [`CustomizableHighlightDirective`](src/app/directives/attribute-directives/customizable-highlight.directive.ts).

## `@HostBinding`
Access a particular property from the host element to modify.

In this [example](host-binding-highlight.directive.ts), we can access the host element's style property and target the background color sub-property.
We no longer need to use `Renderer`. 
Instead, we can change the value of the `HostBinding` property we stored in a variable.

## Property Binding
You can leverage property binding on your directive to allow for a more customizable directive.
By defining `@Input` properties, your directive can now accept new values, overriding the default settings.

Here is a [basic example](customizable-highlight.directive.ts).

You can allow property binding through the directive's selector by defining the `@Input` property with the same name as the directive itself.
Here's an [example](customizable-shorthand-highlight.directive.ts) of this.

Sometimes, using the directive's name as the name of an `@Input` property may not make the most sense.
Code readability can become an issue.
A workaround for that would be to define aliases for an `@Input` property, thereby allowing you to keep a more descriptive and appropriate variable name for that `@Input` property.
An example of that can be found [here](customizable-shorthand-readable-highlight.directive.tsst).
