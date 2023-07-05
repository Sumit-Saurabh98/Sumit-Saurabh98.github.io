
    function sendMail(){
        const msg = document.getElementById("msg")
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }

    const service_id = "service_853w7fp";
const template_id = "template_o6pmx7s";

emailjs.send(service_id, template_id, params)
.then((res)=>{
    document.getElementById('name').value = "";
    document.getElementById('email').value ="";
    document.getElementById('message').value = "";
    msg.innerHTML = "Message sent successfully"
}).catch(err=>{
    console.log(err);
})
}




    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }





    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }




    const scriptURL = '< add you own link here >' // add your own app script link here
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
 



 //git calender
    GitHubCalendar(".calendar", "Sumit-Saurabh98");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Sumit-Saurabh98", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "ySumit-Saurabh98", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${username}`)
       }
    }).then(r => r.text())
//git calender end

 //resume

var resumeLink = document.querySelector("#resume-button-1");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://www.dropbox.com/s/mtrij86ma0fcbwf/Sumit-Saurabh-Resume.pdf?dl=0",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "images/Sumit-Saurabh-resume.pdf";
  link.download = "Sumit-Saurabh-Resume.pdf";
  link.click();
});

var resumeLink = document.querySelector("#resume-button-2");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://www.dropbox.com/s/mtrij86ma0fcbwf/Sumit-Saurabh-Resume.pdf?dl=0",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "images/Sumit-Saurabh-resume.pdf";
  link.download = "Sumit-Saurabh-Resume.pdf";
  link.click();
});

var resumeLink = document.querySelector("#resume-button-last");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://www.dropbox.com/s/mtrij86ma0fcbwf/Sumit-Saurabh-Resume.pdf?dl=0",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "images/Sumit-Saurabh-resume.pdf";
  link.download = "Sumit-Saurabh-Resume.pdf";
  link.click();
});
//resume end