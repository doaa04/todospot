import React, {useState} from "react"

function Counter() {
    const [name, setName] = useState("");
    const [quanity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState();

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quanity} onChange={handleQuantityChange}/>
            <p>Quantity: {quanity}</p>

            <textarea name="" id="" cols="30" rows="10" value={comment} onChange={handleCommentChange} placeholder="Your comment"></textarea>
            <p>Paaaaaa</p>

            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
        </div>
    )
}

export default Counter