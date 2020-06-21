var rows = [[1, 'rohanpalkar.jpg', 'Rohan', 'Palkar', 'Developer', '$70000'],
            [2, 'parthvyas.jpg', 'Parth', 'Vyas', 'Programmer', '$89000'],
            [3, 'neelpatel.jpg', 'Neel', 'Patel', 'Game Developer', '$85000'],
            [4, 'nilpatel.jpg', 'Nil', 'Patel', 'Web Designer', '$96000'],]


function refreshData() {
   document.getElementById('tbody').innerHTML = "";
   for (let i=0; i<rows.length; i++) {
      document.getElementById('tbody').innerHTML += "<tr>" +
                                                      "<th id='delete-btn' onclick='removeRow(" + rows[i][0] + ")'>x</th>" +
                                                      "<th><img src='" + rows[i][1] + "' height='50px' width='50px'></th>" +
                                                      "<th>"+ rows[i][2] +"</th>" +
                                                      "<th>"+ rows[i][3] +"</th>" +
                                                      "<th>"+ rows[i][4] +"</th>" +
                                                      "<th>"+ rows[i][5] +"</th>" +
                                                    "</tr>";
   }
}

function removeRow(index) {
   for (let i=0; i<rows.length; i++) {
      if (rows[i][0] === index) {
         rows.splice(i, 1);
         break;
      }
   }
   refreshData();
}

function addData(event) {
   event.preventDefault();
   var photo = document.getElementById("photo").value;
   var firstname = document.getElementById("firstname").value;
   var lastname = document.getElementById("lastname").value;
   var job = document.getElementById("job").value;
   var salary = document.getElementById("salary").value;
   if (photo === "" || firstname === "" || lastname === "" || job === "" || salary === "") {
      alert("Please add all the fields.");
   } else {
      rows.push([rows.length+1, photo, firstname, lastname, job, salary]);
      console.log(photo);
      document.getElementById("form").reset();
   }
   refreshData();
}

refreshData();