// message script
function openchat() {
  document.getElementById("chat-screen").style.display = "block";
}
function closechat() {
  document.getElementById("chat-screen").style.display = "none";
}
function hideDiv() {
  document.getElementById("wel").style.display = "none";
  document.getElementById("chat-scrn").style.display = "block";
}
function scrollToBottom() {
  var chatContainer = document.getElementById("chat");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
let input = document.getElementById("msg");
let timeout;
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send").click();
    timeout = setTimeout(typing, 500);
  }
});
var msg = ""
let isExecuted = false;
function ent(msg) {
  let chat = document.getElementById("chat");
  var currentTime = new Date();
  msg = document.getElementById("msg").value;
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let name;
  if (msg.length > 0) {
    const name = getFirstMessage();
    chat.innerHTML += `<div class="chat-message sender">
                        <div class="message-container send">
                          <span class="person-name">${name}</span>
                          <p> ${msg}</p>
                          <span class="sent-time">Sent on ${hours}:${minutes} ${amOrPm}</span>
                        </div>
                        <div class="sender-image">
                            <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" >
                          </div>
                      </div>`;
    document.getElementById("msg").value = "";
    scrollToBottom();
    document.getElementById("msg").type = "string";
    console.log(typeof msg)
  }

  if (typeof msg == "string" && !isExecuted) {
    name = msg;
    saveFirstMessage(name);
    chat.innerHTML += `<div class="chat-message receiver">
   <div class="receiver-image">
       <img src="assets/images/5500_1_04.jpg" >
     </div>
   <div class="message-container recive">
     <span class="person-name">Micky</span>
     <div class="typing">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
<div class="other-content">
     <p >Hello ${name} Please select optons from below</p>
     <p ><button class="button" onclick="price()">
     <p class="text">Price Range</p>
   </button><br>
   <button onclick="callback()" class="button" >
  <p class="text">Call Back</p>
</button>
<br>
   <button onclick="more()" class="button" >
  <p class="text">More</p>
</button>
   </p>
   </div>
     <span class="sent-time">Sent on ${hours}:${minutes} ${amOrPm}</span>
   </div>
   </div>`;
    document.getElementById("msg").value = "";
    scrollToBottom();
    isExecuted = true;
  } 
  else if (msg == "Call Back"){
    chat.innerHTML += `<div class="chat-message receiver">
    <div class="receiver-image">
        <img src="assets/images/5500_1_04.jpg" >
      </div>
    <div class="message-container recive">
      <span class="person-name">Micky</span>
      <p>Please Enter Your Mobile Number</p>
      <span class="sent-time">Sent on ${hours}:${minutes} ${amOrPm}</span>
    </div>
  </div>`;
    document.getElementById("msg").value = "";
    scrollToBottom();
  }
  else if (msg == "price"){
    chat.innerHTML += `<div class="chat-message receiver">
    <div class="receiver-image">
        <img src="assets/images/5500_1_04.jpg" >
      </div>
    <div class="message-container recive">
      <span class="person-name">Micky</span>
      <p>Here Is Our Service Price Range</p>
      <p>Web Developing : Starting 2999/-</p>
      <p>Embedded Systems : Starting 3999/-</p>
      <p>Web Analytics : Starting 999/-</p>
      <p>Graphic Design : Starting 599/-</p><br>
      <button class="button" onclick="stop()">
    <p class="text" id="stp">Stop Chat</p>
    </button>
      <span class="sent-time">Sent on ${hours}:${minutes} ${amOrPm}</span>
    </div>
  </div>`;
    document.getElementById("msg").value = "";
    scrollToBottom();
  }
  else  if (msg == "more"){
    const name = getFirstMessage();
    chat.innerHTML += `<div class="chat-message receiver">
   <div class="receiver-image">
       <img src="assets/images/5500_1_04.jpg" >
     </div>
   <div class="message-container recive">
     <span class="person-name">Micky</span>
<div">
     <p >Hii ${name} Here Is More Options</p>
     <p ><button class="button" onclick="aboutus()">
     <p class="text">About Us</p>
   </button><br><a href="https://wa.link/bhj7bn" style="text-decoration: none;">
   <button class="button" >
  <p class="text">Rech Us On Whatsapp</p>
</button></a>
   </p>
     <span class="sent-time">Sent on ${hours}:${minutes} ${amOrPm}</span>
   </div>`;
    document.getElementById("msg").value = "";
    scrollToBottom();
  }
  else  if (msg == "About Us"){
    const name = getFirstMessage();
    chat.innerHTML += `<div class="chat-message receiver">
    <div class="receiver-image">
        <img src="assets/images/5500_1_04.jpg" >
      </div>
    <div class="message-container recive">
      <span class="person-name">Micky</span>
      <p>Hii ${name} ✋</p>
      <p>MECS Tech Pvt Ltd is a company based on software and mechanical engineering. 
      We specialize in building innovative mechanical and software products to meet the needs of our clients.</p> 
      <p>
      Since our establishment in 2022,
       we have been dedicated to delivering high-quality solutions that combine cutting-edge technology and engineering expertise.
        Our team of skilled professionals is committed to delivering excellence in every project we undertake.
      </p><p>
      <b>Contact Details:</b></p><p>
      MECS Tech Pvt Ltd
      Address: Electronic City Phase 2, Bengaluru, Karnataka 560100
      Email: mecstechindia@gmail.com
      Phone: +91 9188462190
      </p><p>
      For any inquiries or collaboration opportunities, 
      please feel free to reach out to us. We look forward to serving you with 
      our expertise and delivering exceptional solutions.</p>
      <button class="button" onclick="stop()">
    <p class="text" id="stp">Stop Chat</p>
    </button>
       <span class="sent-time">Sent on ${hours}:${minutes} ${amOrPm}</span></div>`;
    document.getElementById("msg").value = "";
    scrollToBottom();
  }
 else  if (checkDigitsOnly(msg)){
  
    chat.innerHTML += `<div class="chat-message receiver">
    <div class="receiver-image">
        <img src="assets/images/5500_1_04.jpg" >
      </div>
    <div class="message-container recive">
      <span class="person-name">Micky</span>
      <p>"Thank you for contacting us! Our team will reach out to you shortly via call."</p>
      <br>
      <button class="button" onclick="stop()">
    <p class="text" id="stp">Stop Chat</p>
    </button>
      <span class="sent-time">Sent on ${hours}:${minutes} ${amOrPm}</span>
    </div>
  </div>`;
    document.getElementById("msg").value = "";
    scrollToBottom();
  }

  else{
    const name = getFirstMessage();
    chat.innerHTML += `<div class="chat-message receiver">
   <div class="receiver-image">
       <img src="assets/images/5500_1_04.jpg" >
     </div>
   <div class="message-container recive">
     <span class="person-name">Micky</span>
<div">
     <p >Hello ${name} Please select optons from below</p>
     <p ><button class="button" onclick="price()">
     <p class="text">Price Range</p>
   </button><br>
   <button onclick="callback()" class="button" >
  <p class="text">Call Back</p>
</button>
<br>
   <button onclick="more()" class="button" >
  <p class="text">More</p>
</button>
   </p>
     <span class="sent-time">Sent on ${hours}:${minutes} ${amOrPm}</span>
   </div>`;
    document.getElementById("msg").value = "";
    scrollToBottom();
  }
}
function checkDigitsOnly(input) {
  var digitsOnlyRegex = /^\d+$/;
  return digitsOnlyRegex.test(input);
}
function typing() {
  const typingAnimation = document.querySelector(".typing");
  const otherContent = document.querySelector(".other-content");
  typingAnimation.style.display = "none";
  otherContent.style.display = "block";
}
function saveFirstMessage(message) {
  const storedMessage = localStorage.getItem("name");
  if (!storedMessage) {
    localStorage.setItem("name", message);
  }
}

function getFirstMessage() {
  return localStorage.getItem("name");
}
function callback() {
  document.getElementById("msg").value = "Call Back";
  ent()
  document.getElementById("msg").type = "number"; 
}
function price(){
  document.getElementById("msg").value = "price";
  ent()
}
function more(){
  document.getElementById("msg").value = "more";
  ent()
}
function aboutus(){
  document.getElementById("msg").value = "About Us";
  ent()
}
function stop(){
  if (document.getElementById("cmsg").style.display === "block") {
    document.getElementById("cmsg").style.display = "none";
  document.getElementById("stp").textContent = "Start Chat";
  } else {
    document.getElementById("cmsg").style.display = "block";
  document.getElementById("stp").textContent = "Stop Chat";
  }
  
}
