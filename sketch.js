var canvas;
var form, patient, database, patientCount;
function setup(){
  createCanvas(displayWidth-30, displayHeight-50);
  database=firebase.database();
  patient=new Patient();
  patient.getCount
  form = new Form();
  
  form.display();
 
}
function draw(){
  
}