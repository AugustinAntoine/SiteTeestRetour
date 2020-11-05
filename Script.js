// var images = ["bird.jpg", "couple.jpg", "crocodile.jpg", "peaks.jpg"];
var images = [
    'https://cdn.pixabay.com/photo/2020/02/15/22/55/couple-4852225__340.jpg',
    'https://cdn.pixabay.com/photo/2020/10/20/03/22/bird-5669389__340.jpg',
    'https://cdn.pixabay.com/photo/2020/05/16/10/04/crocodile-5176851__340.jpg',
    'https://cdn.pixabay.com/photo/2020/10/11/09/04/peak-5645235__340.jpg'
];

function afficherImages(/*value, index,*/ array) {
    // let adresseImage = "images/" + value;
	let baliseImage = "";
	
	array.forEach(lienPhoto=>{
		baliseImage += '<img src="'+ lienPhoto /*value+ '">'*/;
		baliseImage +='" alt="Placeholder image">';
	});
    
    document.write(baliseImage);
}

afficherImages(images);