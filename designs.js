// Select color input
let color = 0;
// Select size input
let height = 0;
let width = 0;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
  //Getting height and width from user
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
  // used to test input console.log(height + "and" + width);

})


function makeGrid(h, w) {
  //jquery to empty the table
  $('tr').remove();
  // loop used to build the rows of the table
  for (var r = 1; r <= h; r++){
    $('#pixelCanvas').append('<tr id=table' + r +'></tr>');
  // loop used to add a cell to each row
  for (var c = 1; c <= w; c++){
      $('#table' + r).append('<td></td>');
    }
  }
  //jquery function to color cells
    $('td').click(function cellColor() {
      //gets color from colorPicker
    color = $('#colorPicker').val();
    //Check if cell has color before coloring it
    if ($(this).attr('style')){
      //Remove any color already in cell
      $(this).removeAttr('style')
    } else {
        //If the cell is empty then color it or match background
        $(this).attr('style', 'background-color:' + color)
    }
  })

}
