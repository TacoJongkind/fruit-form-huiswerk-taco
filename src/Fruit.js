import React, {useState} from "react"

function Fruit(props){
    console.log("what are the props", props);
    const [amount, setAmount] = useState(0);
    return(
        <div className="fruitType">
        <label>{props.kindOfFruit}</label>
        <button style={{margin: 7}} onClick={() => setAmount(amount - 1)}>-</button>
        <span>{amount}</span>
        <button style={{margin: 7}} onClick={() => setAmount(amount + 1)}>+</button>
    </div>
    )
}
export default Fruit