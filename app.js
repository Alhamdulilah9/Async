// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(arr) {
  for (let value of arr) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    console.log(value);
  }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
// This will log 1, 2, 3, 4, 5 with 1-second intervals


// Task 02: Handling Errors with Async/Await

// Simulate an API call with a delay
function fakeApiCall(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ data: 'Fake API data' });
      } else {
        reject('Failed to fetch data');
      }
    }, 2000); // Simulating 2-second delay
  });
}

// Function to handle API call and errors with async/await
async function awaitCall() {
  try {
    const response = await fakeApiCall(); // Simulating a successful API call
    console.log('Data received:', response.data);
  } catch (error) {
    console.log('Error occurred:', error); // Gracefully handling errors
  }
}

// Example usage
awaitCall(); // This will log the data or the error


// Task 03: Chaining Async/Await

async function firstAsync() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
  console.log('First function completed');
}

async function secondAsync() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
  console.log('Second function completed');
}

async function thirdAsync() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
  console.log('Third function completed');
}

// Function to chain the above functions using async/await
async function chainedAsyncFunctions() {
  await firstAsync();
  await secondAsync();
  await thirdAsync();
  console.log('All functions completed');
}

// Example usage
chainedAsyncFunctions(); // Logs each function's completion with a 1-second delay in sequence


// Summary:
// Iterating with Async/Await - Logs each value of an array with a 1-second delay between logs.
// Handling Errors with Async/Await - Handles errors gracefully in an async function that simulates an API call.
// Chaining Async/Await - Sequentially calls three async functions with 1-second delays between them.
