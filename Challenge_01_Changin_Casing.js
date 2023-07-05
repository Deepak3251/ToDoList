//  $(".input").change(function(){
//    let input= $(this).val();
//    $("ul").append(`<li>  ${input} <i class="check">R</i> <i class="delete">D</i> </li>`)
//    $(this).val('')
//  })

//  $("ul").on("click",".delete", function(){
//    $(this).parent("li").fadeOut(200);
//  })
// $("ul").on("click",".check",function(){
//    $(this).parent("li").toggleClass("edit");
// })

// document.querySelectorAll(".input").forEach(function(input) {
//    input.addEventListener("change", function() {
//      let inputValue = input.value;

//      document.querySelector("ul").insertAdjacentHTML(
//        "beforeend",`<li>${inputValue} <i class="check">R</i> <i class="delete">D</i></li>`);
//      input.value = "";
//    });
//  });

//  document.querySelector("ul").addEventListener("click", function(event) {
//    if (event.target.classList.contains("delete")) {
//      event.target.parentNode.style.display = "none";
//    }

//    if (event.target.classList.contains("check")) {
//      event.target.parentNode.classList.toggle("edit");

//    }
//  });

document.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("change", function () {
    let inputValue = this.value;
    document
      .querySelector("ul")
      .insertAdjacentHTML(
        "beforeend",
        `<li>${inputValue} <button class="check">Check</button> <button class="delete">Delete</button>   </li>`
      );
    this.value = "";
  });
});

document.querySelector("ul").addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentNode.style.display = "none";
  }
  if (event.target.classList.contains("check")) {
    event.target.parentNode.classList.toggle("edit");
  }
});
