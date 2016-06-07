	function facultySelected(){
  		var faculty = document.getElementById("faculty");
  		var faculty_in = document.getElementById("faculty_in");
  		var faculty_ag = document.getElementById("faculty_ag");
  		faculty_in.style.display = "none";
  		faculty_ag.style.display = "none";
  		var sg = faculty.options[faculty.selectedIndex].value;
  		if(sg == "in" )
  		{
  			faculty_in.style.display = "block";
  		}
  		else if(sg == "ag")
  		{
  			faculty_ag.style.display = "block";
  		}
  		else if (sg == "empty") {

  		}
  		else
  		{
  			alert("you are not important enough ;)");
  		}
}
function sgSelected(fac){
	var sg = document.getElementById("faculty_"+fac);
	var ain_courses = document.getElementById("ain_courses");
	var kd_courses = document.getElementById("kd_courses");
	ain_courses.style.display = "none";
	kd_courses.style.display="none";
	var course = sg.options[sg.selectedIndex].value;
	if(course == "ain")
	{
		ain_courses.style.display = "block";
	}
	else if(course == "kd")
	{
		kd_courses.style.display = "block";

	}
}
function courseSelected(){
	var courses = document.getElementById("kd_courses");
	var contend = document.getElementById("contend");
	contend.style.display="none";
	var course = courses.options[courses.selectedIndex].value;
	if(course == "ll")
	{
		contend.style.display = "block";
	}
}