$(document).ready(function() {
    // Declare variables
    var projectFormEl = $('#formCreate');
    var projectTable = $('.projectTable');
  
    // Declare functions
    function submitFunction(event) {
      event.preventDefault();
      console.log("test");

      var pName = $('#projectName').val();
      var pBrand = $('#projectBrand').val();
      var pState = $('#projectState').val();

      console.log(pName+pBrand+pState);
      appendProject(pName,pBrand,pState);
    }
  
    function appendProject(name, brand, state) {
        var newRow = $('<tr>')
        var rowName = $('<td>').text(name);
        var rowBrand = $('<td>').text(brand);
        var rowState = $('<td>').text(state);

        newRow.append(rowName,rowBrand,rowState);
        projectTable.append(newRow);
        console.log('appended')
    };

    // Call functions
    projectFormEl.on('submit', submitFunction);
  });
  