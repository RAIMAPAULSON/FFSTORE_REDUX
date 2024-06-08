------JAVASCRIPT-Programming concepts------
----------------------
1.node JS- provide run time environment and js library
2.Basic concepts in JS
    -Display content : console.log(content)
    -Data types in JS : typeof
         -string
         -number
         -boolean
         -object
    -Identifiers : set of rules to set up name for variables (start with character ie, capital or small letter ,there should not be space b/w identifiers)
    -Variable: use to store Data
       -using var keyword
           syntax: var variableName / var variable_name = value
       -using const keyword
           syntax: const variable_name = value
       -using let keyword
    -Difference b/w different variable
    ---------------var---(disadv: can store diffr. type of data ,which can be a problem)                                                                           
    -use var keyword                                                                              
    -reassign with any type of Data
    -Global scope
    -hoisted with undefined(hoisted meaning we can use that data before we create that variable)

     --------------const-------
       -use const keyword
       -block scope (we cannot update) 
       -cannot reassign its value
       -hoisted without value

    -------------let--------------
    -use let keyword
    -can reassign its value
    -block scope
    -hoisted without value

    -Joining different type of datas in js
       -commas
       -using + operator (concatenation)
       -using ` (template literal) (important one)
    -Operators in JS
       -Assignment operators : variable_name = value
       -Arithmetic operators : + - * / % **
       -Relational operators : > >= < <= == != === (answer will be boolean that is true or false)
       -Logical operators : && || ! (in order to combine relational operators)
        --------AND--------
           T && T = T
           T && F = F
           F && T = F
           F && F = F
        --------OR---------
           T || T = T
           T || F = T
           F || T = T 
           F || F = F
        ------NOT-------
           !T = F
           !F = T
        -Increment/decrement operator: ++ -- (part of arithmetic operator)
        -short hand operators: += -=
        -ternary operators: ?:(alternative for if else)(condition? condition become true:condition become false)
        -Truthy operator(only if is there)(condition && statements when condition become true)
        -Spread operator... : used to expand an iterating variable to a single variable
        -Rest operator... : used to combine rest of the data to a single array
    -Conditional statements
       -if statements
           synatx: if(condition){if body: executes when condition satisfy}
       -if-else statements
            syntax: if(condition){if body: executes when condition satisfy} else { executes when condition false}
       -else-if ladders
       -switch cases
   -Looping statements:repeating same tasks multiple times
       -while Loop 
          syntax: 
             1.initialise a variable with a value
             2.while(condition should include initialised variable){
                  while body executes when condition is true
               3. Change the value of variable that used in the condition
             }


       -for loop
          syntax: for(initialise a variable with a value;condition should include initialised variable;
          Change the value of variable that used in the condition){
            for body executes when condition is true
          }
          -break statements
          -continue statements
      -nested loop: a loop inside another loop
   -Function : used to perform specific tasks during the code
      -2 parts
         -function definition: defining the task to be performed
             syntax: function function-name(parameters used to perform task){
               defining task in function body (block scope which means cannot access outside)
             }
         -Function call : to execute a function
             syntax: function-name(arguments to be passed to the function definition)
         -return statements:return data from function definition to function call
         -Types of function
           -Arrow function:alternative for function definition, function-name = (parameters used to perform task)=>{
             }
             -is not hoisted
           -Predefined function: console.log(), Math.floor()
           -Callback function: function definition inside another function call, completes its execution only after completion of the function
           inside it
           -anonymous function: self executing function,nameless function
           -Nested function: function definition inside another function definition
               -closure property: nested fn can access parent variable ,global variable and its own variable
           -Recursive function: calling a function inside its own definition
   -Array: used to hold multiples values in a single variable
         -to access each value from an array use it's index,array-name[index-number]
         -total count of items in array : length
         -type of array : object
         -to access array items one by one 
             -using normal for loop
             -using for - of loop : for(let variable-name of array-name){} return array items
             -using for - in loop : for(let variable-name in array-name){} return array index
         -Methods: array-name.method()
             -push(item) : used to insert data at the end of an existing array
             -unshift(item) : used to insert data at the first of an existing array
             -pop(): used to remove data at the end of an existing array
             -shift() : used to remove data at the first of an existing array
             -sort(comparefn):used to sort array
                 -comparefn: (num1,num2)=>num1-num2(ascending order)
                           : (num1,num2)=>num2-num1(descending order)
             -forEach(callbackfn:(value,index,array)=>void): alternative to for of loop
             -filter(callbackfn) : return an array with items satisfying the condition from an existing array
             -find(callbackfn) : return an items satisfying the condition from an existing array
             -map(callbackfn) : return a new array with values after applying a mapping function to existing array
             -reduce(callbackfn) : return a single value which is either smallest/largest/ total sum from an existing array after applying reduce fn
                   -if we are using arithmetic fn in reduce array should only contain numbers
             -reduceRight(callbackfn) : return a single value (either smallest/largest) which is the first item from an existing array
                                        after applying reduce fn
             -some(callbackfn) : return true/false based on condition applied to all items in given array
             -flat(depth) : return array with corresponding depth as dimension,to convert to one dimension give depth as 'Infinity'
             -includes(key) : return boolean based on the key present in the given array
             -indexOf(item) : return index number corresponding to the item
             -splice(starting index,delete count) : used to delete items from an array and return an array with removed item
             -join(seperator) : return a string with array value separated using the given seperator
    -String : 
          -Methods
               -substring() : Returns substring at the specified location within a String Object
               -toLowerCase()
               -toUpperCase()
               -startsWith()
               -endsWith()
               -trim()
               -includes()
               -split()
               -slice()
               -eval(string-expression) :used to evaluate an expression as a string
    -Object : Data storing as a {key:value} pair
              -use key : To access value from an object
                   syntax : object-name['key'] / object-name.key
              -using in operator we can check a key is in object,return a boolean
                   syntax : "key" in object-name  
              -Insert value to an existing object
                   object-name["key] = value / object-name.key = value
              -Object.values(object-name) : return an array of value of the given object
              -Object.keys(object-name) : return an array of keys of the given object
              -Object.assign(target-object,source) : used to insert data in an existing objects
              -Methods
                  -hasOwnProperty(key) : we can check a key is in object , return a boolean
    -Access specifiers : used to specify the access of a variable/function
           -public
           -private
           -protected
    -Object Oriented Programming(OOPs)
              -Object : real time entity
              -Class: blueprint of object
              -Reference: used to refer property to its class
              -constructor() : method used to initialise class property
              -Features of OOPs
                 -Inheritance : use to get data from one class to another
                     -Classical inheritance : use extends keyword
                     -Prototype Inheritance : use __proto__
                 -Polymorphism : to implement polymorphism in js use REST operator(...)
                 -Abstraction : hiding the important data from user
                 -Encapsulation : data inside another data like class
-Try-Catch-finally Block : used to handle run time error
------------------JAVASCRIPT -Front end concepts------------------------
-used to provide behaviour to the webpage
-Ways to applying JS in HTML
      -Internal JS : use script tag to provide js code in HTML
      -External JS : link external js file with HTML using script tag
-DOM: Document object  Model for a webpage 
      -A tree structure corresponding to a webpage,there will be a single root/node (html tag) which is made up of js object
      -JS can access webpage/HTML elements via DOM using 'document' object
-DOM Methods : Selecting HTML elements to js code
      -using tag name: document.getElementsByTagName('tag-name')
      -using class name : document.getElementsByClass('class-name')
      -using id: document.getElementById('id-name')
      -using querySelector : document.querySelector('tag/#id/.class-name')
      -using querySelectorAll : document.querySelectorAll('tag/#id/.class-name')
-Event : triggered by user actions 
      -Mouse Related Events : click,move,drag...
      -Keyboard Related Events : keypressdown,keyup
      -Text based Events
-Access / update content of a tag : 
      -innerHTML
      -innerText
-Permanent data storage in Browser:
      -Using Local storage
      -Using Session storage
      -Methods : both key and value must be string
          -setItem(key,value) : used to store data in local/session storage
          -getItem(key) : used to get data from local/session storage
          -removeItem(key) : used to delete data from local/session storage
-API : Application Programming Interface - used to communicate Application in internet
      -URL : Uniform Resource Locator
           -ex : https://jsonplaceholder.typicode.com/users/1
           baseurl: https://jsonplaceholder.typicode.com/
      -URI-Uniform Resource Identifier ex: users
      -Path parameters : ex:1
      -Query parameter: values followed with ? in url
           ex: https://www.google.com/search?q=jsonplaceholder&rlz=1C1VDKB_enIN1049IN1049&oq=jsonpla&gs_lcrp=EgZjaHJvbWUqDwgBEAAYQxixAxiABBiKBTIGCAAQRRg5Mg8IARAAGEMYsQMYgAQYigUyDQgCEAAYgwEYsQMYgAQyEAgDEAAYgwEYsQMYgAQYigUyBwgEEAAYgAQyDQgFEAAYgwEYsQMYgAQyBwgGEAAYgAQyBggHEAUYQNIBCDM5MDlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
      -Body parameter : 
      -Types of API Architectural
           -REST API : HTTP, JSON
           -SOAP API : HTTP, XML
           -GRAPHL
      -JSON : JAVASCRIPT Object Notation
         -{"key":value}
         -key should be string
      -HTTP(Hyper Text Transfer Protocol)
         -HTTP Requests
               -GET(to get a data from server to client)
               -POST(to store/add data to server from client)
               -PUT(to edit/update existing data to server from client)
               -DELETE(to remove a data from server)
         -HTTP Response Codes : to identify status of client requests by Browser.Status codes are:
               -1xx : Informational
               -2xx : Success
               -3xx : Redirection
               -4xx : Client error
               -5xx : Server error
         -Resolving Function call in JS 
         -Synchronous Function :without delay it give output
         -Asynchronous functions 
         -JS use single Call stack(single threaded programming) to monitor it using event loop
            -Asynchronous
                 -Callback hold in callback queue
                 -API call hold in microtask queue(priority queue)
                 -Resolving Asynchronous functions
                     -if we use call back to resolve asynchronous fn it may lead 'Callback hell: nesting of callback fn'scenario
                     -Promise : avoid callback hell
                        -has 2 states:
                             -Resolved state : use then method to get the Response
                             -Reject state : use catch method to get the reason to fail the function call
                             -Pending state : waiting duration to get response for asynchronous fn call
                        -Async-Await keyword : To resolve promise
                             -'async' is used in a function to indicate its asynchronous
                             -use 'await' keyword infront of async function call,to wait till its completed
                             -only resolved state will get after await to completes the async function call
                             -to get reject state use try-catch block
            -API Call using JS
                    -using XMLHTTPRequest :AJAX (asynchronous JS & XML)
                    -fetch() : returns promise
                    -axios library : return promise

-------------------------------------------------------------------------------------
----------------------REACT -Advanced Front end technology-------------------------------------
-------------------------------------------------------------------------------------
-Meta introduced React
-Basic concepts
   -React app is a collection of different library
   -Components : Part of user Interface
   -React App is a collection of Components
         -*Components are arranged in a tree structure
         -There will be a root component in react app which is commonly known as 'App'
   -React is used to create Single Page Application
   -Pure functions : which does not cause side effects,used to create functional component
   -Declarative Approach
   -*Virtual DOM : lightweight memory representation of real DOM
      -Reconciliation :
   -*JSX(JAVASCRIPT XML) : (language used to write code in React) - used to Display content in Browser
      - ex: JSX elements: const heading = <h1> Heading1 </h1>
      -Rules for using JSX 
         -Every JSX elements must be inside a single parent tag
         -Every tag must have a closing tag.ex: <h1>heading</h1> , <br/>(self closing tags)
         -Parent tag can be any container tag/ simply react fragment (<>....</>)
         -Attribute 'class' is 'className' in JSX
         -JSX using camel case
         -Instead of Attribute 'for' use 'htmlFor' in JSX
         -use {js-expression} : to provide js expression in JSX
    -React App Creation 
       -CRA(using create-react-app command)
       -Vite : building tool for web projects
          -installing Globally : npm i -g create-vite
          -React app using vite : npm create vite@latest react-app -- --template react
    -React App File & Folder structure
        -package.json : npm configuration file for the projects
        -package-lock.json : contains version history all packages installed in the projects
        -.gitignore file : contains files/folders name which is ignored while adding to git
    -index.html file : entry page to react app
    -node-modules : used to hold copies of dependent libraries of react project(we can install using command : npm install)
    -public folder : react project can access data stored in public folder as globally 
    -src folder : define react app here
        -assets folder : used to hold media files used in react app
        -main.jsx file : created ReactDOM with parent node as div with id as 'root', and render the parent (App)
         component inside the node
    -to run react app : use command 'npm run dev'
    -Babel library : transpile JSX code to simple react function which is understood by browser
-*High performance
-*Data Binding/sharing : One way data binding (from parent to child)
-*Components : part of user Interface,independent and reusable code
       -General rules for creating components
            -create a js/jsx file,file name must start with capital letter
       -Different types Components
            -Class based components : use class to create component it can inherit react component
                 -Statefull component: because it can create state
            -Functional based Components : use function to create component,return jsx code
                 -Stateless component: it cannot create state
       -Life cycle methods of React component
            -Mounting Phase : Putting JSX to DOM
                 -constructor()
                 -getDerivedStateFromProps()--(whether they are getting anything from parent)
                 -render()
                 -componentDidMount()
            -Updating Phase : when component is Updating
                 -getDerivedStateFromProps()
                 -shouldComponentUpdate()
                 -render()
                 -getSnapshotBeforeUpdate()
                 -componentDidUpdate()
            -Unmounting Phase : Removing component from DOM
                 -componentWillUnmount()
-Difference between functional and class based components
--------------------------------------------------------------------------------------------------------------
      Functional Component                                         Class Component
--------------------------------------------------------------------------------------------------------------- 
   1.JS pure function to accept props                     1.is class extended from react component it render
     and returns JSX elements                               function return JSX element
   2.it executes from top to bottom,once                  2.Component alive depending on different life 
     it returns JSX,then it cannot be alive                 cycle
   3.Stateless component                                  3.Statefull component
   4.Hooks are used                                       4.Hooks are not used
   5.Lifecycle method is not available                    5.can use Life cycle method in component
   6.No need render function                              6.It requires render to return JSX
   7.No need of constructor                               7.Constructor used to initialise state
-Props Object : Property of a component, using Props a component can get shared object from its parent,
                props will be get as an 'argument' of functional component
-Styling in React component - using Class
      -Using Inline CSS : style={{property:value}}
      -Using External CSS : using external css file,import css file to component file
      -Using CSS Module File : file with extension as .module.css is known as CSS Module file.
-React Events Binding
      -Binding a function without argument : event={function-name}
      -Binding a function argument : event={()=>function-name(arg)} 
      -Binding a function argument as event : event={(e)=>function-name(e)}
-Conditional rendering - Based on a condition we can control the jsx element in browser
      -if statement : use opeartor &&(it is truthy operator)
      -if-else statement : use operator ?:
-react State : is an object used to store data / information regarding component,whenever state changes,the
               component re-renders
               - use setState(value) : to update state ,which is method
-React Hooks : is a predefined function used to provide react component features to functional components
      -Hooks are function with function name starts with 'use' keyword
      -to use a hook in functional component , we must call the hook
      -Rule for calling hooks in functional component
          -Import hook from react,in component
          -Hooks can called at the top level of the component
          -Hooks cannot be Conditional
     -Types of hooks
          -Predefined hooks
             -useState(initial-value): to help functional component to create state
               syntax: const [state-name,state updating function name] = useState(initial-value)
             -useEffect(callback function,dependency) : used to provide side effects to your component
                 -function : used define side effects applied to component
                 -dependency : based on dependency,useEffect will get called,side effect will applied to the component
                      -no dependency : useEffect hook will call all time in component
                      -[] : useEffect hook will call only at the time in component Creation
                      -[data] : useEffect hook will call at the time in component Creation as well as data changes
             -useParams() : will return path related informations of a component
          -Customized hooks :
             -Create a function with name starts with 'use' keyword
     -Handling List/Array using React 
         -using 'map' method
         -to uniquely identify each item in a list use key attribute in component
      -Styling Framework in REACT
         -Material UI : npm install @mui/material @emotion/react @emotion/styled
         -React Bootstrap: npm install react-bootstrap bootstrap,we have to add bootstrap theme for the proper work of bootstrap,
         bootswatch.com will provide the theme,choose a theme and download its bootstrap.min.css file into project src folder,
         import bootstrap.min.css into main.jsx file
     -React Forms 
         -Controlled Components :  data changes in the form is handled by the component by storing its state using change event
         -Uncontrolled Components : form handled by real DOM
         -To submit form, to prevent it from reloading use preventDefault() method component
     -Set up path for Component in React
         -install react-router-dom : npm i react-router-dom
         -React app must render inside 'BrowserRouter'
         -Components needs to set up path must be inside Routes component of react router dom in App.jsx
         -using Route component define each component path
         -Link component used to redirect form one page to another within an application
    -Higher Order Component(HOC) : a component is argument / props to another component
    -react-toastify library for notification in react-npm i react-toastify
    -API Call in React
        -Axios library: npm i axios
        -Create a folder for services
    -To create the build for the production of your react application use command: npm run build
    --------------------------------------------------------------------------------------
                 JSON SERVER
    --------------------------------------------------------------------------------------
    1.Create a folder to hold json file
    2.Create package.json file inside the folder : npm init -y
    3.Create db.json file inside the folder and resources as key to the json file
    4.To run json file install json-server: npm i json-server / npm i json-server@0.17.4
    5.To run json file in localhost use : npx json-server db.json/node index.js
----------------------------------------------------------------------------------------
                DEPLOYING A JSON FILE using NODE JS
----------------------------------------------------------------------------------------
1.Create index.js file in server folder
2.Update script in package.json file as "start : "node index.js"
3.create .gitignore file and add 'node-modules' folder
4.Define json-server to run json file in index.js
    -import json-server
    -create server to run json file using create() method of jsonServer
    -create middleware stored by JSON Server.
    -set up route for json file in server
    -set up port for running server app
    -use middleware,route in server app
    -listen the app in given port to resolve client request
5.To run the app,use 'node index.js'


-----------------------------------------------------------------------------------------
                REDUX - STATE MANAGEMENT TOOL
-----------------------------------------------------------------------------------------
1.To avoid props drilling to manage state in a react app
2.Libraries needed to implement REDUX
  -React-Redux : official react bindings for redux
  -Redux Toolkit : toolset for efficient redux development
  -install libraries: npm install @reduxjs/toolkit react-redux
3.REDUX FEATURES
  -Store: using 'configureStore()' to create redux store,use 'Provider' to make the store available for react app
  -createSlice():used to combine action and reducer together,it returns actions and reducer to create slice we have to pass configuration with
  following data : name,initialState,reducers where we will define action to update the state
      -when component dispatch action with argument to update the state with argument then action function will get from its 'payload'
  -Action: define logic to update the state
  -Reducer: used to hold updated state to store
  -Redux DevTools Extension : used for debugging applications's state changes.
  -useSelector hook : use state from store to component,usage : useSelector(state=>state.reducer-name)
  -useDispatch hook: used to execute action from component
  -createAsyncThunk() : A function that accepts a Redux action type string and a callback function that should return a promise.
      -returns a standard Redux thunk action creator,pending,fulfilled and rejected cases
      -its output returns extraReducer, where we can add cases using builder class
