//console.log("hello world")
async function demoPromise() {
    try {
      let message = await myFirstPromise;
      let message  = await helloPromise();
      console.log(message);
  
    }catch((error) => { 
        console.log("Error:" + error.message);
    })
  }
  
  // finally, call our async function
  
  (async () => { 
    await myDate();
  })();
