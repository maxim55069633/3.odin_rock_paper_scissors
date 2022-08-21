# odin_rock_paper_scissors

version 2.0

Add simple UI. Now users can select the elements by clicking on the images. They don't need to check the outcome via the console. 

Disclaimer: all the images come from me.


---

version 1.0

This project is about the classic game "Rock Paper Scissors" using JavaScript. Players can input their selection among the three options five times. Their input could be case-insensitive. Then the console will claim who is the winner.

a mistake I made:
At first, I wrote 
"
function standardizeInput(Selection)
{
    return Selection.toLowerCase().replace(Selection[0], Selection[0].toUpperCase() );
}
"
but later I found I failed to change some input into the standard(first letter uppercase, the rest letter lowercase). For example Rock ends up like rock. This is because "Rock".toLowerCase() would be "rock". At this point, Selection[0] is still "R" since toLowerCase won't change the original string. It's impossible to find a "R" in the rock so our expectation is not met.
so I modified this function like:
"
function standardizeInput(Selection)
{
    return Selection.toLowerCase().replace(Selection[0].toLowerCase(), Selection[0].toUpperCase() );
}
" 

note:
1.
replace:
Definition and Usage
The replace() method searches a string for a value or a regular expression.
The replace() method does not change the original string.
If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.

2.
toLowerCase:
The toLowerCase() method does not change the original string.
