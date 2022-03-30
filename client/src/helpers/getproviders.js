

export default async function getProviders(f) {
  console.log(f);
    const appId = ""; //add your own API key here
    const provURL = `https://api.themoviedb.org/3/movie/${f.id}/watch/providers?api_key=${appId}`
    try {
        let response = await fetch(provURL)
        console.log(response);
        if (response.ok) {
          let data = await response.json();
          return data.results.GB;
        } else {
          console.log(`server error: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.log(`Network error: ${error.message}`);
      }
};

