var imageArray = [
"http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/catffaceheader.jpg",
"http://coolwildlife.com/wp-content/uploads/galleries/post-1593/Brown%20Bear%20Picture%20001.jpg",
"https://i.ytimg.com/vi/mCPgE3jRmQo/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=7sYWXAGpkyeRKYkOI1bcxEX8_dI",
"http://game.ava360.com/uploads/thumbs/d024661ec-1.jpg",
"https://i.ytimg.com/vi/DUmULWaBugk/hqdefault.jpg",
"http://www.browncafe.com/community/data/avatars/l/54/54118.jpg?1422553561",
"https://lh3.googleusercontent.com/proxy/3Qz3jwK9iPwNtHT0b6gUdxUvUGHCoQIfZZGZgw3iZkzgfGu6qo53QDIvCnWjLc0mxv6ZNnyAunBTpgq44ZpsEKmkOmmmlLpf9G5umBShf7s9=w426-h319-p",
"https://lh3.googleusercontent.com/-6SLG8DNX5gI/U5O2JjZ1M7I/AAAAAAAAA_o/dwnBLZ7p9sc/w426-h267/14%2B-%2B1"
];
var currentIndex = 0;


function renderImage() {
	if (currentIndex<0){
		currentIndex = imageArray.length - 1;
		} else if (currentIndex >= imageArray.length){
		currentIndex = 0;
		} 
	$('#thePhoto').attr('src', imageArray[currentIndex]);
}

renderImage();

$('#forwardBtn').on('click', function(){
	//this is what happens when it's clicked
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});



var name = prompt("What's your name");
var outputString = "Happy Holidays, " + name + "!";
$("h1").html(outputString);





// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Person');
        data.addColumn('number', 'Cheerfulness');
        data.addRows([
          ['Jake', 369],
          ['Sister', 118],
          ['Mother', 248],
          ['Father', 237],
          ['Creepy Man in my Basement', 15]
        ]);

var chartWidth = $(window).width()*0.45;


        // Set chart options
        var options = {
		'title':'Cheerfulness of My Family',
		'width': chartWidth,
        'width':400,
        'height':300,
	    'backgroundColor': '#FAFBF7',
		'colors': ['#468263']
					   };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

