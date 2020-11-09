/*Color variables*/
:root{
    --primary: #004869; 
    --secondary:#1e70a3; 
    --tertiary: #236e8c;
    --accent1: #ce156b;
    --accent2: #d84f8f;
    --bg: #c9d8e0; 
}
/*Universal Styling*/
*{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header{
    padding: 50px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg);
}

main{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    background-color: var(--bg);
}


.container{
    width: 800px;
    max-width: 80%;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px;
}

.btn-grid{
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    margin-top: 20px;
}

.btn, .option{
    background-color: var(--primary);
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
    outline: none;
    font-size: 20px; 
}

.btn:hover{
    background-color: var(--secondary);
}

#next-btn{
    background-color: var(--tertiary);
}

#next-btn:hover{
    background-color: var(--accent2);
}

#high-scores{
    background-color: var(--accent1);
}

#high-scores:hover{
    background-color: var(--secondary);
}

#start-screen{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

#end-screen{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#save-score, #start-btn{
    margin: 10px;
    padding: 10px 20px;
    font-size: 20px;
}

#score-screen{
    width: 800px;
    max-width: 80%;
    background-color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px;
    margin: 10px;
    font-size: 20px;
}

#scorelist{
    padding: 20px;
}