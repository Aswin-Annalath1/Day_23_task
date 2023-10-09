import { useState } from "react";
const Section=({item,pic,star,rate,rate1,cart,setCart})=>{

    const [btn_name,setBtn_name]=useState("Add to cart")

    return(
        <>
            <div className="box">
                <div className="sale" style={{display:rate1===""? "none":"sale"}}>Sale</div>
                <img className="image" src={pic} alt="" />
                <div className="body">
                    <h4>{item}</h4>
                    <div>
                        <s>{rate1}</s>
                        <span>{rate}</span>
                    </div>
                </div>
                <button onClick={()=>{
                    
                    btn_name==="Add to cart"? setBtn_name("Remove from cart"):setBtn_name("Add to cart")
                    btn_name==="Add to cart"? setCart(cart+1):setCart(cart-1)
                }} className="butn">{btn_name}</button>
                <div className="star">{star}</div>
                
            </div>
        </>

    )
}
export default Section;