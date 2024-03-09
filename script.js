$(document).ready(() => {
  $(".add").click((e) => {
    e.preventDefault();
    const valorInput = $('input[type="text"]').val();
    const novoItem = $(`
    <li>
      <div class="container-li">
        <div class="container-input-span">
          <input class="check" type="checkbox">
          <span class="valor-span">${valorInput}</span>
        </div>
        <i class="material-icons delete" style="color: red">delete</i>
      </div>
    </li>
    `);

    if (valorInput !== "") {
      $(novoItem).appendTo("ul");
      $(novoItem).hide();
      $(novoItem).fadeIn(1000)
    }

    $(".delete").css("display", "none");

    $(".delete").click(function () {
      $(this).closest("li").fadeOut();
    });

    $(".check").click(function () {
      const span = $(this).closest(".container-li").find(".valor-span");
      const deleteIcon = $(this).closest(".container-li").find(".delete");

      if ($(this).is(":checked")) {
        span.css("text-decoration", "line-through");
        deleteIcon.css("display", "block");
      } else {
        span.css("text-decoration", "none");
        deleteIcon.css("display", "none");
      }
    });

    $('input[type="text"]').val("");
  });
});
