

async function getProviders() {
    const appId = "df18e230169160c88b27ae6a222d9b10";
    const provURL = `https://api.themoviedb.org/3/movie/${film_id}/watch/providers?${appId}`
    try {
        let response = await fetch(provURL)
        console.log(response);
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          getProviders(data.results);
        } else {
          console.log(`server error: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.log(`Network error: ${error.message}`);
      }
};

export default getProviders;