
$("document").ready(function () {

        $("#first-part").hide().slideDown("slow");
        $("#second-part").hide().slideDown("slow");
        $("#third-part").hide().slideDown("slow");
        $("#fourth-part").hide().slideDown("slow");



    let firstBtnCount = 1;
    let secondBtnCount = 1;
    let thirdBtnCount = 1;
    let fourthBtnCount = 1;
    $("#first-part-btn").on("click", function () {
        addInputs(firstBtnCount, "first-part", 0);
        firstBtnCount++;
    });
    $("#second-part-btn").on("click", function () {
        addInputs(secondBtnCount, "second-part", 1);
        secondBtnCount++;
    });
    $("#third-part-btn").on("click", function () {
        addInputs(thirdBtnCount, "third-part", 2);
        thirdBtnCount++;
    });
    $("#fourth-part-btn").on("click", function () {
        addInputs(fourthBtnCount, "fourth-part", 3);
        fourthBtnCount++;
    });
    function addInputs(counter, part, wordOrder) {
        let delBtnOrder = `${part}-del-btn-${counter}`
        let defId = `word${wordOrder}-def${counter}`
        let typeId = `word${wordOrder}-type${counter}`
        let appendPart = `#${part}`
        let row = `
        <div class="row">
            <div class="offset-1 col-2">
                <span class="bg-secondary float-end mt-2"><h3>${counter+1}.</h3></span>
            </div>
            <div class="col-4" id="first-part-def">
                <input type="text" class="form-control mt-1" id="word${wordOrder}-def${counter}">
            </div>
            <div class="col-3" id="first-part-type">
                <input type="text" class="form-control mt-1" id="word${wordOrder}-type${counter}">
            </div>
            <input id="${delBtnOrder}" class="btn btn-dark mt-1" type="button" value="X" style="width: 40px; height: 40px;">
        </div>`
        $(appendPart).append(row);
        $("#"+defId).hide().show("slow");
        $("#"+typeId).hide().show("slow");
        $(`#${delBtnOrder}`).hide().slideDown("slow")
    }
});
