let img_info = document.getElementById('img_info');
        let win_info = document.getElementById('win_info');
        win_info.innerText = 'Start a game...';
       
        let start = document.getElementById('start_game').addEventListener('click', function(e) {
            img_info.style.opacity='1.0';
            win_info.innerText = 'Game has started...';
           win_info.style.backgroundColor='rgb(175, 201, 136)';
            
            img_info.style.backgroundImage='url("images/game_running.png")';
            img_info.style.height='350px';
            img_info.style.backgroundColor='#8cad95';
            let check = e.target.value;
          
                //code for mouse progress..
            
            var rndm1 = Math.trunc(Math.random() * 2);
            let p1_count = 0;
            let p2_count = 0;
            let p1_total = 0;
            let p2_total = 0;
            let aside_2 = document.querySelector('.controls');
            let p1_score = document.getElementById('totalscore_span_player1');
            let p2_score = document.getElementById('totalscore_span_player2');
                let p1 = document.getElementById('p1');
                let p2 = document.getElementById('p2');
                let start_game = document.getElementById('start_game');
                let leave_game = document.getElementById('leave_game');
                start_game.setAttribute('disabled', 'disabled');
                start_game.setAttribute('title', 'disabled');
                p1.removeAttribute('disabled');
                p1.removeAttribute('title');
                p2.removeAttribute('disabled');
                p2.removeAttribute('title');
                leave_game.removeAttribute('disabled');
                leave_game.removeAttribute('title');
            
            /*let leave_game2 = ........*/
            
                let leave_game2 = document.getElementById('leave_game').addEventListener('click', function leave() {
                    /*img_info.style.backgroundImage='';*/
                    let demo =0.5,opa=null;
                    
                   
                   function func1(){
                       if(demo>0.1){
                           demo-=0.2;
                           opa=demo.toFixed(1);
                           img_info.style.opacity=opa;
                           
                           p1_score.innerText =p2_score.textContent;
                           haha();
                       }
                   }
                       let haha = function(){
                            setTimeout(func1,5);};
                            haha();
                    
                    /*function func2 ----START----*/
                    function func2(){
                        
                        if(p1_total >0 || (p2_total > 0)){
                            if(p2_total > 0){p2_total-=1;}
                            if(p1_total > 0){p1_total-=1;}
                           p1_score.innerText =p1_total;
                           p2_score.innerText =p2_total;
                          haha2();
                       }
                    }
                    let haha2 = function(){
                            setTimeout(func2,30);};
                            haha2();
                    
                    
                    img_info.style.height='0px';
                    win_info.style.backgroundColor='#d3d34f';
                    start_game.removeAttribute('disabled');
                    start_game.removeAttribute('title');
                    p1.setAttribute('disabled', 'disabled');
                    p1.setAttribute('title', 'disabled');
                    p2.setAttribute('disabled', 'disabled');
                    p2.setAttribute('title', 'disabled');
                    leave_game.setAttribute('disabled', 'disabled');
                    leave_game.setAttribute('title', 'disabled');
                    dice1_add_p2 = document.getElementById('dice1_player2').innerText = '';
                    dice2_add_p2 = document.getElementById('dice2_player2').innerText = '';
                    dice1_add_p1 = document.getElementById('dice1_player1').innerText = '';
                    dice2_add_p1 = document.getElementById('dice2_player1').innerText = '';
                    /*document.getElementById('totalscore_span_player1').innerText = '';
                    document.getElementById('totalscore_span_player2').innerText = '';*/
                    document.getElementById('win_info').innerText = 'Play again...';
                    aside_2.style.borderBottomLeftRadius='0px';
                    aside_2.style.borderBottomRightRadius='0px';
                    p1_count = 0;
                    p2_count = 0;
                }, false);
    
            
            /*
            below NUMERIC USED VARIABLES from here...
            rndm1;
            p1_count, p2_count
            p1_total, p2_total
            p1_chance, p2_chance
            */
                
                /* for if else : only one player button enables when start_game button clicks */
                if (rndm1 == 1) {
                    p1.setAttribute('disabled', 'disabled');
                    p1.setAttribute('title', 'disabled');
                } else {
                    p2.setAttribute('disabled', 'disabled');
                    p2.setAttribute('title', 'disabled');
                }
            
                
                // event for p2 button clicks
                p2.addEventListener('click', function() {
                    if ((rndm1 == 1) && (p2_count < 5)) {
                        console.log("p2 : " + p2_count);
                        let roll_p2 = document.getElementById('roll_p2');
                         roll_p2.style.transform='rotate(360deg)';
                        roll_p2.style.backgroundColor='#e38888';
                        
                        //disable p2 button after it clicked without delay
                        p2.setAttribute('disabled', 'disabled');
                        p2.setAttribute('title', 'disabled');
                        rndm1 = 2;
                        
                        setTimeout(function(){
                            roll_p2.style.transform='rotate(-360deg)';
                            roll_p2.style.backgroundColor='#f59898';
                            
                            /* RUNS AFTER 0.9sec : it ADDS score in p2 after completely rotate the dice*/
                            setTimeout(function(){
                        
                        let dice1_value_p2 = Math.trunc(Math.random() * 7);
                        let dice2_value_p2 = Math.trunc(Math.random() * 7);
                        p2_total = p2_total + dice1_value_p2 + dice2_value_p2;
                        var dice1_add_p2 = document.getElementById('dice1_player2').innerText = dice1_value_p2;
                        var dice2_add_p2 = document.getElementById('dice2_player2').innerText = dice2_value_p2;
                        document.getElementById('totalscore_span_player2').innerText = p2_total;
                        p2_count++;
                        
                        if (p1_count != 5) {
                            p1.removeAttribute('disabled');
                            p1.removeAttribute('title');
                        }
                        if((p1_count == 5 && p2_count == 5) && (p1_total > p2_total)){
//                                alert('p1 WINS');
                            document.getElementById('win_info').innerText='P1 WINS';
                            img_info.style.backgroundImage='url("images/medal1.png")';
                            img_info.style.height='400px';
                            aside_2.style.borderBottomLeftRadius='5px';
                            aside_2.style.borderBottomRightRadius='5px';
                            }
                                                else{
                                                    if((p1_total < p2_total) && ((p1_count == 5) && (p2_count == 5))){
                                                    img_info.style.backgroundImage='url("images/medal1.png")';
                                                        img_info.style.height='400px';
                                                    document.getElementById('win_info').innerText='P2 WINS';
                                                    aside_2.style.borderBottomLeftRadius='5px';
                            aside_2.style.borderBottomRightRadius='5px';
                                                        
                                                    }
                                                }
                            },900);
                        }, 700);
                    }                    
                }, false);   //event for p2 button clicks ----ENDS----
                
                
                //event for p1 button clicks
                p1.addEventListener('click', function() {
                    if (((rndm1 == 0) || (rndm1 == 2)) && (p1_count < 5)) {
                        console.log("p1 : " + p1_count);
                        let roll_p1 = document.getElementById('roll_p1');
                        roll_p1.style.backgroundColor='#4bc6d6';
                        roll_p1.style.transform='rotate(360deg)';
                        //disable p2 button after it clicked without delay
                    /*    p1.style.backgroundColor='#e0e0e0';*/
                        p1.setAttribute('disabled', 'disabled');
                        p1.setAttribute('title', 'disabled');
                        setTimeout(function(){
                            roll_p1.style.transform='rotate(-360deg)';
                         roll_p1.style.backgroundColor='#56dced';
                            /* RUNS AFTER 0.9sec  : it ADDS score in p1 after completely rotate the dice*/
                            setTimeout(function(){
                                rndm1 = 1;
                        let dice1_value_p1 = Math.trunc(Math.random() * 7);
                        let dice2_value_p1 = Math.trunc(Math.random() * 7);
                        p1_total = p1_total + dice1_value_p1 + dice2_value_p1;
                        var dice1_add_p1 = document.getElementById('dice1_player1').innerText = dice1_value_p1;
                        var dice2_add_p1 = document.getElementById('dice2_player1').innerText = dice2_value_p1;
                        document.getElementById('totalscore_span_player1').innerText = p1_total;
                        p1_count++;                       
                        if (p2_count != 5) {
                            p2.removeAttribute('disabled');
                            p2.removeAttribute('title');
                            }
                                /*if for P2 wins*/
                        if((p2_count == 5 && p1_count == 5) && (p1_total < p2_total)){
                           img_info.style.backgroundImage='url("images/medal1.png")';
                            document.getElementById('win_info').innerText='P2 WINS';
                            img_info.style.height='400px';
                            aside_2.style.borderBottomLeftRadius='5px';
                            aside_2.style.borderBottomRightRadius='5px';
                        }
                        else{
                              /*if for P1 wins*/
                            if((p1_total > p2_total) && ((p2_count == 5) && (p1_count == 5))){
                                img_info.style.backgroundImage='url("images/medal1.png")';
                                document.getElementById('win_info').innerText='P1 WINS';
                                img_info.style.height='400px';
                               aside_2.style.borderBottomLeftRadius='5px';
                            aside_2.style.borderBottomRightRadius='5px';
                            }
                        else{
                              /*if for P2 and P2 got equal score then match DRAW*/
                            if((p1_total == p2_total) && (p2_count == 5 && p1_count == 5)){
                                 img_info.style.backgroundImage='url("images/medal1.png")';
                                 img_info.style.height='400px';
                                 aside_2.style.borderBottomLeftRadius='5px';
                                 aside_2.style.borderBottomRightRadius='5px';
                                 document.getElementById('win_info').innerText='Match DRAW..!';
                            }
                        }
                        }
                            },900);
                            

                        }, 700);

                    }
                   
                }, false);  //event for p1 button clicks ----ENDS----
        /*}*/
        });
