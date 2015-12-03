
var d = new Date(), displayOne, displayTwo, month = d.getMonth() + 1, year = d.getFullYear();

function easyDatePicker()  {

    $("#table1").show();

    displayOne  = "<table id = 'table1'>";
    displayOne += "<tr>";
    displayOne += "<td><select id ='month' onchange = 'setMonthDays()'>";
    displayOne += "<option value='0'>January</option>";
    displayOne += "<option value='1'>February</option>";
    displayOne += "<option value='2'>March</option>";
    displayOne += "<option value='3'>April</option>";
    displayOne += "<option value='4'>May</option>";
    displayOne += "<option value='5'>June</option>";
    displayOne += "<option value='6'>July</option>";
    displayOne += "<option value='7'>Augest</option>";
    displayOne += "<option value='8'>September</option>";
    displayOne += "<option value='9'>October</option>";
    displayOne += "<option value='10'>November</option>";
    displayOne += "<option value='11'>December</option>";
    displayOne += "</select></td>";

    displayOne += "<td><input type = 'text' id='year' onchange = 'setMonthDays()'></td>";
    displayOne += "<td><button id = 'button' onclick = 'setMonthDays()'>Go</button></td>";
    displayOne += "</tr>";
    displayOne += "</table>";

    displayTwo  = "<table id = 'table2'><tr>";
    displayTwo += "<th>Sun</th>";
    displayTwo += "<th>Mon</th>";
    displayTwo += "<th>Tue</th>";
    displayTwo += "<th>Wed</th>";
    displayTwo += "<th>Thu</th>";
    displayTwo += "<th>Fri</th>";
    displayTwo += "<th>Sat</th>";
    displayTwo += "</tr>";

    var setDays = 0;
    var noOfDays = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
    var d1 = new Date();
    d1.setFullYear(d.getFullYear(), d.getMonth(), 1); //set the first day of the current month and current year
    var first = d1.getDay();  // taking day of the current month
    console.log(d.getFullYear(), d.getMonth(), first);
    for (var rows = 0; rows < 6; rows++) {
        displayTwo += "<tr>";
        for (var coloumn = 0; coloumn < 7; coloumn++) {
            if ( first !== 0) {
                displayTwo += "<td  onclick = 'textValue(" + rows + " , " + coloumn + ")'></td>";
                first--;
            }
            else {
                  if (noOfDays === setDays) {
                      displayTwo += "<td  onclick = 'textValue(" + rows + " , " + coloumn + ")'></td>";
                  }
                  else {
                      displayTwo += "<td  onclick = 'textValue(" + rows + " , " + coloumn + ")'>" + (++setDays) + "</td>";
                  }
            }
        }
         displayTwo += "</tr>";
    }

    displayTwo += "</table>";
    $("#tab1").html(displayOne);
    $("#tab2").html(displayTwo);
    function monthAndYearSelection() {
        $("#month").val(d.getMonth()).attr("selected","selected");
        $("#year").val(d.getFullYear());
    }
      monthAndYearSelection();
}

function setMonthDays() {
    month = parseInt($("#month").val());
    console.log(month);
    year = parseInt($("#year").val());
    var setDays = 0;
    var noOfDays = new Date(year, month + 1, 0).getDate();
    var d1 = new Date();
    d1.setFullYear(year, month, 1); //set the first day of the specified month and year
    var first = d1.getDay();  // taking day of the specified month
    console.log(first);
    for ( var rows = 1; rows <= 6; rows++) {
        for (var coloumn = 0; coloumn < 7; coloumn++) {
            if ( first !== 0) {
                $("#table2 tr:eq(" + rows + ") td:eq(" + coloumn + ")").html("");
                first--;
            }
            else {
                if (noOfDays === setDays) {
                    $("#table2 tr:eq(" + rows + ") td:eq(" + coloumn + ")").html("");
                }
                else {
                    ++setDays;
                    $("#table2 tr:eq(" + rows + ") td:eq(" + coloumn + ")").html(setDays);
                }
            }
        }
    }
          month = month + 1;
}
function textValue(row, coloumn) {
    row = row + 1;
    $("#table2 tr:eq(" + row + ") td:eq(" + coloumn +")").css({"background-color": "660033", "color": "#ebf5fb","font-size":"50"});
    var day_value = parseInt($("#table2 tr:eq(" + row + ") td:eq(" + coloumn + ")").text());
    $("#result").val(day_value + "/" + month + "/" + year);
    $("#table1,#table2").fadeOut("1500");
}
