## Beep-Boop 

#### Webpage using HTML, CSS and JavaScript to create a machine that responds "Beep," "Boop" or "I'm sorry Dave, I'm afraid I can't do that." 8.23.19

#### By Carrie Schmid

## Description

A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

_Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
_Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
_Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."_

Specs List

| Input Example     | Output Example     | Spec                                                                     |    
| :-------------    | :-------------     | :-------------                                                           |
| 3, 34, 356        | "I'm sorry, Dave. I'm afraid I can't do that." |The program should take a number containing the digit 3 and return "I'm sorry, Dave. I'm afraid I can't do that."|
| 2, 32, 242        | "Boop"             |The program should take a number containing the digit 2 and return "Boop!"|
| 1, 21, 121        | "Beep"             |The program should take a number containing the digit 1 and return "Beep!"|
| 5, 57, 899        | 5, 57, 899         |The program should take a number and return the inputted number.|
|                   |                    |The program should append all outputs returns to a list.|
| a,^,!             | "Please enter a number " |The program should take a non-numeric entries and return "Please enter a number."|


## Setup/Installation Requirements

* Clone the repository at https://github.com/carriepederson7/beep-boop.git
* Open index.html in browser


## Known Bugs

There are no known bugs.

## Support and contact details

Carrie Schmid, carriepederson7@gmail.com

## Technologies Used

HTML, CSS, BootStrap, JavaScript, jQuery

### License

Copyright (c) 2019 **Carrie Schmid**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
