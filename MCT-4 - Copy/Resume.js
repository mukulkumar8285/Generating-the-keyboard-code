function Submit_Data() {

    /*********************************************************
    * 
    * 
    *********************************************************/
    let write_Information = document.getElementById("Name").value;
    let personal_Information = document.getElementById("Namep");
    personal_Information.innerHTML = write_Information;
    // console.log("myname");
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Email = document.getElementById("Email").value;
    let Emailp = document.getElementById("Emailp");
    Emailp.innerHTML = Email;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let phone = document.getElementById("Phone").value;
    let phonep = document.getElementById("Phonep");
    phonep.innerHTML = phone;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Address = document.getElementById("Address").value;
    let Addressp = document.getElementById("Addressp");
    Addressp.innerHTML = Address;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Country = document.getElementById("Country").value;
    let Countryp = document.getElementById("Countryp");
    Countryp.innerHTML = Country;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Collage_Name = document.getElementById("Collage_Name").value;
    let Collage_Namep = document.getElementById("Collage_Namep");
    Collage_Namep.innerHTML = Collage_Name;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Skills = document.getElementById("Skills").value;
    let Skillsp = document.getElementById("Skillsp");
    Skillsp.innerHTML = Skills;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Person_Summary = document.getElementById("Person_Summary").value;
    let Person_Summaryp = document.getElementById("Person_Summaryp");
    Person_Summaryp.innerHTML = Person_Summary;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Job_Year = document.getElementById("Job_Year").value;
    let Job_Yearp = document.getElementById("Job_Yearp");
    Job_Yearp.innerHTML = Job_Year;
    /*********************************************************
    * 
    * 
    *********************************************************/

    let Company_Name = document.getElementById("Company_Name").value;
    let Company_Namep = document.getElementById("Company_Namep");
    Company_Namep.innerHTML = Company_Name;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Work_Information = document.getElementById("Work_Information").value;
    let Input_Work = document.getElementById("Input_Work");
    Input_Work.innerHTML = Work_Information;
    /*********************************************************
    * 
    * 
    *********************************************************/
    // let Work_Information1 = document.getElementById("Work_Information1").value;
    // let Input_Work1 = document.getElementById("Input_Work1");
    // Input_Work1.innerHTML = Work_Information1;

    /*********************************************************
    * 
    * 
    *********************************************************/

    let Languages = document.getElementById("Languages").value;
    let Languagep = document.getElementById("Languagep");
    Languagep.innerHTML = Languages;
    /*********************************************************
    * 
    * 
    *********************************************************/

    const selectImageInput = document.getElementById('Select_Image');
        const selectedImageElement = document.getElementById('Selected_Image');

        // Add an event listener to the file input
        selectImageInput.addEventListener('change', function() {
            // Check if a file is selected
            if (selectImageInput.files && selectImageInput.files[0]) {
                // Get the selected file
                const selectedFile = selectImageInput.files[0];
                
                // Create a FileReader object to read the selected file
                const reader = new FileReader();

                // Set up the FileReader to display the image once loaded
                reader.onload = function(e) {
                    // Set the source of the image element to the data URL of the selected file
                    selectedImageElement.src = e.target.result;
                    // Make the image element visible
                    selectedImageElement.style.display = 'block';
                };

                // Read the selected file as a data URL
                reader.readAsDataURL(selectedFile);
            }
        });

    /*********************************************************
    * 
    * 
    *********************************************************/
    let degree_Name = document.getElementById("degree_Name").value;
    let degree_Namep = document.getElementById("degree_Namep");
    degree_Namep.innerHTML = degree_Name;

    /*********************************************************
    * 
    * 
    *********************************************************/

    let Passing_Year = document.getElementById("Passing_Year").value;
    let Passing_Yearp = document.getElementById("Passing_Yearp");
    Passing_Yearp.innerHTML = Passing_Year;
    /*********************************************************
    * 
    * 
    *********************************************************/

    let Reference_name = document.getElementById("Reference_name").value;
    let Reference_namep = document.getElementById("Reference_namep");
    if(Reference_namep.innerHTML = Reference_name){
        Reference_namep.innerHTML = Reference_name
    }
    /*********************************************************
    * 
    * 
    *********************************************************/
    let position = document.getElementById("position").value;
    let positionp = document.getElementById("positionp");
    positionp.innerHTML = position;
    /*********************************************************
    * 
    * 
    *********************************************************/
    // let Reference_Phone = document.getElementById("Reference_Phone").value;
    // let Reference_Phonep = document.getElementById("Reference_Phonep");
    // Reference_Phonep.innerHTML = Reference_Phone;

    // let Reference_Email = document.getElementById("Reference_Email").value;
    // let Reference_Emailp = document.getElementById("Reference_Emailp");
    // Reference_Emailp.innerHTML = Reference_Email;

    /*********************************************************
    * 
    * 
    *********************************************************/
    let Passing_Year2 = document.getElementById("Passing_Year2").value;
    let Passing_Yearp2 = document.getElementById("Passing_Yearp2");
    Passing_Yearp2.innerHTML = Passing_Year2;

    /*********************************************************
    * 
    * 
    *********************************************************/

    let degree_Name2 = document.getElementById("degree_Name2").value;
    let degree_Namep2 = document.getElementById("degree_Namep2");
    degree_Namep2.innerHTML = degree_Name2;

    /*********************************************************
    * 
    * 
    *********************************************************/
    let Collage_Name2 = document.getElementById("Collage_Name2").value;
    let Collage_Namep2 = document.getElementById("Collage_Namep2");
    Collage_Namep2.innerHTML = Collage_Name2;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Skills_1 = document.getElementById("Skills_1").value;
    let Skillsp1 = document.getElementById("Skillsp1");
    if(Skillsp1.innerHTML = Skills_1){
        Skillsp1.innerHTML = Skills_1
    }else{
        Skillsp1.style.listStyleType = 'none';
    }
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Skills_2 = document.getElementById("Skills_2").value;
    let Skillsp2 = document.getElementById("Skillsp2");
    if(Skillsp2.innerHTML = Skills_2){
        Skillsp2.innerHTML = Skills_2
    }else{
        Skillsp2.style.listStyleType = 'none';
    }
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Skills_3 = document.getElementById("Skills_3").value;
    let Skillsp3 = document.getElementById("Skillsp3");
    if(Skillsp3.innerHTML = Skills_3){
        Skillsp3.innerHTML = Skills_3
    }else{
        Skillsp3.style.listStyleType = 'none';
    }
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Skills_4 = document.getElementById("Skills_4").value;
    let Skillsp4 = document.getElementById("Skillsp4");
    if(Skillsp4.innerHTML = Skills_4){
        Skillsp4.innerHTML = Skills_4
    }else{
        Skillsp4.style.listStyleType = 'none';
    }
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Languages_1 = document.getElementById("Languages_1").value;
    let Languagep2 = document.getElementById("Languagep2");
    if(Languagep2.innerHTML = Languages_1 ){
        Languagep2.innerHTML = Languages_1
    } else{
        Languagep2.style.listStyleType = 'none';
    }
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Languages_2 = document.getElementById("Languages_2").value;
    let Languagep3 = document.getElementById("Languagep3");
    if(Languagep3.innerHTML = Languages_2 ){
        Languagep3.innerHTML = Languages_2
    }else{
        Languagep3.style.listStyleType = 'none';
    }
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Languages_3 = document.getElementById("Languages_3").value;
    let Languagep4 = document.getElementById("Languagep4");
    if(Languagep4.innerHTML = Languages_3 ){
        Languagep4.innerHTML = Languages_3 
    }else{
        Languagep4.style.listStyleType = 'none';
    }
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Job_Year_1 = document.getElementById("Job_Year_1").value;
    let Job_Yearp_1 = document.getElementById("Job_Yearp_1");
    Job_Yearp_1.innerHTML = Job_Year_1;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Company_Name_1 = document.getElementById("Company_Name_1").value;
    let Company_Namep_1 = document.getElementById("Company_Namep_1");
    Company_Namep_1.innerHTML = Company_Name_1;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Work_Information_1 = document.getElementById("Work_Information_1").value;
    let Input_Work_1 = document.getElementById("Input_Work_1");
    Input_Work_1.innerHTML = Work_Information_1;
    /*********************************************************
    * 
    * 
    *********************************************************/

    let information = document.querySelector(".information");
    let Section_part_2 = document.getElementById("Section_part_2");

    if(Section_part_2.style.display === 'none'){
        Section_part_2.style.display = 'block';
        information.style.display = 'none';
    }else{
        Section_part_2.style.display = 'none';
        information.style.display = 'block';
    }
}
    /*********************************************************
    * 
    * 
    *********************************************************/
