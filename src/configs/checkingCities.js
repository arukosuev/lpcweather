const API_KEY="6a112264045882ace4816eccef73bff4";
const City = "London";
let cities = ['Baykit','Tura','Turukhansk','Bor','Severo-Yeniseyskiy','Yeniseysk','Strelka','Motygino'
    ,'Vanavara','Yerbogachen','Kodinsk','Manzya','Boguchany','Chunoyar','Achinsk','Bogotol','Kazachinskoye','Novobirilyussy','Pirovskoye','Dzerzhinskoe','Taseyevo','Aban',
    'Kansk','Uzhur','Sharypovo','Balakhta','Yemel\'yanovo','Krasnoyarsk','Sukhobuzimskoye','Beret\'','Shalinskoye','Aginskoye','Irbeyskoye','Uyar','Artyomovsk','Idrinskoye','Kuragino',
    'Krasnoturansk','Minusinsk','Yermakovskoye','Karatuzskoye','Cheremushki','Turan'];
let checkedCities = [];


console.log(new Date);
console.log('unchecked cities = ' + cities.length);

async function gettingTimeForWeather () {

    for (let i = 0; i < cities.length; i++) {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cities[i]}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            console.log(cities[i] + " = " + data.city.name);
            checkedCities.push(cities[i]);
        }
        catch (e) {
            console.log(cities[i] + " = " + e);
        }
    }

    console.log('checked cities = ' + checkedCities.length);
    console.log(new Date);

}

gettingTimeForWeather ();