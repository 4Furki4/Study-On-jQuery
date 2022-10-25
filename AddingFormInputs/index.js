
$("document").ready(function () {

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
        var firstPartDef = `#${part}>#${part}-def`
        let firstPartType = `#${part}>#${part}-type`
        let defId = `word${wordOrder}-def${counter}`
        let typeId = `word${wordOrder}-type${counter}`
        var appendDef = `<input type="text" class="form-control mt-1" id="${defId}"/>`
        let appendType = `<input type="text" class="form-control mt-1" id="${typeId}"/>`
        $(firstPartDef).append(appendDef)
        $(firstPartType).append(appendType)
        $("#" + defId).hide().show("fast");
        $("#" + typeId).hide().show("fast");
    }
});
