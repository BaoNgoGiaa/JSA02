let location = "VN";
const url = 'https://coronavirus-smartable.p.rapidapi.com/news/v1/US/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc04b33955mshb616929d049d2a9p1088e7jsnf26580aaa44a',
		'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com'
	}
};
fetch(url, options).then((response) => {
    return response.json();
}).then((data) => {
    
});

