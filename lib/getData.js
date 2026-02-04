//This function is a data fetching helper
//1- It gets data from an API(endpoint is the API URL you want to fetch)
//2- It returns the data so your components can use it 
// In simple words:“Go to this API → get data → give data back to my app”

export async function getData(endpoint) {
  try {
    const response = await fetch(endpoint, {
      cache: "no-store",
    });

    const data = await response.json();
    return data;
  }
  
  catch (error) {
    console.log(error);
  }

}

// // Better version:

// export async function getData(endpoint) {
//   try {
//     const response = await fetch(endpoint, {
//       cache: "no-store",
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return await response.json();
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }
