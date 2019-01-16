var n = 25;
var result = 0;

/*Using if and else, make decisions based on the values of n and result with the following rules:

When n is even, set the value of result to result's current value plus 10.
When n is odd, set the value of result to result's current value minus the value of n.
Do not declare new variables.
Be sure your solution works for all values of n and result.*/

if (n % 2 == 0) {
    result = result + 10;
} else {
    result = result - n;
}