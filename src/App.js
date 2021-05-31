import React from 'react';
import './App.css';
import {useState} from 'react'
import Fruit from './Fruit'
import { useForm } from "react-hook-form";


function App() {
    const [amount, setAmount] = useState(0);
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [age, setAge] = useState(0)
    const [postcode, setPostcode] = useState("")
    const [ageCheck, setAgeCheck] = useState("")


    function handleSubmit (event){
        event.preventDefault();
        if(age < 18 ){
            setAgeCheck("Je moet minimaal 18 jaar oud zijn!");
            return;
        }
        console.log("dit is ingevuld",firstname, lastname, age, postcode)
    }
    return (
        <>
            <main>
                <h1>Fruitmand bezorgservice</h1>
                <Fruit
                    kindOfFruit="🍓 Aardbeien"/>
                <Fruit
                    kindOfFruit="🍌 Bananen"/>
                <Fruit
                    kindOfFruit="🍏 Appels"/>
                <Fruit
                    kindOfFruit="🥝 Kiwi's"/>
                <div>
                    <button className="resetButton" type="submit" onClick={() => setAmount(amount === 0)}>Reset</button>
                </div>
                <form className="times" onSubmit={handleSubmit}>
                    <label htmlFor="firstname">Voornaam</label>
                    <input id="firstname" name="firstname" type="text" value={firstname} onChange={(event)=> setFirstname(event.target.value)} required/>
                    <label htmlFor="lastname">Achternaam</label>
                    <input id="lastname" name="lastname" type="text" value={lastname} onChange={(event)=> setLastname(event.target.value)} required/>
                    <label htmlFor="age">Leeftijd</label>
                    <input id="age" name="age" type="number" value={age} onChange={(event)=> setAge(event.target.value)}/>
                    {<p>{ageCheck}</p>}
                    <label htmlFor="postcode">Postcode</label>
                    <input id="postcode" name="postcode" type="text" value={postcode} placeholder="1234AB"
                           onChange={(event)=> setPostcode(event.target.value)} required/>


                    <p>Bezorgfrequentie</p>
                    <div className="frequentie">
                        <input type="radio" id="iedere_week" name="bezorgfrequentie" defaultChecked/>
                        <label htmlFor="om_de_week">Iedere week</label>
                        <input type="radio" id="om_de_week" name="bezorgfrequentie"/>
                        <label htmlFor="iedere_week">Om de week</label>
                        <input type="radio" id="iedere_maand" name="bezorgfrequentie"/>
                        <label htmlFor="iedere_maand">Iedere maand</label>
                        <input type="radio" id="anders" name="bezorgfrequentie"/>
                        <label htmlFor="anders">Anders</label>
                    </div>
                    <div>
                        <p> Opmerking</p>
                        <textarea name="textarea" id="my_textarea" cols="45" rows="4"
                                  placeholder="Schrijf hier je opmerkingen"></textarea>
                    </div>
                    <div>
                        <input type="checkbox" id="newsletter" name="newsletter"/>
                        <label htmlFor="newsletter">Ik ga akkoord met de voorwaarden</label>
                        <div>
                            <input type="submit" value="Versturen"/>
                        </div>

                    </div>

                </form>
            </main>
        </>
    );
}

export default App;
