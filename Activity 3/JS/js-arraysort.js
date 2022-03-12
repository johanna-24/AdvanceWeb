const juice = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sort").innerHTML = juice;

// First sort the array
juice.sort();

// Then reverse it:
juice.reverse();

document.getElementById("rev").innerHTML = juice;