const hpUrl=`http://hp-api.herokuapp.com/api/characters`;

const searchBtn = () => {

    const typedName = document.getElementById("search-reads").value;
    
    fetch(hpUrl)
    .then(response => response.json())
    .then(data => {
        
        let hpObj = data.find(hp =>typedName.toLowerCase() === hp.name.toLowerCase());
        console.log(hpObj.name);

        document.querySelector("#image").src = hpObj.image;   
        document.querySelector("#name").innerHTML = hpObj.name;
        document.querySelector("#bDay").innerHTML = hpObj.dateOfBirth;
        document.querySelector("#eyeColor").innerHTML = hpObj.eyeColour;
        document.querySelector("#hairColor").innerHTML = hpObj.hairColour;
        document.querySelector("#gender").innerHTML = hpObj.gender;
        document.querySelector("#house").innerHTML = hpObj.house;
        document.querySelector("#ancestry").innserHTML = hpObj.ancestry;
        document.querySelector("#patronus").innerHTML = hpObj.patronus;
    });
};
