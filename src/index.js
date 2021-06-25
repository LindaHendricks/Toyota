const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const carModel = urlParams.get('model');

const url = "https://dv.stk2.pro/dev/test/api.php?model=" + carModel

// "https://dv.stk2.pro/dev/test/api.php?model=" + carModel;
// urlResultError - "https://dv.stk2.pro/dev/test/api.php";
// urlResultCamrySuccess -  "https://dv.stk2.pro/dev/test/api.php?model=camry";
// urlResultCorollaSuccess - "https://dv.stk2.pro/dev/test/api.php?model=corolla";


document.addEventListener("DOMContentLoaded",successFail() );

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

//   let titleImage = "";

//   if (OneCarOffer.model == "Camry") {
//     titleImage = "./assets/offercamry.jpg";
//   } else if (OneCarOffer.model == "Corolla") {
//     titleImage = "./assets/offercorolla.jpg";
//   }

  const givenNumber = OneCarOffer.down;
  console.log(givenNumber)

  internationalNumberFormat = new Intl.NumberFormat('en-US')
  const downWithcomma = (internationalNumberFormat.format(givenNumber))
  

  div.innerHTML = `

    

     <div id="overlaping">
       <div class="header">
         <img id="imgsuccess" src="./assets/empty_header.jpg" alt="Toyota Store">
      </div>
     <div class="car">
         <img class="imgcar" src=${OneCarOffer.img} alt=${OneCarOffer.model}>
      </div>
     </div>
      
    
     <div class="offerdetails">
       <div class="monthly">
       <ul class="nobullet">
       <li class="listyle" >$${OneCarOffer.monthly}</li>
       <li>MONTHLY</li>
       </ul> 
       </div>

       <div class="duration">
       <ul class="nobullet">
       <li class="listyle" >${OneCarOffer.duration}</li>
       <li>MONTHS</li>
       </ul> 
       </div>

       <div class="down">
       <ul class="nobullet">
       <li class="listyle" >$${downWithcomma}</li>
       <li>DOWN</li>
       </ul> 
       </div>
     </div>

    <div id="text">
    <ul class="textlist">
    <li>Qualified lessees can lease a new 2021 LE Model 2515 for $${OneCarOffer.monthly} per month for ${OneCarOffer.duration} months with $${OneCarOffer.down} Due At Signing. Based on 10,000 miles/yr. Security Deposit waived. Lease includes $1,000 cash incentive and excludes tax, title, license, registration fees, and dealer options and charges.</li>
    <li>Recent and soon to be college graduates: You can get a $500 Rebate on all new Toyota models when you finance or lease through Toyota Financial Services.</li>
    <li>$500 Military Rebate for qualified U.S. Military Personnel</li>
    <li>This is an unodered list this a list with no order This is an unodered list this a list with no order This is an unodered list this a list with no order </li>
    </ul>
    </div>

    <div id="btnaction">
       <button class="actionbtnri" > REQUEST A QUOTE </button>
    </div>
     
    </div>
    <div class="modal3">
    <p>YOU HAVE CLICKED THE REQUEST A QUOTE BUTTON</p>
    <span class="X3" draggable="true" >&times;</span>
    </div>`;


  parentDiv.append(div);

  div.addEventListener("click", (event) => {
    if (event.target.matches(`.actionbtnri`)) {
      appearBtnaction();
    }
  });

  const X3 = document.querySelector(`.X3`);

  X3.addEventListener("click", (event) => {
    if (event.target.matches(`.X3 `)) {
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
  <div class="errorimg">
  <img id="imgsorry" src="assets/error_page__img_desktop II.jpg" alt="car in front of a Toyota Store">
  </div>
      <div id="texterror">
      <h2>SORRY, NO OFFER FOUND</h2> 
      </div>
      
       <div class="buttonctr">
        <button class="actionbtnf">FIND A DEALER</button> 
        <button class="actionbtnr">REQUEST A QUOTE</button>     
        </div>
        
        
        <div class="modal">
        <p>YOU HAVE CLICKED THE REQUEST QUOTE BUTTON</p>
        <span class="X" draggable="true" >&times;</span>
    
    </div>
      <div class="modal2">
      <p>YOU HAVE CLICKED THE FIND A DEALER BUTTON</p>
      <span class="X2" draggable="true" >&times;</span>
    </div>
        

 </div>`;

  parentDiv.append(div);

  div.addEventListener("click", (event) => {
    if (event.target.matches(`.actionbtnr `)) {
      console.log(event.target);
      appearBtnr();
    }
  });

  div.addEventListener("click", (event) => {
    if (event.target.matches(`.actionbtnf `)) {
      console.log(event.target);
      appearBtnf();
    }
  });

  const X = document.querySelector(`.X`);

  X.addEventListener("click", (event) => {
    if (event.target.matches(`.X `)) {
      console.log("clicked");
      disappearx();
    }
  });

  const X2 = document.querySelector(`.X2`);

  X2.addEventListener("click", (event) => {
    if (event.target.matches(`.X2 `)) {
      console.log("clicked");
      disappearx2();
    }
  });
}

function disappearx() {
  const modal = document.querySelector(`.modal`);
  modal.style.display = "none";
}

function disappearx2() {
  const modal2 = document.querySelector(`.modal2`);
  modal2.style.display = "none";
}

function disappearx3() {
  const modal3 = document.querySelector(`.modal3`);
  modal3.style.display = "none";
}

function appearBtnr() {
  const modal = document.querySelector(`.modal`);
  section = document.querySelector(`section`);
  modal.style.display = "block";
}

function appearBtnf() {
  const modal2 = document.querySelector(`.modal2`);
  section = document.querySelector(`section`);
  modal2.style.display = "block";
}

function appearBtnaction() {
  const modal3 = document.querySelector(`.modal3`);
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
