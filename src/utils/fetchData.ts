export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json'
      },
    })
    return response.json();
  } catch (e) {
    return {
      error: `Something went wrong ${e}`
    }
  }
}
