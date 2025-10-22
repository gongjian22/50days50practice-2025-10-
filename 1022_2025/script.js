// const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   https://icanhazdadjoke.com



const joke=document.getElementById('joke')

const btn=document.getElementById('jokeBtn')

btn.addEventListener('click',getJokeWords)

async function getJokeWords(){
    const config={
        headers:{
            Accept:'application/json'
        }
    }

    let res = await fetch('https://icanhazdadjoke.com',config)
    let data = await res.json()
    console.log(data);
    joke.innerHTML=data.joke
    
}