function Show_Info() {
    // Retrieve the information element
    const informationElement = document.getElementById('Education2');
    const Language_Button = document.querySelector(".Education_Button");

    // Toggle the visibility of the information element
    if (informationElement.style.display === 'none' ) {
        informationElement.style.display = 'block' ;
        Language_Button.style.display = 'none';
        
    } else {
        informationElement.style.display = 'none';
        Language_Button.style.display = 'block';
      
    }

}
    /*********************************************************
    * 
    * 
    *********************************************************/
function Show_Info1(){
    const informationElement1 = document.getElementById('Education3');
    const Language_Button2 = document.querySelector(".Education_Button2");
if (informationElement1.style.display === 'none') {
    informationElement1.style.display = 'block';
    Language_Button2.style.display = 'none';
} else {
    informationElement1.style.display = 'none';
    Language_Button2.style.display = 'block';
}
}
    /*********************************************************
    * 
    * 
    *********************************************************/
function choose_language(){
    const Language = document.getElementById("Language");
    const Language_Button = document.getElementById("Language_Button");
    if(Language.style.display === 'none'){
        Language.style.display = 'block';
        Language_Button.style.display = 'none';
    }else{
        Language.style.display = 'none';
        Language_Button.style.display = 'block';
    }
}
    /*********************************************************
    * 
    * 
    *********************************************************/
