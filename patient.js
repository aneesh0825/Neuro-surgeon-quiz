class Patient{
    constructor(){
        this.count=0;
        this.name=null;
        this.email=null;
        this.Q1= null;
        this.Q2= null;
        this.Q3= null;
        this.Q4= null;
        this.Q5= null;
        this.Q6= null;
        this.Q7= null;

    }
   getCount(){
       var countPrep=database.ref('patientCount');
       countPrep.on("value",(data)=>{
           patientCount= data.val();
           
       })
   }
    updateSymptoms(){
       // var index = "details/person"+this.count;
       var index= "patients/"
        database.ref(index).set({
            name:this.name,
            email:this.email,
            Q1:this.Q1,
            Q2:this.Q2,
            Q3:this.Q3,
            Q4:this.Q4,
            Q5:this.Q5,
            Q6:this.Q6,
            Q7:this.Q7

        })
    }
}