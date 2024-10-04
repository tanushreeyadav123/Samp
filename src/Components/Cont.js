import React, { useContext, useState } from "react";
import "./Style.css";
import product from "./Products";
import { user1 } from "./Context";

export default function Cont() {
  
  // ---------------------------------to filter items--------------------------------
  let [prd, setprd] = useState(product);
  let filtersearch = (fl) => {
    let x = product.filter((fil) => fil.type === fl);
    setprd(x);
  };
  // --------------------------------------------------------------------------------
  
  // ---------------------------------to search product------------------------------
  let [searchproduct, setsearchproduct] = useState('');
  let [noMatchMessage, setNoMatchMessage] = useState('');

  let change = (e) => {
    let inputvalue = e.target.value;
    setsearchproduct(inputvalue);
    searchItem(inputvalue);
  };

  let searchItem = (pro) => {
    let inputLowerCase = pro.toLowerCase();
    let x = product.filter((fil) => {
      let productNameLowerCase = fil.description.toLowerCase();
      return productNameLowerCase.includes(inputLowerCase);
    });
    setprd(x);

    if (x.length === 0) {
      setNoMatchMessage("NO ITEM MATCH");
    } else {
      setNoMatchMessage('');
    }
  };

  // ------------------------------- add to cart ------------------------------------
  let { ct, setct } = useContext(user1);
  console.log(ct.length);
  // ---------------------------------------------------------------------------------

  return (
    // <div className="">
    <>
      <div className="row">
        <div className="btn_cont">
          <div className="btns">
            <button class="btn btn-outline-dark" onClick={() => { setprd(product) }}>All</button>
            <button class="btn btn-outline-dark" onClick={() => { filtersearch("men") }}>MEN</button>
            <button class="btn btn-outline-dark" onClick={() => { filtersearch("women") }}>WOMEN</button>
            <button class="btn btn-outline-dark" onClick={() => { filtersearch("kids") }}>KIDS</button>
            <span id="span_srch">
              <form onSubmit={(e) => { searchItem(searchproduct, e) }} role="search">
                <input type="search" class="form-control border border-dark border-3" id='search' value={searchproduct} onChange={change} placeholder='search'/>
              </form>
            </span>
          </div>
        </div>
      </div>
      
      <div className="cont">
        {prd.map((m) => {
          return (
            <div class="card" style={{ width: "18rem" }}>
              <img src={m.image_url} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-title">{m.offer}</p>
                <p class="card-text" className="
                ext_line">
                 {m.description}
                </p>
                <h4>{m.price}</h4>
               

                {
                ct.includes(m)?(<a  class="btn btn-primary rc" onClick={()=>{setct(ct.filter((fl) => fl.id !== m.id))}}>REMOVE FROM CART</a>):
                ( <a class="btn btn-primary" onClick={() => { setct([...ct, m]) }}>ADD TO CART</a>)
                }
              </div>
            </div>
          );
        })}
      </div>
      
      <h1 id="match_item">{noMatchMessage}</h1>
      </>
  );
}