function Add_Job(){
    const Information_Button = document.getElementById("Information_Button");
    const Work_Experience_1 = document.getElementById("Work_Experience_1");
    if(Work_Experience_1.style.display === 'none'){
        Work_Experience_1.style.display = 'block';
        Information_Button.style.display = 'none';
    }else{
        Work_Experience_1.style.display = 'none';
        Information_Button.style.display = 'block';
    }
}
    /*********************************************************
    * 
    * 
    *********************************************************/

// let colorIndex = 0;
// const colors = ["orange", "blue", "green" , "#323B4C"];

// function BackGround_color_Orange() {
//     const party_1 = document.getElementById("Part_1");
//     party_1.style.backgroundColor = colors[colorIndex];
    
//     // Increment the index to get the next color
//     colorIndex = (colorIndex + 1) % colors.length;
// }
function changeBackgroundColor(color) {
    const party_1 = document.getElementById("Part_1");
    party_1.style.backgroundColor = color;
}
    /*********************************************************
    * 
    * 
    *********************************************************/
// let colorIndex_Text = 0;
// const colors_Text = ["orange", "Black", "White" , "#323B4C"];

// function Text_color_Orange() {
//     const party_1 = document.getElementById("Part_1");
//     party_1.style.color = colors_Text[colorIndex_Text];
    
//     // Increment the index to get the next color
//     colorIndex_Text = (colorIndex_Text + 1) % colors_Text.length;
// }

function changeTextColor(color) {
    const party_1 = document.getElementById("Part_1");
    party_1.style.color = color;
}
    /*********************************************************
    * 
    * 
    *********************************************************/
// let colorIndex_Background = 0;
// const colors_Background = ["orange", "blue", "green" , "#323B4C"];

