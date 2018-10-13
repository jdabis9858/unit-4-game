 var targetnum = "";
 var crystal1 = "";
 var crystal2 = "";
 var crystal3 = "";
 var crystal4 = "";
 var score = "";

$(document).ready(function() {

   targetnum = math.floor((math.random() * 75) + 30);
        $("#trg").html("the target nember is " + targetnum);

    
    
        $("#img1").on("click", function() {
            //crystal1 = parseInt($("img1").val(), 10);
            crystal1 = parseInt(crystal1 + 17);
            console.log(crystal1)
            
        });

        $("#img2").on("click", function() {
            crystal2 = parseInt(crystal2 + 3);
            console.log(crystal2)
            
        });

        $("#img3").on("click", function() {
            crystal3 = parseInt(crystal3 + 8);
            console.log(crystal3)
            
        });

        $("#img4").on("click", function() {
            crystal4 = parseInt(crystal4 + 13);
            console.log(crystal4)
            
        });



        $(".imgs").on("click", function() {
            score = parseInt(crystal1 + crystal2 + crystal3 + crystal4);
            $("#score").html(score)
            console.log(score)



                if (score == targetnum) {
                    alert("you win")
                }
                else if (score > targetnum) {
                    alert("you lose")
                }
        });

        
    
});