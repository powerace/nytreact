//datepicker calendar
$(function () {
    $('#date1, #date2').datepicker({
    	format:'yyyymmdd'
    });
});

//API key
var key = "0185e510e896448695552a72b6d82ae5";

// Search Term
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=";


//make request on submit
$('#app').on("click", "#runSearch", function(e){
	e.preventDefault();
	var searchTerm = $('#searchTerm').val().trim();
	var queryURL = queryURLBase + searchTerm;
	console.log(searchTerm);

	// Num Results
	var numResults = $('#numRecordsSelect').val();

	// Start Year
	var startYear = $('#startYear').val();
	console.log(startYear)
	// End Year
	var endYear = $('#endYear').val();
	console.log(endYear)
	//add start year to query url if not blank
	if (startYear !== undefined){
		queryURL += "&begin_date=" + startYear;
		
	}

	//add end year to query url if not blank
	if (endYear !==  undefined){
		queryURL += "&end_date=" + endYear;
	}

	$.ajax({
		url: queryURL,
		method: 'GET',
		crossDomain: true,
    dataType: 'json'
	}).done(function(data){
		$.ajax({
			url: "/articles",
			method: 'POST'
		})
	})


});


