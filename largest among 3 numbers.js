<!DOCTYPE html>
<html>
    <style>
        body{
                background-image: url('https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60');
                background-repeat: cover    ;
        }
        fieldset{
                background-color: gray;
                position:absolute;
                top: 150px;
                left: 150px;
                height:65%;
                width:65%;
        }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            }
        input[type="text"]{
            display: flex;
            flex-direction: row;
                font-size: 20px;
            text-align: center; 
            margin:5px;
            height: 25px;
            width: 250px;
            }
        input[type="button"]{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 5px;
            width:250px;
            height: 25px;


            }    

    </style>
 <body> 
 <fieldset>
    <h1 > Largest of Numbers </h1><br><br>
    <div >
        <input type="text" placeholder="Enter the First Number" id="n01">
        <input type="text" placeholder="Enter the Second Number" id="n02">
        <input type="text" placeholder="Enter the Third Number" id="n03"></div>
        <br><br><br>
       <div><input type="button" value="Ans"  onclick="largest()"></div><br><br><br>
        <div><input type="text" placeholder="The result is ..." id="ANSWER">
    </div>

 </fieldset>

<script>
    function largest(){
        var num1=parseInt(document.getElementById("n01").value);
        var num2=parseInt(document.getElementById("n02").value);
        var num3=parseInt(document.getElementById("n03").value);
        var big=0;
        var list=[num1,num2,num3]
        for(let x of list){
            if(x>=big){
                big=x;
            }
        }
     document.getElementById("ANSWER").value=big;
    }


</script>
</body>  
</html>
