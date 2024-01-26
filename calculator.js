body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f0f0;
}

.calculator {
    width: 400px;
    text-align: center;
    background-color: #2c2c2c;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

input {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 24px;
    color: #333;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
}

button {
    width: 70px;
    height: 50px;
    font-size: 18px;
    margin: 5px;
    cursor: pointer;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
}

button.operator {
    background-color: #ff8c00;
}

button.double {
    width: 150px;
}

button.equal {
    background-color: #ff4500;
}

button.memory {
    background-color: #4682b4;
}

button.scientific {
    background-color: #9932cc;
}

button.clear {
    background-color: #dc143c;
}