// function BackGround_color_Orange_2() {
//     const party__2 = document.getElementById("Part_2");
//     party__2.style.backgroundColor = colors_Background[colorIndex_Background];
    
//     // Increment the index to get the next color
//     colorIndex_Background = (colorIndex_Background + 1) % colors_Background.length;
// }
function changeBackgroundColor_1(color) {
    const party__2 = document.getElementById("Part_2");
    party__2.style.backgroundColor = color;
}

    /*********************************************************
    * 
    * 
    *********************************************************/

// let colorIndex_Text_Part_2 = 0;
// const colors_Part_2 = ["orange", "blue", "green" , "#323B4C"];

// function Text_color_Orange_2() {
//     const party__2 = document.getElementById("Part_2");
//     party__2.style.color = colors_Part_2[colorIndex_Text_Part_2];
    
//     // Increment the index to get the next color
//     colorIndex_Text_Part_2 = (colorIndex_Text_Part_2 + 1) % colors_Part_2.length;
// }
function changeTextColor_1(color) {
    const party__2 = document.getElementById("Part_2");
    party__2.style.color = color;
}

    /*********************************************************
    * 
    * 
    *********************************************************/



function Add_Skills(){
    const Add_Skills1 = document.getElementById("Skills_Div2");
    const Add_Skills = document.getElementById("Add_Skills");
    const Skillsp = document.getElementById("Skillsp");
    if(Add_Skills1.style.display === 'none'){
        Add_Skills1.style.display = 'block';
        Add_Skills.style.display = 'none';
        
    }else{
        Add_Skills1.style.display = 'none';
        Add_Skills.style.display = 'block';
      

    }
}

    /*********************************************************
    * 
    * 
    *********************************************************/


function Add_Skills1(){
    const Add_Skills3 = document.getElementById("Skills_Div3");
    const Add_Skills1 = document.getElementById("Add_Skills1");
    if(Add_Skills3.style.display === 'none'){
        Add_Skills3.style.display = 'block';
        Add_Skills1.style.display = 'none';
    }else{
        Add_Skills3.style.display = 'none';
        Add_Skills1.style.display = 'block';
    }
}

    /*********************************************************
    * 
    * 
    *********************************************************/

function Add_Skills2(){
    const Add_Skills4 = document.getElementById("Skills_Div4");
    const Add_Skills2 = document.getElementById("Add_Skills2");
    if(Add_Skills4.style.display === 'none'){
        Add_Skills4.style.display = 'block';
        Add_Skills2.style.display = 'none';
    }else{
        Add_Skills4.style.display = 'none';
        Add_Skills2.style.display = 'block';
    }
}

    /*********************************************************
    * 
    * 
    *********************************************************/

function Add_Skills3(){
    const Add_Skills5 = document.getElementById("Skills_Div5");
    const Add_Skills3 = document.getElementById("Add_Skills3");
    if(Add_Skills5.style.display === 'none'){
        Add_Skills5.style.display = 'block';
        Add_Skills3.style.display = 'none';
    }else{
        Add_Skills5.style.display = 'none';
        Add_Skills3.style.display = 'block';
    }
}

    /*********************************************************
    * 
    * 
    *********************************************************/
function choose_language_1(){
    const Language_Button_1 = document.getElementById("Language_Button_1"); 
    const Language2 = document.getElementById("Language2");
    if(Language2.style.display === 'none'){
        Language2.style.display = 'block';
        Language_Button_1.style.display = 'none';
    }else{
        Language2.style.display= 'none';
        Language_Button_1.style.display = 'block';
    }
}

    /*********************************************************
    * 
    * 
    *********************************************************/

function choose_language_2(){
   const Language_Button_2 = document.getElementById("Language_Button_2");
     const Language3 = document.getElementById("Language3");
    if(Language3.style.display === 'none'){
        Language3.style.display = 'block';
        Language_Button_2.style.display = 'none';
    }else{
        Language3.style.display= 'none';
        Language_Button_2.style.display = 'block';
    }
}

    /*********************************************************
    * 
    * 
    *********************************************************/