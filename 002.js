function foo(a = 1, b = 2, c = 3) {
  console.log(a);
  console.log(b);
  console.log(c);
}

foo(b = 5);

// What will be displayed in console??
// 1, 2, 3 ?
// 1, 5, 3 ?
// 5, 2, 3 ?
// Error ?
