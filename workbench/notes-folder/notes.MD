# jQuery Detailed Notes

## First Look at jQuery !
* $ sign references jQuery codes

* $("") is use of selector.
    * like $("document") gets whole document object or $("body"), gets (targets) the body.

# !!!!FUNCTIONS!!!!
## function 'ready':
* once what it's attached to is ready, it runs the function that gets within as parameter.
    * for instance: $("...").ready(function(...){...}).


## function 'append':
* can get anything you want and adds what it's attached to

## function 'css':

* takes the property argument that you wanna change and then takes values.
    * for instance: .css("border", "1px dotted green")

## function 'html':
* gets the html content of the element its attached to.
* can get argument to replace html content.
    * $("#textBox").html(variable) => variable now textBox's html content.

## function 'show' and 'hide':

* show sets the display property of attached target to block and hide sets it to none. 


## function 'toggleClass':
* toggles the given class as parameter.

## function 'fadeIn':

* used to fade and it takes arguments as _miliseconds_.

## function 'slidDown/slideUp/slideToggle':

* Used to slide elements and they take arguments as miliseconds, also can take sliding effect as string like "linear".
* SlideToggle make element disappeared or appeared with slide effect.

## function 'toggle':

* it is a simply toggle function and it takes 2 arguments. First, duration. Second is toggle effect/animation like "swing"

## function 'animate':

* It allows to add animation to attached element. It takes two arguments: First style which is written like {width} and second duration, just like before.

## function 'wrap':
* It allows to wrap the selected element with the given parameter. close tags is no needed.
    * Instance use: $("#container p").wrap("<div class='colorBox'>"); => wraps each p element in div with container id.

## function 'empty':
* purges inside of the selected element.

## function 'replaceAll(element)'
* element is replaced to the selected element.
    * Example: `$("<div>Replaced</div>").replaceAll("#container.")` => element whose id is container's content replaced with the `$("<div>Replaced</div>")`
## function 'replaceWith(element)'
* use is the reverse of replaceAll but effect is same.
---------------------------------------------------------------------------------------------------------------------------

## SELECTORS 

* $("element")
* $("#id")
* $(".class")
* $("<.p>") => this created p element to a variable(wo dot by p).



## FILTERS

* $("element:first") => this targets the first element. last is the reverse.
* $("container p:even") => p element in the container is filtered.


## ADVANCED SELECTORS
* $("div p") => selects all p elements in div.
* $("div > p") => all paragraph ___where the parent element___ is div
* $("#box + p") => selects the first p element that placed immediately after #box.


## ADVANCED FILTERS

* 	$("p:first-child") Selects every <p> element that is the first child of its parent
*   $("p:first-of-type") Selects every <.p> element that is the first __<.p>__ element of its parent
*   $("p:contains('searchedValue')") selects each p elements contains searchedValue and .css() method implement style each of them independently.
*   $("p:nth-child(num)") Selects the 3rd of the children of each parents

-------------------------

## Handling Events

* To handle an event, _on_ is used after targeting an element and it takes parameters, commonly first action name as string. Second is a function.

### Event Names

* click  => $(...).click(function)
* mouseleave
* 

--------------------------------------
## Show and hide elements.

* show and hide functions are used to manipulate display property. _see functions 'show' and 'hide'._


## Hover 

* .hover() is used to execute hover action at what is attached and it takes function as parameter.



## Fading

* to fade, fadeIn function is used


## Slide

* to Slide, slideDown/Up/Toggle functions are used. to slide for both up and down, toggle makes more sense.
------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Toggle

* Buttons can have toggle effect by using click then toggle function. Also see function 'toggle'
    * Here's an example: 
    ` <$("#toggleMe").click(function() { 
                $("#textBox").toggle(4000, "swing")
    }) `


## Animate

* to add animation given element, use animate function.
* there are kind of animations already given.


----------------------------------------------------------------------------------------------------------------
## CREATING CONTENT

* .text() allows writing text to selected element.
* .html() allows to add html elements to selected element.



## INSERTING CONTENT

* Append() => adds given input beginning of the selected element. 
* Prepend() => simply, the reverse.

## MODIFYING CONTENT

* see wrap function which allows to wrap with given elements.
* see empty function to purge what it has.
* see replaceWith and replaceAll to change existing element's content.


## MODIFYING CSS

* to add class to selected element, use addClass('className')

* to remove class from selected element, use removeClass('className')

* to make class toggle for selected element, use toggleClass('className')

* Also you can increase or decrease fonts-size (and props similar to font-size) by doing this:
    * (selected).css("font-size(or similar)", "+=1") => this allows to increase font-size




















---------------------------------
## Some other notes and keywords
* _$(this)_  takes the place what has been attached to.