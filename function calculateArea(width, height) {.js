function calculateArea(width, height) {
  while (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
    console.error("Invalid input. Please enter positive numbers.");
    return; // Exit the function if invalid input
  }
  const area = width * height;
  console.log(`The area of the rectangle is: ${area}`);
  return area;
}

calculateArea(5, 3);
calculateArea(10, 7);