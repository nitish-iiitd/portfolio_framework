$(document).ready(function(){

	var json_file = "../static/nitish.json"
	//var json_file = "https://github.com/nitish-iiitd/Portfolio/blob/master/static/nitish.json"

	$("#main-content").hide();

	$(".btn1").click(function(){
		$("#name-cover").slideUp();
		$("#main-content").fadeIn(2000);
		$(".btn1").hide();
		$("#social-content").hide();
		populate_skills();
	});

	$(".btn2").click(function(){
		$("#main-content").hide();
		$("#name-cover").slideDown();
	});

	$.getJSON(json_file, function(result){
		$.each(result, function(key, value){
			if ( key == "social"){
				var social_dict = value;
				var social_html = "";
				$.each(social_dict,function( socialmedia,url ) {
					console.log( socialmedia + ": " + url );
						social_html += "<a href='"+url+"'><img class='socialicons' src='../static/images/"+socialmedia+".png' class='mx-auto d-block'></a>" ;
					});
				$('#social-content').html(social_html);
			}
		});
	});

	var populate_skills = function(){
		$.getJSON(json_file, function(result){

			$.each(result, function(key, value){
				if ( key == "skills"){
					var skills_list = value;
					
					var skills_html = "";
					var number_of_skills_added = 0;
					
					$.each(skills_list,function( index,skill ) {
						if (number_of_skills_added % 4 == 0){
							skills_html = skills_html + "<div class='row'>";
						}

						console.log( index + ": " + skill );
						skills_html += "<div class='col-sm-3'>";
						if (skill.logo_image.includes("png") || skill.logo_image.includes("jpg"))
						{
							skills_html += "<img class='img-fluid img-padding' src='../static/images/"+skill.logo_image+"' class='mx-auto d-block'>" ;
						}
						else
						{
							skills_html += skill.logo_image; // "<i class='devicon-android-plain-wordmark'></i>";
						}
						skills_html += "</div>";
						number_of_skills_added += 1;

						if (number_of_skills_added % 4 == 0){
							skills_html = skills_html + "</div><br><br>";
						}


					});
					$('#skills-content').html(skills_html);
				}
				
			});
		});
	}

	var populate_experiences = function(){
		$.getJSON(json_file, function(result){
			$.each(result, function(key, value){
				if ( key == "experience"){
					var experience_list = value;
					
					var experience_html = "";
					//var number_of_projects_added = 0;
					//projects_html = projects_html + "<div class='card-columns'>";
					$.each(experience_list,function( index,experience ) {

						console.log( index + ": " + experience );
						experience_html += "<div class='card'>  <div class='card-body'>";
						experience_html += "<h4 class='card-title'>"+experience.role+"</h4>" ;
						experience_html += "<p class='card-text'>"+experience.organization_name+"</p>";
						experience_html += "<p class='card-text'>"+experience.work_description+"</p>";
						experience_html += "</div></div><br>";
						//number_of_projects_added += 1;

					});
					//experience_html = experience_html + "</div>";
					$('#experience-content').html(experience_html);
				}
			});
		});
	}

	var populate_projects = function(){
		$.getJSON(json_file, function(result){

			$.each(result, function(key, value){
				if ( key == "projects"){
					var projects_list = value;
					
					var projects_html = "";
					var number_of_projects_added = 0;
					projects_html = projects_html + "<div class='card-columns'>";
					$.each(projects_list,function( index,project ) {

						console.log( index + ": " + project );
						projects_html += "<div class='card'>  <div class='card-body'>";
						projects_html += "<h4 class='card-title'>"+project.project_name+"</h4>" ;
						projects_html += "<p class='card-text'>"+project.description+"</p>";
						projects_html += "</div></div>";
						number_of_projects_added += 1;

					});
					projects_html = projects_html + "</div>";
					$('#projects-content').html(projects_html);
				}
				
			});
		});
	}

	var populate_achievements = function(){
		$.getJSON(json_file, function(result){

			$.each(result, function(key, value){
				if ( key == "achievements"){
					var achievements_list = value;
					
					var achievements_html = "";
					var number_of_achievements_added = 0;
					//achievements_html = achievements_html + "<div class='row'>";
					$.each(achievements_list,function( index,achievement ) {

						console.log( index + ": " + achievement );
						achievements_html += "<div class='card'>  <div class='card-body'>";
						achievements_html += "<p class='card-text'>"+achievement+"</p>";
						achievements_html += "</div></div><br>";

					});
					//achievements_html = achievements_html + "</div>";
					$('#achievements-content').html(achievements_html);
				}
				
			});
		});
	}

	var populate_education = function(){
		$.getJSON(json_file, function(result){

			$.each(result, function(key, value){
				if ( key == "education"){
					var education_list = value;
					
					var education_html = "";
					//var number_of_projects_added = 0;
					//projects_html = projects_html + "<div class='card-columns'>";
					$.each(education_list,function( index,education ) {

						console.log( index + ": " + education );
						education_html += "<div class='card'>  <div class='card-body'>";
						education_html += "<h4 class='card-title'>"+education.degree+"</h4>" ;
						education_html += "<p class='card-text'>"+education.institute+"</p>";
						education_html += "<p class='card-text'>"+education.duration+"</p>";
						education_html += "</div></div><br>";
						//number_of_projects_added += 1;

					});
					//education_html = education_html + "</div>";
					$('#education-content').html(education_html);
				}
				
			});
		});
	}

	$("#skills-link").click(populate_skills);

	$("#experience-link").click(populate_experiences);

	$("#projects-link").click(populate_projects);

	$("#achievements-link").click(populate_achievements);

	$("#education-link").click(populate_education);


});
