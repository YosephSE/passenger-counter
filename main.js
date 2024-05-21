let count = 0;
        function add(){
            count += 1;
            document.getElementById("count").innerHTML = count
            
        }
        function save(){
            document.getElementById("data").innerHTML += ` - ${count}`;
            document.getElementById("count").innerHTML = 0;
            count = 0;
            
        }