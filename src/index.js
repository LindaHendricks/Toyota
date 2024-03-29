const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const carModel = urlParams.get("model");

const url = "https://dv.stk2.pro/dev/test/api.php?model=" + carModel;

// "https://dv.stk2.pro/dev/test/api.php?model=" + carModel;
// urlResultError - "https://dv.stk2.pro/dev/test/api.php";
// urlResultCamrySuccess -  "https://dv.stk2.pro/dev/test/api.php?model=camry";
// urlResultCorollaSuccess - "https://dv.stk2.pro/dev/test/api.php?model=corolla";

document.addEventListener("DOMContentLoaded", successFail());

function successFail() {
  fetch(url)
    .then((response) => response.json())
    .then((OneCarOffer) => renderResponseReturn(OneCarOffer));
}

function renderResponseReturn(OneCarOffer) {
  if (OneCarOffer.result == "success") {
    renderOneCarOffer(OneCarOffer);
  } else if (OneCarOffer.result == "error") {
    renderResultError(OneCarOffer);
  }
}

function renderOneCarOffer(OneCarOffer) {
  const parentDiv = document.querySelector(`div.offer`);
  const div = document.createElement(`div`);
  div.dataset.id = OneCarOffer.id;

  const givenNumber = OneCarOffer.down;
  console.log(givenNumber);

  internationalNumberFormat = new Intl.NumberFormat("en-US");
  const downWithcomma = internationalNumberFormat.format(givenNumber);
  const modelNameCapitalize = OneCarOffer.model.toUpperCase();

  div.innerHTML = `
     <div id="overlaping">
       <div id="header">
         <img id="imgsuccess" src="./assets/empty_header.jpg" alt="Toyota Store">
      </div>
     <div id="car">
         <img id="imgcar" src=${OneCarOffer.img} alt=${OneCarOffer.model}>
      </div>
      <div id="title">
      <h2 id="modeltitle"> 2021 ${modelNameCapitalize}</h2>
      </div>
     </div>
    
     <div class="offerdetails">
       <div id="monthly">
       <ul class="nobullet">
       <li class="listyle" >$${OneCarOffer.monthly}</li>
       <li>MONTHLY</li>
       </ul> 
       </div>

       <div id="duration">
       <ul class="nobullet">
       <li class="listyle" >${OneCarOffer.duration}</li>
       <li>MONTHS</li>
       </ul> 
       </div>

       <div id="down">
       <ul class="nobullet">
       <li class="listyle" >$${downWithcomma}</li>
       <li>DOWN</li>
       </ul> 
       </div>
     </div>

    <div id="text">
    <ul id="textlist">
    <li class="textlistli"><span>Qualified lessees can lease a new 2021 LE Model 2515 for $${OneCarOffer.monthly} per month for ${OneCarOffer.duration} months with $${OneCarOffer.down} Due At Signing. Based on 10,000 miles/yr. Security Deposit waived. Lease includes $1,000 cash incentive and excludes tax, title, license, registration fees, and dealer options and charges.</span></li>
    <li class="textlistli"><span>Recent and soon to be college graduates: You can get a $500 Rebate on all new Toyota models when you finance or lease through Toyota Financial Services.</span></li>
    <li class="textlistli"><span>$500 Military Rebate for qualified U.S. Military Personnel</span></li>
    <li class="textlistli"><span>This is an unodered list this a list with no order This is an unodered list this a list with no order This is an unodered list this a list with no order.</span></li>
    </ul>
    </div>

    <div id="btnaction">
       <button id="actionbtnrq" > REQUEST A QUOTE </button>
    </div>
     
    </div>
    <div id="modal3">
    <p>YOU HAVE CLICKED THE REQUEST A QUOTE BUTTON</p>
    <span id="X3" draggable="true" >&times;</span>
    </div>`;

  parentDiv.append(div);

  div.addEventListener("click", (event) => {
    if (event.target.matches(`#actionbtnrq`)) {
      appearBtnaction();
    }
  });

  const X3 = document.querySelector(`#X3`);

  X3.addEventListener("click", (event) => {
    if (event.target.matches(`#X3 `)) {
      disappearx3();
    }
  });
}

function renderResultError(error) {
  const parentDiv = document.querySelector(`div.offer`);
  const div = document.createElement(`div`);
  console.log(error);

  div.innerHTML = `
  <div div class="error">
   <div id="errorimg">
   <img id="imgsorry" src="assets/error_page__img_desktop II.jpg" alt="car in front of a Toyota Store">
  </div>
      <div id="texterror">
      <h2>SORRY, NO OFFER FOUND</h2> 
      </div>
      
       <div id="buttonctr">
        <button id="actionbtnf">FIND A DEALER</button> 
        <button id="actionbtnr">REQUEST A QUOTE</button>     
        </div>
        
        
        <div id="modal">
        <p>YOU HAVE CLICKED THE REQUEST QUOTE BUTTON</p>
        <span id="X" draggable="true" >&times;</span>
    
    </div>
      <div id="modal2">
      <p>YOU HAVE CLICKED THE FIND A DEALER BUTTON</p>
      <span id="X2" draggable="true" >&times;</span>
    </div>
 </div>`;

  parentDiv.append(div);

  div.addEventListener("click", (event) => {
    if (event.target.matches(`#actionbtnr `)) {
      console.log(event.target);
      appearBtnr();
    }
  });

  div.addEventListener("click", (event) => {
    if (event.target.matches(`#actionbtnf `)) {
      console.log(event.target);
      appearBtnf();
    }
  });

  const X = document.querySelector(`#X`);

  X.addEventListener("click", (event) => {
    if (event.target.matches(`#X `)) {
      console.log("clicked");
      disappearx();
    }
  });

  const X2 = document.querySelector(`#X2`);

  X2.addEventListener("click", (event) => {
    if (event.target.matches(`#X2 `)) {
      console.log("clicked");
      disappearx2();
    }
  });
}

function disappearx() {
  const modal = document.querySelector(`#modal`);
  modal.style.display = "none";
}

function disappearx2() {
  const modal2 = document.querySelector(`#modal2`);
  modal2.style.display = "none";
}

function disappearx3() {
  const modal3 = document.querySelector(`#modal3`);
  modal3.style.display = "none";
}

function appearBtnr() {
  const modal = document.querySelector(`#modal`);
  section = document.querySelector(`section`);
  modal.style.display = "block";
}

function appearBtnf() {
  const modal2 = document.querySelector(`#modal2`);
  section = document.querySelector(`section`);
  modal2.style.display = "block";
}

function appearBtnaction() {
  const modal3 = document.querySelector(`#modal3`);
  console.log(modal3);
  modal3.style.display = "block";
}

function renderURLError() {
  const parentDiv = document.querySelector(`div.offer`);
  const div = document.createElement(`div`);

  div.innerHTML = `
      <div div class="error">
        <p>Invalid URL.  Please enter a valid URL.</p>        
      </div>`;

  parentDiv.append(div);
}
