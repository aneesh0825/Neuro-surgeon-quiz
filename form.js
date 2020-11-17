class Form {
  constructor() {
      this.input = createInput("Enter Name");
      this.email = createInput("Enter Email");
      this.button = createButton('Submit');
      this.greeting = createElement('h2');
      this.text = createElement('h1', "Neuro-Symptom Survey");
      this.question1 = createElement('h3', "Q1.Do you have acute or persistant headaches?");
      this.radio = createRadio('h3');
      this.radio.option('yes');
      this.radio.option('No');
      this.question2 = createElement('h3', "Q2.Do you have a problem walking, instability or muscle weakness?");
      this.radio1 = createRadio('h3');
      this.radio1.option('yes');
      this.radio1.option('No');
      this.question3 = createElement('h3', "Q3. Do you have dizziness, fatigue or vertigo?");
      this.radio2 = createRadio('h3');
      this.radio2.option('yes');
      this.radio2.option('No');
      this.question4 = createElement('h3', "Q4. do you nausea or intense vomiting?");
      this.radio3 = createRadio('h3');
      this.radio3.option('yes');
      this.radio3.option('No');
      this.question5 = createElement('h3', "Q5. do you have blurred vision or a personality change at sporadic times?");
      this.radio4 = createRadio('h3');
      this.radio4.option('yes');
      this.radio4.option('No');
      this.question6 = createElement('h3', "Q6. do you have the inablility to speak or understand language, or confusion?");
      this.radio5 = createRadio('h3');
      this.radio5.option('yes');
      this.radio5.option('No');
      this.question7 = createElement('h3', "Q7. do you have pins and needles or a reduced sense of touch");
      this.radio6 = createRadio('h3');
      this.radio6.option('yes');
      this.radio6.option('No');
  }


  display() {
      this.input.position(650, 165)
      this.email.position(650, 105)
      this.button.position(700, 1000)
      this.greeting.position(500, 105)
      this.text.position(400, 5)
      this.question1.position(400, 230)
      this.radio.position(500, 290)
      this.question2.position(400, 320)
      this.radio1.position(500, 380)
      this.question3.position(400, 410)
      this.radio2.position(500, 470)
      this.question4.position(400, 500)
      this.radio3.position(500, 560)
      this.question5.position(400, 590)
      this.radio4.position(500, 650)
      this.question6.position(400, 680)
      this.radio5.position(500, 730)
      this.question7.position(400, 770)
      this.radio6.position(500, 830)
       
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.email.hide();
        this.question1.hide();
        this.radio.hide();
        this.question2.hide();
        this.radio1.hide();
        this.question3.hide();
        this.radio2.hide();
        this.question4.hide();
        this.radio3.hide();
        this.question5.hide();
        this.radio4.hide();
        this.question6.hide();
        this.radio5.hide();
        this.question7.hide();
        this.radio6.hide();
       
        
        patient.Q1=this.radio.value();
        patient.Q2=this.radio1.value();
        patient.Q3=this.radio2.value();
        patient.Q4=this.radio3.value();
        patient.Q5=this.radio4.value();
        patient.Q6=this.radio5.value();
        patient.Q7=this.radio6.value();
        patient.name=this.input.value();
        patient.email=this.email.value();
        //player.update();
        //player.updateCount(playerCount);
        this.greeting.html("Hello " + patient.name + ", please wait while we fetch your data");
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
      
      
    }
  }