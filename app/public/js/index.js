
    $('#findFriend').on("click", function(event){

        //We get the friends api
        $.get("/api/friends").done(function(data){
            var friends = data;
            event.preventDefault();
            //Create array
            var matchRank = [];
            for (var i = 0; i < data.length; i++){
                var scores = [];
                //Subtracting Scores
                var  q1 = ($("#q1").val() - friends[i].scores[0]);
                scores.push(Math.abs(q1));
                var  q2 = ($("#q2").val() - friends[i].scores[1]);
                scores.push(Math.abs(q2));
                var  q3 = ($("#q3").val() - friends[i].scores[2]);
                scores.push(Math.abs(q3));
                var  q4 = ($("#q4").val() - friends[i].scores[3]);
                scores.push(Math.abs(q4));
                var  q5 = ($("#q5").val() - friends[i].scores[4]);
                scores.push(Math.abs(q5));
                var  q6 = ($("#q6").val() - friends[i].scores[5]);
                scores.push(Math.abs(q6));
                var  q7 = ($("#q7").val() - friends[i].scores[6]);
                scores.push(Math.abs(q7));
                var  q8 = ($("#q8").val() - friends[i].scores[7]);
                scores.push(Math.abs(q8));
                var  q9 = ($("#q9").val() - friends[i].scores[8]);
                scores.push(Math.abs(q9));
                var  q10 = ($("#q10").val() - friends[i].scores[9]);
                scores.push(Math.abs(q10));
                console.log(scores);
                //adding all of our scores together from the array
                var sum = scores.reduce((a, b) => a + b, 0);
                matchRank.push(sum);
            }
    
            //Find your best friend
            var lowScore = Math.min.apply(Math, matchRank);
            var bestFriend = matchRank.indexOf(lowScore);
            console.log(`congrats your new friend is ${friends[bestFriend].name} :)`);
            //logging the best matched friend to the screen
            $("#friendName").html(`<h1>Name: ${friends[bestFriend].name}</h1>`);
            $("#friendImg").html(`<img class="img" src="${friends[bestFriend].photo}" alt="a picture of ${friends[bestFriend].name}" />`);
            //reloading the page when the modal is closed
            $("#closeMe").on("click", function(){
                location.reload();
            });
        });
            //adding a new friend into the array
            var newFriend = {
                name: $("#name").val().trim(),
                photo: $("#photo").val().trim(),
                scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
            };
            console.log(newFriend);
    
            //posting our new friend to the api
            $.post("/api/friends", newFriend, function(data){
                console.log("New Friend Added :)");
            });
        });
