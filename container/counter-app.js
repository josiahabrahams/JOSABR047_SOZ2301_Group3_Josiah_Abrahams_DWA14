import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

class Counter extends LitElement {
 static styles = css`
 .display{
    display: flex;
    align-items: center;
    flex-direction: column ;
    border-width: 5px;
    justify-content: center;
    height: 50vh;
    
}

.space{
    display: flex;
    height: 15vh;
    width: 70.3%;
    border-bottom: none;
     border: 1px solid black;
    padding-top: 2rem;
    text-align: center;
    background-color: white;
    justify-content:space-around;
}
 h1 {
    text-align: center;
    font-size: 3rem;
    color: #FFADC6;
}

.counter__value {
    width: 70%;
    height: 15rem;
    text-align: center;
    font-size: 6rem;
    font-weight: 800;
     background: none;
     color: rgb(37, 35, 35);
     background-color: white;
     border-bottom: 1px solid black;
}

.button{
     width: 30vw;
}
 `
 /**
  * this object has 3 states normal maximun and minimun
  * they share two functions subtract and add each reacting diffirently according to the property
  * phase state
  */
    state = {
    phase: "normal",
    count: 0,
    normal: {
      value: null,
      add: function () {
        if (this.state.count === this.state.maximum.value) {// increases count property value until max is reached
          this.state.phase = "maximum";
          alert("Maximum value reached");
          return this.state.maximum.value
        }
        return ++this.state.count;
      }.bind(this),
      subtract: function () {
        if (this.state.count === this.state.minimum.value) {//decreases count property until min is reached 
          this.state.phase = "minimum";
          alert("Minimum value reached");
          return  this.state.minimum.value
        }
        return --this.state.count;
      }.bind(this),
    },
    maximum: {
      value: 15,
      add: () => {//keeps count the same and changes nothing
        this.state.phase = "normal";
        alert("Maximum value reached");
        return this.state.count = 15
      },
      subtract: () => {//changes state and subtracts 1 from count
        this.state.phase = "normal";
        return --this.state.count;
      },
    },
    minimum: {
      value: -15,
      add: () => { // changes state back to normal and adds 1 to count
        this.state.phase = "normal";
        return ++this.state.count;
      },
      subtract: () => {//keeps count the same and changes nothing
        this.state.phase = "normal";
        alert("Minimum value reached");
        return this.state.count = -15
      },
    },
  };

  static properties = {
    amount: { type: Number },//used to show the value of count in the object state to the user
  };

  constructor() {
    super();
    this.amount = 0;
  }


  render() {
    return html`
       <h1>Tally Count</h1>
        <div class = "display">
        <input class = "counter__value" readonly value=${this.amount} />
        
        <div class = "space">
        <sl-button class ='button' @click=${() => (this.amount = this.state[this.state.phase].add())}>+</sl-button>
        <sl-button class = "button" @click=${() => (this.amount = this.state[this.state.phase].subtract())}>-</sl-button>
        </div>
        </div>
    `;
  }
}

customElements.define("counter-app", Counter);
