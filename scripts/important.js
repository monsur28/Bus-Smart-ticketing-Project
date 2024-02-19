let totalSeats  = parseInt(document.getElementById("total-seats-left").innerText);;
let totalTicketSelected = 0;

const allTicketBtn = document.getElementsByClassName("add-btn");
for (const ticketBtn of allTicketBtn) {
  ticketBtn.addEventListener("click", function(e){
    if (totalTicketSelected <= 3){
      totalSeats-=1;
      totalTicketSelected+=1;
      totalCost(
        "total-cost",
        document.getElementById("ticket-price").innerText
      );
      const placeName = e.target.innerText;
      const price = document.getElementById("ticket-price").innerText;
      const selectedContainer = document.getElementById("selected-place-container");
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = placeName;
      const p2 = document.createElement("p");
      p2.innerText = "Economy";
      const p3 = document.createElement("p");
      p3.innerText = price;
      li.appendChild(p);
      li.appendChild(p2);
      li.appendChild(p3);
      li.className = "flex justify-between w-full text-left mb-4";
      selectedContainer.appendChild(li);
      e.target.classList.add("text-white");
      e.target.classList.add("bg-[#1DD100]");
      e.target.classList.add("pointer-events-none");
    } else {
      alert("You cann't Book More Than 4 Seats");
    }

    setElementValueById("seat-count", totalTicketSelected);
    setElementValueById("total-seats-left", totalSeats );
    setElementValueById("grand-total", parseInt(document.getElementById("total-cost").innerText));
 
    if (totalTicketSelected > 3) {
      document.getElementById("discount-btn").removeAttribute("disabled");
    } else {
      document.getElementById("discount-btn").setAttribute("disabled", true);
    }
  
    buttonChk();
    
  });
}

document.getElementById("phone-number").addEventListener("keyup", function (event) {
  buttonChk();
});


function buttonChk(){
  const poneVal = parseInt(document.getElementById("phone-number").value);
  const poneText = document.getElementById("phone-number").value.toString().length;
  
  const button = document.getElementById("modal-btn");    
    if ((poneText > 0) && (totalTicketSelected > 0) && (poneVal !== 0)) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
}



const discountBtn = document.getElementById("discount-btn");
discountBtn.addEventListener("click", function () {
  const couponElement = getInputValueById("input-coupon");
  if (couponElement === "NEW15") {
    const grandTotal = document.getElementById("total-cost").innerText;
    const grandTotalCost = parseInt(grandTotal);
    const discount = grandTotalCost * 0.15;
    const newGrandTotal = grandTotalCost - discount;

    setElementValueById("grand-total", newGrandTotal);

    const selectedContainer = document.getElementById("coupon-applied");
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.style.fontFamily.bold;
      p.innerText = "Discount";
      const p2 = document.createElement("p");
      p2.innerText ="BDT " + discount;
      li.appendChild(p);
      li.appendChild(p2);      
      li.className = "flex justify-between w-full text-left mb-4";
      selectedContainer.appendChild(li);

    
    document.getElementById("coupon").classList.add("hidden"); 

  } else if (couponElement === "Couple 20") {
    
    const grandTotal = document.getElementById("total-cost").innerText;

    const grandTotalCost = parseInt(grandTotal);
    const discount = grandTotalCost * 0.20;
    const newGrandTotal = grandTotalCost - discount;

    setElementValueById("grand-total", newGrandTotal);

    const selectedContainer = document.getElementById("coupon-applied");
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = "Discount";   
      const p2 = document.createElement("p");      
      p2.innerText ="BDT " + discount;
      li.appendChild(p);
      li.appendChild(p2);      
      li.className = "flex justify-between w-full text-left mb-4";
      selectedContainer.appendChild(li);
      document.getElementById("coupon").classList.add("hidden");
  } else {
    alert("Invalid Coupon");
  }
});