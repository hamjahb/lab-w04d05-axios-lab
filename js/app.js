const allChampionsUrl = 'http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json';

const button = document.querySelector('#allChampions');
const body = document.querySelector('#champion');


const allChampions = (()=>{
    axios({
        method:'GET',
        url:allChampionsUrl
    })

    .then((response)=>{
        // console.log(response.data.data);

        for (let champion in response.data.data) {
            // console.log(champion);
            const nameElement = document.createElement("div");
            const blurbElement = document.createElement("div");


            const championName = champion;
            // const championBlurb = champion.data.data.blurb;

            // console.log(championName);
            // console.log(championBlurb);
            
            

            nameElement.innerText = championName;
            // blurbElement.innerText = championBlurb;

            body.appendChild(nameElement);
        }
        
            
    })

    .catch((error)=>{
        console.log(error);
        
    })
})


button.addEventListener('click', allChampions);



// spacific champion


const searhChampionButton = document.querySelector('#searchChampion');


const fetchChampion = ((searchChampion) => {
    axios({
        method: 'GET',
        url: `http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion/${searchChampion}.json`
    })

    .then ((response)  => {
        // console.log(response.data.data[searchChampion].blurb);
        const nameElement = document.createElement("div");
        const blurbElement = document.createElement("div");

        const championName = response.data.data[searchChampion].name;
        const championBlurb = response.data.data[searchChampion].blurb;


        nameElement.innerText = championName;
        blurbElement.innerText = championBlurb;

        body.append(championName);
        body.append(championBlurb)



        const imgUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${searchChampion}_0.jpg`

        document.body.style.backgroundImage = `url(${imgUrl})`


        
    })

    .catch((error) => {
        console.log(error);
        
    })

})

searhChampionButton.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchChampionValue = document.querySelector('#championName').value;
    fetchChampion(searchChampionValue)
})