function renderRepos(a){a.forEach(function(a){var b=showRepos(a);$(".repo-container").append(b)})}function renderProfile(a){var b=showProfile(a);$(".profile-info").prepend(b)}function renderStars(a){$(".star-info").prepend(a.length)}var showRepos=_.template($(".repos").text()),showProfile=_.template($(".profile").text());$.getJSON("https://api.github.com/users/drewbot/repos").done(function(a){renderRepos(a)}),$.getJSON("https://api.github.com/users/drewbot").done(function(a){renderProfile(a)}),$.getJSON("https://api.github.com/users/drewbot/starred").done(function(a){renderStars(a)});