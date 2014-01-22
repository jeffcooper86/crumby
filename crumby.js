/*
* Crumby v1.0
* Makes breadcrumbs based on the url path.
* Takes the id of the element that will contain the breadcrumbs as a parameter.
* @jecoopr
*/

function makeBreadcrumbs(crumbsContainer) {

	var path,
		pathLength,
		crumbsContainer,
		builtPath,
		firstCrumb,
		currentCrumb,
		i;
		
	// get the breadcrumbs element
	
	crumbsContainer = document.getElementById(crumbsContainer);
		
	if (crumbsContainer) {
		
		// grab the path from the url
		
		path = window.location.pathname;
		
		// check that it's not the homepage
		
		if (path.length > 1) {
			
			path = path.split("/");
			
			// remove the first slash and any trailing slashes
			
			if (path[0] === "") {
				path.splice(0, 1);
			}
			if (path[path.length -1] === "") {
				path.splice(-1, 1);
			}
			
			// build the crumbs
			
			crumbs = document.createElement("div");
			crumbs.className = 'crumbsWrap';
			
			firstCrumb = document.createElement("a");
			firstCrumb.href = "/";
			firstCrumb.innerHTML = "Home";
			crumbs.appendChild(firstCrumb);
			
			pathLength = path.length;
			builtPath = "";			
		
			// make the crumbs that get links
			
			i = 0;
						
			for (i; i < pathLength -1; i += 1) {	
						
				// make a link for each directory in the path	
									
				builtPath += "/" + path[i].toLowerCase();
				currentCrumb = document.createElement('a');
				currentCrumb.href = builtPath;
				currentCrumb.innerHTML = path[i].toLowerCase();
				crumbs.appendChild(currentCrumb);
			}
			
			// make the current page crumb without a link
			
			currentCrumb = document.createElement("span");
			currentCrumb.innerHTML = path[path.length-1];
			crumbs.appendChild(currentCrumb);
			
			// attach the breadcrumbs to the containing element in the dom all at once	
									
			crumbsContainer.appendChild(crumbs);
		}
	}
}

// Make the breadcrumbs inside the element with the id passed in.

makeBreadcrumbs('breadcrumbs');
