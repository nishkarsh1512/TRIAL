function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("ijourntab");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  $(document).ready(function() {

    if(window.location.href.indexOf('#Raju') != -1) {
      $('#Raju').modal('show');
    }
if(window.location.href.indexOf('#vyas') != -1) {
      $('#vyas').modal('show');
    }
  if(window.location.href.indexOf('#abhishek') != -1) {
      $('#abhishek').modal('show');
    }
  if(window.location.href.indexOf('#asadhu') != -1) {
      $('#asadhu').modal('show');
    }
   if(window.location.href.indexOf('#debasish') != -1) {
      $('#debasish').modal('show');
    }
   if(window.location.href.indexOf('#omkar') != -1) {
      $('#omkar').modal('show');
    }
  if(window.location.href.indexOf('#surya') != -1) {
      $('#surya').modal('show');
    }
  if(window.location.href.indexOf('#iqbal') != -1) {
      $('#iqbal').modal('show');
    }
  if(window.location.href.indexOf('#debolina') != -1) {
      $('#debolina').modal('show');
    }
  if(window.location.href.indexOf('#soumya') != -1) {
      $('#soumya').modal('show');
    }
  if(window.location.href.indexOf('#pooja') != -1) {
      $('#pooja').modal('show');
    }
  if(window.location.href.indexOf('#pooja') != -1) {
      $('#pooja').modal('show');
    }
  if(window.location.href.indexOf('#pragya') != -1) {
      $('#pragya').modal('show');
    }
  if(window.location.href.indexOf('#pooja') != -1) {
      $('#pooja').modal('show');
    }
  if(window.location.href.indexOf('#ranjan') != -1) {
      $('#ranjan').modal('show');
    }
  if(window.location.href.indexOf('#Nurool') != -1) {
      $('#Nurool').modal('show');
    }
  if(window.location.href.indexOf('#ananta') != -1) {
      $('#ananta').modal('show');
    }
  if(window.location.href.indexOf('#Rishab') != -1) {
      $('#Rishab').modal('show');
    }
  if(window.location.href.indexOf('#Ram') != -1) {
      $('#Ram').modal('show');
    }
  if(window.location.href.indexOf('#Kanchan') != -1) {
      $('#Kanchan').modal('show');
    }
  if(window.location.href.indexOf('#Rahul') != -1) {
      $('#Rahul').modal('show');
    }
  });
