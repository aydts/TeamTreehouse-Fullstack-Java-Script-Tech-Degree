//define variables
const ul = document.querySelector('.student-list');
const page = document.querySelector('.page');
const li = ul.getElementsByTagName('li');
let  students= $('.student-list li').length;
let showPerPage = 10;
const listing = document.createElement('ul');
const searchBox = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');

$( document ).ready(function() {
//displays students on the "active" page that user is linked to
	function showPage(pageNum, studentList) {
		$(li).hide();
		for (i = 0; i < studentList; i++) {
			if ((i >= (pageNum * showPerPage) - showPerPage) && i < (pageNum * showPerPage)) {
				$(li[i]).show();
	}}}
//creates pages based on the list of students and displays stuends correspond to the active page link
	function appendPageLinks(studentList) {
		let totalPages = Math.ceil(studentList / showPerPage);
    	const listing = document.createElement('ul');
    	$(listing).addClass('pagination');
    	page.appendChild(listing);
    	for (i = 1; i <= totalPages; i++) {
    		const pageNum = document.createElement('li');
    		pageNum.innerHTML = '<a href="#">' + i + '</a>';
    		listing.appendChild(pageNum);
    	}

    	listing.firstChild.firstChild.className = "active";
    	$('a').on("click", function() {
    		$('a').removeClass('active');
    		$(li).hide();
    		showPage(this.textContent, studentList);
    		$(this).addClass('active');
  });}
  //create search Box for page
  function createSearchBox() {
		$(".page-header").append(searchBox);
		$(searchBox).addClass('student-search')
		$(searchBox).append(input);
		$(searchBox).append(button);
		button.textContent = "Search";
	}
//search through list of students & display matchs students if none alert user there are not matches
	function searchList() {
		$(button).on("click", function() {
  		if (input.value === "") {
				alert("There are no matched students.")
			} else {
        var searchName;
				var matchedStudents = [];
				let filter = input.value.toUpperCase();
				$(li).hide();
				$(listing).hide();
				for (i = 0; i < students; i++) {
  				searchName = li[i].querySelector("h3").innerHTML.toUpperCase();
					if (searchName.indexOf(filter) > -1) {
						matchedStudents[i] = searchName;
						$(li[i]).show();
				}}
				matchedStudents = $.grep(matchedStudents,function(n){ return n == 0 || n });
  			if (matchedStudents.length === 0) {
    			alert("There are no matched students.")
					$('.pagination').remove();
				}
  			else if (matchedStudents.length <= 10) {
					$('.pagination').remove();
				}
				else if (matchedStudents.length > 10) {
					$('.pagination').remove();
					appendPageLinks(matchedStudents.length);
					showPage(1, matchedStudents.length);
	}}});}

//call all functions
createSearchBox();
appendPageLinks(students);
showPage(1, students);
$('a').first().addClass('active');
searchList();
});
