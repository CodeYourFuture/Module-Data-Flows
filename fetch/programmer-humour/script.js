const endpointAPI = "https://xkcd.now.sh/?comic=latest";
async function fetchData(endpointAPI) {
  try {
    const response = await fetch(endpointAPI);
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Could not fetch data", error);
  }
}
