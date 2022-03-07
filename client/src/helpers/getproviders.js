

export default async function getProviders(f) {
  console.log(f);
    const appId = "df18e230169160c88b27ae6a222d9b10";
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

