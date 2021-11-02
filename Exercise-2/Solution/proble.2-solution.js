function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`make request to ${location}`);
    if (location === "google") {
      resolve("google say hello");
    } else {
      reject("we can only work with google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`extra information + ${response}`);
  });
}

async function makeReq() {
  try {
    const response = await makeRequest("google");
    console.log("response recieved");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
makeReq();
