const urlResultSuccess = "https://dv.stk2.pro/dev/test/api.php?model=camry";
const urlResultError = "https://dv.stk2.pro/dev/test/api.php";
const url = "https://dv.stk2.pro/dev/test/api.php"; //"https://dv.stk2.pro/dev/test/api.php?model=camry"

const error = document.querySelector(`.error`);

const btnquote = document.querySelector(`actionbtnr`);


// btnquote.addEventListener("click",appear);

// function appear() {
//     modal.style.display = "block"
// }

const isSucess = true;

document.addEventListener(
  "DOMContentLoaded",

  function successFail() {
    fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => renderResponseReturn(jsonBody));
  }
);

function renderResponseReturn(jsonBody) {
  if (jsonBody.result == "success") {
    renderOneCarOffer(jsonBody);
  } else if (jsonBody.result == "error") {
    renderResultError(jsonBody);
  }
}

function renderOneCarOffer(OneCarOffer) {
  const parentDiv = document.querySelector(`div.offer`);
  const div = document.createElement(`div`);
  div.dataset.id = OneCarOffer.id;

  div.innerHTML = `

    <div class="offerinfo">
       <div class="img">
       
       <img src="assets/offer_page_img_desktop II.jpg" alt=${OneCarOffer.model}>
    </div>
    
    <div class="offerdetails">
       <h2 class="monthly">${OneCarOffer.monthly} monthly</h2>
       <h2 class="duration">${OneCarOffer.duration} momths</h2>
       <h2 class="down">${OneCarOffer.down} down</h2>
    </div>
    
    <div class="actionbtn">
       <button id="actionbtnri">Request Info</button>
    </div>

    






    </div>`;

  // I decided not to fetch the image so it could look like the psh you  sent by including the img "page offer".

  parentDiv.append(div);

  div.addEventListener("click", (event) => {
    if (event.target.matches(`button#actionbtnri `)) {
      // console.log('clicked')
    }
  });
}

function renderResultError(error) {
  const parentDiv = document.querySelector(`div.offer`);
  const div = document.createElement(`div`);
  console.log(error);

  div.innerHTML = `

  <div div class="error">
     <img class="imgoffer" src="assets/error_page__img_desktop II.jpg" alt="car in front of a Toyota Store">
      <h2>SORRY, NO OFFER FOUND</h2> 
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

  const X = document.querySelector(`.X`)

  X.addEventListener("click", (event) => {
    if (event.target.matches(`.X `)) {
        console.log("clicked");
        disappearx ();
      } 
  })

  const X2 = document.querySelector(`.X2`)

  X2.addEventListener("click", (event) => {
    if (event.target.matches(`.X2 `)) {
        console.log("clicked");
        disappearx2 ();
      } 
  })


}


function disappearx () {
  const modal = document.querySelector(`.modal`)
  modal.style.display = "none";
}

function disappearx2 () {
    const modal2 = document.querySelector(`.modal2`)
    modal2.style.display = "none";
  }

function appearBtnr() {
  const modal = document.querySelector(`.modal`);
  section = document.querySelector(`section`);
  console.log(modal);
  modal.style.display = "block";
//   section.style.filter = "blur(6)";
}

function appearBtnf() {
  const modal2 = document.querySelector(`.modal2`);
  section = document.querySelector(`section`);
  console.log(modal2);
  modal2.style.display = "block";
//   section.style.filter = "blur(6)";
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
