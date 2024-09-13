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

<br><hr><br><hr>

>***Example:*** Event propagation value = false which is refering to Event Bubbling. (`small to big` or `inside to outside`)  

``` javascript
<body>
<div id="outer">
    <h1> Outer Box </h1>
    <div id="inner">
        <h1> Inner Box </h1>
    </div>
</div>
</body>
<script>
    document.getElementById('outer').addEventListener('click', function(e){
        console.log("clicked on outer div");
    }, false)

    document.getElementById('inner').addEventListener('click', function(e){
        console.log("clicked on inner div");
    }, false)
</script>
```
### Clicked on Outer div: `Output`
``` console
 clicked on outer div
```
### Clicked on Inner div: `Output`
``` console
 clicked on inner div
 clicked on outer div
```
<hr>

>***Example:*** Event propagation value = true which is refering to Event Capturing. (`big to small` or `outside to inside`)  

``` javascript
<body>
<div id="outer">
    <h1> Outer Box </h1>
    <div id="inner">
        <h1> Inner Box </h1>
    </div>
</div>
</body>
<script>
    document.getElementById('outer').addEventListener('click', function(e){
        console.log("clicked on outer div");
    }, true)

    document.getElementById('inner').addEventListener('click', function(e){
        console.log("clicked on inner div");
    }, true)
</script>
```
### Clicked on Outer div: `Output`
``` console
 clicked on outer div
```
### Clicked on Inner div: `Output`
``` console
 clicked on outer div
 clicked on inner div
```
<hr>

>***Example:*** Event propagation default which is refering to Event Bubling but you want to stop the Event propagation ( `Everything is seprated` ) using  `stopPropagation()` method 

``` javascript
<body>
<div id="outer">
    <h1> Outer Box </h1>
    <div id="inner">
        <h1> Inner Box </h1>
    </div>
</div>
</body>
<script>
    document.getElementById('outer').addEventListener('click', function(e){
        console.log("clicked on outer div");
    }, true)

    document.getElementById('inner').addEventListener('click', function(e){
        console.log("clicked on inner div");
        e.stopPropagation()
    }, true)
</script>
```
### Clicked on Outer div: `Output`
``` console
 clicked on outer div
```
### Clicked on Inner div: `Output`
``` console
 clicked on outer div
 clicked on inner div
```

 <hr>
<br><br><br>

``` javascript 
document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation()
        console.log("google clicked");
    }, false)
```