# Notes 

## Event: 
``` javascript

element.addEventListner('click' , function(eventObject){}, false/true)
```
In the **Event** syntax there are 3 parameters like 
<ol>
<li> Type of Action </li>
<li> Function </li>
<li> Event Propagation (Default value: false)</li>
</ol>

### Event Propagation:
**There are two contex of Event Propagation**
<ul>
<li>False means: Event Bubbling </li>
<li>True means: Event Capturing </li>
</ul>
<br>

>**Scenario :**  
``` javascript
<div id="outer">
    console.log("clicked on outer div")
    <div id="inner">
        console.log("clicked on inner div")
    </div>
</div>
```
## If the Event Propagation value is **false** and 

1. #### When you clicked on outer div -- 
- **clicked on outer div** will print
<br>
2. #### When you clicked on inner div --
- **clicked on inner div**
<br>
- **clicked on outer div**
      will print respectively

## If the Event Propagation value is **True** and 

1. #### When you clicked on outer div -- 
- **clicked on outer div** will print
<br>
2. #### When you clicked on inner div --
- **clicked on outer div**
<br>
- **clicked on inner div**
      will print respectively
