async function getToken() {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token',
        {
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${btoa("c51af2232b7e47b5955bd22c254c4600" + ':' + "98fd476d055e4c9faf686f8766d70741")}`,
            },
            body: "grant_type=client_credentials"
        }
    )
    const auth = await response.json()
    localStorage.setItem('token',`${auth.token_type} ${auth.access_token}`)
  } catch (error) {
    console.log(error);
  }
}

export { getToken }
