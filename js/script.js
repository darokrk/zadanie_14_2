
var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'http://ekino-tv.pl/static/normal/580lvlhd3d21.jpg',
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'http://is4.mzstatic.com/image/thumb/Video30/v4/83/a8/ca/83a8ca3b-4d38-64ec-a789-005ea973af54/source/1200x630bb.jpg'
	},
	{
		id: 3,
		title: 'Obcy',
		desc: 'Film o obcym',
		img: 'http://cdn.collider.com/wp-content/uploads/2016/03/alien-day-poster.jpg'
	}
];

var serials = [
	{
		id: 1,

		title: 'True Detective',

		desc: 'serial o detektywach',

		image: 'https://target.scene7.com/is/image/Target/15375207?wid=520&hei=520&fmt=pjpeg'
	},

	{
		id: 2,

		title: 'Vikings',

		desc: 'serial o Vikingach',

		image: 'https://images-na.ssl-images-amazon.com/images/I/81n30Llg63L._SX342_.jpg'
	},

	{
		id: 3,

		title: 'Breaking Bad',

		desc: 'serial opowiada o nauczycielu chemii, który postanawia dorobić się na produkcji narkotyków',

		image: 'http://images.amcnetworks.com/amc.com/wp-content/uploads/2010/12/breaking-bad-S5-400x600-compressedV1.jpg'
	}


];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img})
	);
});


var serialElements = serials.map(function(serial) {

	return React.createElement('li', {key: serial.id},

		React.createElement('h2', {}, serial.title),

		React.createElement('p', {}, serial.desc),

		React.createElement('img', {src: serial.image})

	);
});


var element = 

	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements),
		React.createElement('h1', {}, 'Lista seriali'),
		React.createElement('ol', {}, serialElements)
	);

ReactDOM.render(element, document.getElementById('app'));