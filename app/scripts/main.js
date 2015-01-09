// Templates
var showRepos = _.template($('.repos').text());

var showProfile = _.template($('.profile').text());

// Fetch repo
$.getJSON('https://api.github.com/users/drewbot/repos').done(function(data){
	renderRepos(data);
});

$.getJSON('https://api.github.com/users/drewbot').done(function(data){
	renderProfile(data);
});

$.getJSON('https://api.github.com/users/drewbot/starred').done(function(data){
	renderStars(data);
});

// Render functions
function renderRepos (array) {	
	array.forEach(function(info){
	  var rendered = showRepos( info ); 
	  $('.repo-container').append(rendered);
	});
};

function renderProfile (profile) {	
	var rendered = showProfile( profile ); 
	$('.profile-info').prepend(rendered);
};

function renderStars (starredRepos) {	
	$('.star-info').prepend(starredRepos.length);
};





// var showProfile = _.template($('.profile').text());
 
// profile.map(function(info){
 
//   var renderedPro = showProfile( info );
 
//   $('.profile-info').prepend(renderedPro);
// })

 
// profile.forEach(function(info){
 
//   var rendered = showRepos( info );
 
//   $('body').prepend(rendered);
// })




























