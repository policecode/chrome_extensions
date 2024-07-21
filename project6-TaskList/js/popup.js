$(document).ready(function () {
  $(".navbar .navbar-nav .nav-item").click(function () {
    $(".navbar .navbar-nav .nav-item").removeClass("active");
    $(this).addClass("active");
    $("#app .app__view").hide();
    $(`.app__view.${$(this).attr("data-view")}`).show();
  });

  /**
   * TodoList
   */
  let $inputAdd = $('input[name="input_add"]');
  let $btnAddTask = $('button[name="btn_add"]');
  let $tableShow = $("table.list_task tbody");
  renderItems();

    // In ra danh sách
  function renderItems(params) {
    chrome.storage.local.get(["tasks"], function (result) {
      let currentListTask = result.hasOwnProperty("tasks") ? result.tasks : [];
      let html = "";
      currentListTask.forEach((el, index) => {
        html += `<tr class="row-${index}">
                    <th scope="row">${index + 1}</th>
                    <td>${el.name}</td>
                    <td>${el.status}</td>
                    <td>
                        <button type="button" data-index="${index}" class="action_delete btn btn-danger btn-sm">
                            Delete
                        </button>
                    </td>
                </tr>`;
      });
      $tableShow.html(html);
      destroyItems();
    });
  }
//   Làm chức năng xóa
function destroyItems() {
    $('table.list_task tbody button.action_delete').click(function() {
        let index = $(this).attr('data-index');
        console.log(index);
        chrome.storage.local.get(["tasks"], function (result) {
            let currentListTask = result.hasOwnProperty("tasks") ? result.tasks : [];
            currentListTask.splice(index, 1)
            chrome.storage.local.set({ tasks: currentListTask }, function () {});
            renderItems();
          });
    })
}
  $btnAddTask.click(() => {
    if (!($inputAdd.val().trim().length >= 3)) {
      return alert("Phải có ít nhất 3 ký tự");
    }
    chrome.storage.local.get(["tasks"], function (result) {
      let currentListTask = result.hasOwnProperty("tasks") ? result.tasks : [];
      currentListTask.push({
        name: $inputAdd.val().trim(),
        status: "progress",
      });
      chrome.storage.local.set({ tasks: currentListTask }, function () {});
      $inputAdd.val("");
      renderItems();
    });
  });
  /**
   * Settings
   */
  let $btnSave = $('button[name="btn-save"]');
  let $inputExtensionBackground = $('input[name="background_color"]');
  let $inputListTaskShow = $('select[name="list_task_show"]');
  chrome.storage.local.get(["config"], function (result) {
    $inputExtensionBackground.val(result.config.extension_background);
    $inputListTaskShow.val(result.config.list_task_show);
  });
  $btnSave.click(() => {
    let ex_background = $inputExtensionBackground.val();
    let ex_list_task = $inputListTaskShow.val();
    let initConfig = {
      extension_background: ex_background,
      list_task_show: ex_list_task,
    };

    chrome.storage.local.set({ config: initConfig }, function () {
      window.close();
    });
  });
});
