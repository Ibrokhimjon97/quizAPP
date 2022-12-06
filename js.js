
           let integer = 0;
            function togrisi(){
                document.getElementById('right').style.backgroundColor="yellow"; 
                
                integer +=1;
                document.getElementById('natija').innerHTML=integer;  
                iframe1 = document.getElementById('iframe1');
                iframe1.setAttribute('src','src="/quizAPP/quiz2.html"');
                right.removeAttribute('onclick');
        }
            

