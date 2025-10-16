# Java-Script with notes



Arrays, Objects, Browser web-events, functions

JavaScript (JS) is a dynamically typed language.

Typescript is a statically typed language



### **Tutorial 03:**

#### **GitHub:**

* Create new repository
* Code → Codespace → Create in Codespace
* Goes to the new tab where VS Code will be opened



#### **For installation of JS in Codespace:**

* Open View and the Command Palette (Ctrl + Shift + P)
* Write "container" → choose "Codespace: Add Dev Container Configuration Files"
* Click on "Create new Container"
* Search for "Node.js and JavaScript" and click on it.
* Choose the default value upon version
* Click on OK on next window without choosing any option
* Click on the Rebuild.



#### **Saving in GitHub:**

* Make changes of your own choices in the files you made up in the VS code
* Go to the Source control placed at the left bar
* Click on the + sign of the files you have changed
* Write "container config done" and click commit
* On the Changes headline, click on the more options
* Simply click on Push
* Now Reload the GitHub's main page and see the changes you made in the files





### Tutorial 04:

##### let vs. var vs. const



###### **const:**

variable values can't be changed



###### **let:**

variable values can be changed, after assigning any value



###### **var:**

same as **let** but used now a days because of some issues in **block** and **functional** **scope**



##### **Scope:**

Anything which is **written inside the curly brackets {}** such as in loops or if/else statements are called as scopes



 	Also, if you declare the variable using let, const, or var, and forgets to assign the value, after that if you print that it will show you the **undefined**





### Tutorial 05:

#### Datatypes and ECMA Standard



##### **Primitives Data types**:

Built-in - **Fundamental data types**

N - N - S - S - B - B - U

Null - Number - Symbol - String - Boolean - Bigint - Undefined

* **null:** 	standalone value
* **number:** 	range in between 2 to power 53
* **symbol:** 	unique
* **string:** 	""
* **boolean:** 	true/false
* **bigint:** 	higher value number that **exceeds** the range of **number**
* **undefined:**	



##### **Non-Primitive Data types:**

Array - Object - Functions - Regular Expression - Date



**Note:** Non-Primitive Data types can also be known as Reference Data Types



### Tutorial 06:

#### Data type conversion



Whenever you want to convert the data type of any variable, then you have to define the variable name and then write the type in which you need to change, and that's all.

* number → Number(preVarName)
* null → Null(preNullVar)
* boolean → Boolean(preBoolVar)
* bigint → Bigint(preBigintVar)
* string → String(preStrVar)
* symbol → Symbol(preSymVar)
* undefined → Undefined(preUndVar)





Tutorial 07:
Operators
---



###### Arithmetic Operator:

* Addition
* Subtraction
* Multiplication
* Division
* Modulus
* Increment (Post and Pre)
* Decrement



###### Assignment Operator:

 	used for assigning values to variables with or without increment and decrement



###### Comparison Operator: 

 	used for comparing variables with values like for <,>, <=, >=, and != etc.



###### Logical Operators:

 	usage of AND, OR, NOT, NOR etc.



###### Operator Precedence





### Tutorial 08:

#### Data Type Comparison

 	The data type of two variables—whether they contain numbers, strings, or any other type—can be compared using the triple equals sign (===). This operator doesn’t just check the values of the variables; it also checks whether their data types are the same. First, it compares the data types of both variables, and if they match, it then compares their actual values.





### Tutorial 09:

#### Data Types Summary

Return type of variables in JavaScript

##### 1\) Primitive Datatypes

       Number → number

       String  → string

       Boolean  → boolean

       null  → object

       undefined  →  undefined

       Symbol  →  symbol

       Bigint  →  bigint



##### 2\) Non-primitive Datatypes

       Arrays  →  object

       Function  →  function

       Object  →  object



##### Memory

###### Stack \& Heap



**Stack:**	Primitive - You will get a copy of the variable when inside the Stack Memory



**Heap:**	Non-Primitive - You will get a reference of the original variable when inside the Heap Memory. So, if you change anything in the Heap memory's variable, you will get a change in the original variable.



* **Primitive Datatypes** are stored in **stack memory**
* **Non-primitive Datatypes** are stored in **heap memory**
* **Stack memory** is **faster** than **heap memory**
* Primitive Datatypes are faster than Non-primitive Datatypes
* **Primitive** **Datatypes** are **immutable** (cannot be changed)
* **Non-primitive** **Datatypes** are **mutable** (can be changed)







