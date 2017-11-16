// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var table = $("#pixel_canvas");

    // Check if the grid exists and ask for confirmation before erasing the old data
    if (table.html().length === 0) {
        var color = "#000";
        var colorPicker = $("#colorPicker");
        var tableRows = $("#input_height").val();
        var tableCols = $("#input_width").val();

        // Grab the new color when user changes it
        colorPicker.change(function () {
            color = colorPicker.val();
            console.log(color);
        });

        // Erase old table and create a knew one
        table.html("");
        for (var i = 0; i < tableRows; i++) {
            table.append("<tr></tr>");
            for (var j = 0; j < tableCols; j++) {
                $("#pixel_canvas tr:last").append("<td></td>");
            }
        }

        // Paint a box on the grid
        table.on('click', 'td', function () {
            $(this).css("background-color", color);
        });

        // "erase" a box on the grid
        table.on('contextmenu', 'td', function (evt) {
            evt.preventDefault();
            $(this).css("background-color", "#fff");
        });

    } else {
        // Confirm before create a new grid so user don't erase by mistake
        if (confirm("Do you want to erase your canvas?")){
            table.html("");
            makeGrid();
        }
    }

};

// Call the makeGrid() when user submit the size
$("#sizePicker").submit(function (evt) {
    evt.preventDefault();
    makeGrid();
});