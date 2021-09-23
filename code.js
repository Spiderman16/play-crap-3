function playCraps(){
    console.log("playCraps() function Started");

    var die1 =Math.ceil(Math.random()*6);
    var die2 =Math.ceil(Math.random()*6);
    var sum = die1+die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you loose")
        document.write("<br/>")
    }
    else if (diel == die2 && diel % 2 == 0) {
        document.write("DOUBLE - you win")
        document.write("<br/>")
    }
    
}
