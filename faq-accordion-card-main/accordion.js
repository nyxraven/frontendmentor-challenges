
let q = document.getElementsByClassName("question");
/* for each question on click ads/removes a new class .active */ 
for  (let i = 0; i < q.length; i++) {
  q[i].addEventListener("click", function() {  
    this.classList.toggle("active");
    for (j = 0; j < q.length; j++) {
        if (j !== i)
          {
            /* reset active for everything else / close answer */
            q[j].classList.remove("active");  
            q[j].nextElementSibling.style.maxHeight = null;

        }
;      }
    var answer = this.nextElementSibling;

    /* extends/hides answer element */
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}