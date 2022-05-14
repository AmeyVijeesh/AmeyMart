import React from "react";
import Modal from "./Modal";
import "./login.css";
import logo from "./logo.png";
import Popup from "./popup";
import Popup2 from "./popup2";
import FadeIn from "react-fade-in";
import image1 from "./Images/img1.webp";
import image2 from "./Images/img2.jpeg";
import image3 from "./Images/img3.jpeg";
import image4 from "./Images/img4.jpeg";
import image5 from "./Images/img5.jpeg";
import image6 from "./Images/img6.jpeg";
import image7 from "./Images/img7.jpeg";
import image8 from "./Images/img8.jpeg";
import image9 from "./Images/img9.jpeg";
import image10 from "./Images/img10.jpeg";
import image11 from "./Images/img11.jpeg";
import image12 from "./Images/img12.jpeg";
import image13 from "./Images/img13.jpeg";
import image14 from "./Images/img14.webp";
import image15 from "./Images/img15.jpeg";
import image16 from "./Images/img16.jpeg";
import image17 from "./Images/img17.jpeg";
import image18 from "./Images/img18.jpeg";
import mainimage from "./Images/mainimage.jpeg";
import visalogo from "./Images/VISA-logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      show2: false,
      name: "User348",
      password: "",
      password2: "",
      email: "Unknown",
      us_state: "",
      state_statement: "Which State are you from?",
      thanksmessage: "",
      city: "",
      address: "",
      zip: "",
      cvv: "",
      entered_coupon: "",
      creditcard_number: "",
      coupon_code: "6a0m3e8y",
      coupon_statement: "",
      coupon_redeemed: "No",
      signup_statement: "",
      burger_quantity: 0,
      burger_price: 3.67,
      final_burger_price: 0,
      pizza_quantity: 0,
      pizza_price: 10.26,
      final_pizza_price: 0,
      falooda_quantity: 0,
      falooda_price: 28.42,
      final_falooda_price: 0,
      bread_quantity: 0,
      bread_price: 3.03,
      final_bread_price: 0,
      milk_quantity: 0,
      milk_price: 3.31,
      final_milk_price: 0,
      muffin_quantity: 0,
      muffin_price: 6.11,
      final_muffin_price: 0,
      cheese_quantity: 0,
      cheese_price: 2.99,
      final_cheese_price: 0,
      donut_quantity: 0,
      donut_price: 17.33,
      final_donut_price: 0,
      apple_quantity: 0,
      apple_price: 5.99,
      final_apple_price: 0,
      orange_quantity: 0,
      orange_price: 6.99,
      final_orange_price: 0,
      strawberry_quantity: 0,
      strawberry_price: 7.99,
      final_strawberry_price: 0,
      potato_quantity: 0,
      potato_price: 0.48,
      final_potato_price: 0,
      carrot_quantity: 0,
      carrot_price: 4.99,
      final_carrot_price: 0,
      avocado_quantity: 0,
      avocado_price: 2.65,
      final_avocado_price: 0,
      salmon_quantity: 0,
      salmon_price: 19.34,
      final_salmon_price: 0,
      branzino_quantity: 0,
      branzino_price: 24.53,
      final_branzino_price: 0,
      chicken_quantity: 0,
      chicken_price: 8.0,
      final_chicken_price: 0,
      egg_quantity: 0,
      egg_price: 5.49,
      final_egg_price: 0,
      total: 0,
    };
  }

  handlePayment = () => {
    if (
      this.state.address !== "" &&
      this.state.zip !== "" &&
      this.state.city !== "" &&
      this.state.creditcard_number !== "" &&
      this.state.cvv !== ""
    ) {
      this.setState({
        thanksmessage:
          "Thanks for purchasing! Your items will be delivered to you within a week!",
      });
    } else {
      this.setState({
        thanksmessage:
          "Please enter your address and details! We can't deliver to you if you don't provide the details!",
      });
    }
  };
  cityChanged = (event) => {
    this.setState({ city: event.target.value });
  };

  zipChanged = (event) => {
    this.setState({ zip: event.target.value });
  };

  addressChanged = (event) => {
    this.setState({ address: event.target.value });
  };

  handleSelect = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  togglePopup2() {
    this.setState({
      showPopup2: !this.state.showPopup2,
    });
  }

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  showModal2 = (e) => {
    this.setState({
      show: !this.state.show2,
    });
  };

  function1 = (event) => {
    this.setState({ name: event.target.value });
  };

  function2 = (event) => {
    this.setState({ password: event.target.value });
  };

  changeBurgerQuantity = (event) => {
    this.setState({ burger_quantity: event.target.value });
    let price = event.target.value * this.state.burger_price;
    price = price.toFixed(2);
    this.setState({ final_burger_price: price });
  };

  removeBurger = () => {
    this.setState({ burger_quantity: 0, final_burger_price: 0 });
  };

  changePizzaQuantity = (event) => {
    this.setState({ pizza_quantity: event.target.value });
    let price = event.target.value * this.state.pizza_price;
    price = price.toFixed(2);
    this.setState({ final_pizza_price: price });
  };

  removePizza = () => {
    this.setState({ pizza_quantity: 0, final_pizza_price: 0 });
  };

  changeFaloodaQuantity = (event) => {
    this.setState({ falooda_quantity: event.target.value });
    let price = event.target.value * this.state.falooda_price;
    price = price.toFixed(2);
    this.setState({ final_falooda_price: price });
  };

  removeFalooda = () => {
    this.setState({ falooda_quantity: 0, final_falooda_price: 0 });
  };

  changeBreadQuantity = (event) => {
    this.setState({ bread_quantity: event.target.value });
    let price = event.target.value * this.state.bread_price;
    price = price.toFixed(2);
    this.setState({ final_bread_price: price });
  };

  removeBread = () => {
    this.setState({ bread_quantity: 0, final_bread_price: 0 });
  };

  changeMilkQuantity = (event) => {
    this.setState({ milk_quantity: event.target.value });
    let price = event.target.value * this.state.milk_price;
    price = price.toFixed(2);
    this.setState({ final_milk_price: price });
  };

  removeMilk = () => {
    this.setState({ milk_quantity: 0, final_milk_price: 0 });
  };

  changeMuffinQuantity = (event) => {
    this.setState({ muffin_quantity: event.target.value });
    let price = event.target.value * this.state.muffin_price;
    price = price.toFixed(2);
    this.setState({ final_muffin_price: price });
  };

  removeMuffin = () => {
    this.setState({ muffin_quantity: 0, final_muffin_price: 0 });
  };

  changeCheeseQuantity = (event) => {
    this.setState({ cheese_quantity: event.target.value });
    let price = event.target.value * this.state.cheese_price;
    price = price.toFixed(2);
    this.setState({ final_cheese_price: price });
  };

  removeCheese = () => {
    this.setState({ cheese_quantity: 0, final_cheese_price: 0 });
  };

  changeDonutQuantity = (event) => {
    this.setState({ donut_quantity: event.target.value });
    let price = event.target.value * this.state.donut_price;
    price = price.toFixed(2);
    this.setState({ final_donut_price: price });
  };

  removeDonut = () => {
    this.setState({ donut_quantity: 0, final_donut_price: 0 });
  };

  changeAppleQuantity = (event) => {
    this.setState({ apple_quantity: event.target.value });
    let price = event.target.value * this.state.apple_price;
    price = price.toFixed(2);
    this.setState({ final_apple_price: price });
  };

  removeApple = () => {
    this.setState({ apple_quantity: 0, final_apple_price: 0 });
  };

  changeOrangeQuantity = (event) => {
    this.setState({ orange_quantity: event.target.value });
    let price = event.target.value * this.state.orange_price;
    price = price.toFixed(2);
    this.setState({ final_orange_price: price });
  };

  removeOrange = () => {
    this.setState({ orange_quantity: 0, final_orange_price: 0 });
  };

  changeStrawberryQuantity = (event) => {
    this.setState({ strawberry_quantity: event.target.value });
    let price = event.target.value * this.state.strawberry_price;
    price = price.toFixed(2);
    this.setState({ final_strawberry_price: price });
  };

  removeStrawberry = () => {
    this.setState({ strawberry_quantity: 0, final_strawberry_price: 0 });
  };

  changePotatoQuantity = (event) => {
    this.setState({ potato_quantity: event.target.value });
    let price = event.target.value * this.state.potato_price;
    price = price.toFixed(2);
    this.setState({ final_potato_price: price });
  };

  removePotato = () => {
    this.setState({ potato_quantity: 0, final_potato_price: 0 });
  };

  changeCarrotQuantity = (event) => {
    this.setState({ carrot_quantity: event.target.value });
    let price = event.target.value * this.state.carrot_price;
    price = price.toFixed(2);
    this.setState({ final_carrot_price: price });
  };

  removeCarrot = () => {
    this.setState({ carrot_quantity: 0, final_carrot_price: 0 });
  };

  changeAvocadoQuantity = (event) => {
    this.setState({ avocado_quantity: event.target.value });
    let price = event.target.value * this.state.avocado_price;
    price = price.toFixed(2);
    this.setState({ final_avocado_price: price });
  };

  removeAvocado = () => {
    this.setState({ avocado_quantity: 0, final_avocado_price: 0 });
  };

  changeSalmonQuantity = (event) => {
    this.setState({ salmon_quantity: event.target.value });
    let price = event.target.value * this.state.salmon_price;
    price = price.toFixed(2);
    this.setState({ final_salmon_price: price });
  };

  removeSalmon = () => {
    this.setState({ salmon_quantity: 0, final_salmon_price: 0 });
  };

  changeBranzinoQuantity = (event) => {
    this.setState({ branzino_quantity: event.target.value });
    let price = event.target.value * this.state.branzino_price;
    price = price.toFixed(2);
    this.setState({ final_branzino_price: price });
  };

  removeBranzino = () => {
    this.setState({ branzino_quantity: 0, final_branzino_price: 0 });
  };

  changeChickenQuantity = (event) => {
    this.setState({ chicken_quantity: event.target.value });
    let price = event.target.value * this.state.chicken_price;
    price = price.toFixed(2);
    this.setState({ final_chicken_price: price });
  };

  removeChicken = () => {
    this.setState({ chicken_quantity: 0, final_chicken_price: 0 });
  };

  changeEggQuantity = (event) => {
    this.setState({ egg_quantity: event.target.value });
    let price = event.target.value * this.state.egg_price;
    price = price.toFixed(2);
    this.setState({ final_egg_price: price });
  };

  removeEgg = () => {
    this.setState({ egg_quantity: 0, final_egg_price: 0 });
  };

  changeUsState = (event) => {
    this.setState({ us_state: event.target.value });
    const statement =
      "Awesome! You're from " +
      event.target.value +
      "! Please proceed with the steps below to get started!";
    this.setState({ state_statement: statement });
  };

  couponChange = (event) => {
    const userEnteredCoupon = event.target.value;
    this.setState({ entered_coupon: userEnteredCoupon });

    if (userEnteredCoupon === this.state.coupon_code) {
      this.setState({
        coupon_statement: "Valid coupon code. You've got $25 discount!",
        coupon_redeemed: "Yes",
      });
      let temp = this.state.total - 25;
      this.setState({ total: temp });
    } else {
      this.setState({
        coupon_statement: "Invalid coupon code! Please try again. ",
        coupon_redeemed: "No",
      });
    }
  };

  nameChanged = (event) => {
    this.setState({ name: event.target.value });
  };

  passChanged = (event) => {
    this.setState({ password: event.target.value });
  };

  passChanged2 = (event) => {
    this.setState({ password2: event.target.value });
  };

  emailChanged = (event) => {
    this.setState({ email: event.target.value });
  };

  loginProceed = () => {
    if (this.state.password === this.state.password2) {
      this.setState({ loginProceed: "Registered successfully!" });
    } else if (this.state.password !== this.state.password2) {
      this.setState({
        loginProceed: " Passwords don't match. Please try again.",
      });
    }
  };

  creditCardNumberChanged = (event) => {
    this.setState({ creditcard_number: event.target.value });
  };

  cvvChanged = (event) => {
    this.setState({ cvv: event.target.value });
  };

  calculateTotal = () => {
    const tot =
      Number(this.state.final_burger_price) +
      Number(this.state.final_pizza_price) +
      Number(this.state.final_cheese_price) +
      Number(this.state.final_apple_price) +
      Number(this.state.final_avocado_price) +
      Number(this.state.final_branzino_price) +
      Number(this.state.final_bread_price) +
      Number(this.state.final_carrot_price) +
      Number(this.state.final_chicken_price) +
      Number(this.state.final_donut_price) +
      Number(this.state.final_egg_price) +
      Number(this.state.final_falooda_price) +
      Number(this.state.final_milk_price) +
      Number(this.state.final_muffin_price) +
      Number(this.state.final_orange_price) +
      Number(this.state.final_potato_price) +
      Number(this.state.final_salmon_price) +
      Number(this.state.final_strawberry_price);
    this.setState({ total: tot });
    console.log(this.state.total);
  };

  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <p id="logo"> Amey Mart </p>
            </li>
            <li>
              <a class="active" href="#topimage">
                Home
              </a>
            </li>
            <li>
              <a href="#sectionheading">Pre-made Food Items</a>
            </li>
            <li>
              <a href="#sectionheading2">Farm Items</a>
            </li>
            <li>
              <a href="#sectionheading3">Bakery Items</a>
            </li>

            <li>
              <a href="#sectionheading4">Fruits & Veggies</a>
            </li>

            <li>
              <a href="#sectionheading5">Meat & Seafood</a>
            </li>
            <li>
              <a id="loggedinas">Logged in as: {this.state.name}</a>
            </li>
          </ul>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <img id="topimage" class="topimage" src={mainimage}></img>
        </div>
        <div class="background-image-text">
          <h1 class="mainwelcome">WELCOME TO AMEY MART</h1>
          <h3 class="maindescription">
            Thanks for choosing Amey Mart. Please select your state below:
          </h3>

          {/*
              <Dropdown
                formLabel="Choose a service"
                buttonText="Send form"
                onChange={this.handleSelect}
              >
                <Option value="Click to see options" />
                <Option value="Option 1" />
                <Option value="Option 2" />
                <Option value="Option 3" />
              </Dropdown>
              */}

          {/* <center>
            <select
              class="country-box"
              name="countries"
              onChange={this.changeUsState}
            >
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illnois">Illnois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvanina">Pennsylvanina</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
            </select>
          </center> */}

          <div class="list-choice">
            <div class="list-choice-title">State</div>
            <div class="list-choice-objects">
              <label>
                <input
                  onChange={this.changeUsState}
                  type="radio"
                  name="State"
                  value="Alabama"
                />
                <span>Alabama</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Alaska"
                  type="radio"
                  name="State"
                />
                <span>Alaska</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Arizona"
                  type="radio"
                  name="State"
                />
                <span>Arizona</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Arkansas"
                  type="radio"
                  name="State"
                />
                <span>Arkansas</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="California"
                  type="radio"
                  name="State"
                />
                <span>California</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Colorado"
                  type="radio"
                  name="State"
                />
                <span>Colorado</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Connecticut"
                  type="radio"
                  name="State"
                />
                <span>Connecticut</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Delaware"
                  type="radio"
                  name="State"
                />
                <span>Delaware</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Florida"
                  type="radio"
                  name="State"
                />
                <span>Florida</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Georgia"
                  type="radio"
                  name="State"
                />
                <span>Georgia</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Hawaii"
                  type="radio"
                  name="State"
                />
                <span>Hawaii</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  type="radio"
                  name="State"
                  value="Idaho"
                />
                <span>Idaho</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Illinois"
                  type="radio"
                  name="State"
                />
                <span>Illinois</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Indiana"
                  type="radio"
                  name="State"
                />
                <span>Indiana</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Indiana"
                  type="radio"
                  name="State"
                />
                <span>Indiana</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Iowa"
                  type="radio"
                  name="State"
                />
                <span>Iowa</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Kansas"
                  type="radio"
                  name="State"
                />
                <span>Kansas</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Kentucky"
                  type="radio"
                  name="State"
                />
                <span>Kentucky</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Maine"
                  type="radio"
                  name="State"
                />
                <span>Maine</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Maryland"
                  type="radio"
                  name="State"
                />
                <span>Maryland</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Massachusetts"
                  type="radio"
                  name="State"
                />
                <span>Massachusetts</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Michigan"
                  type="radio"
                  name="State"
                />
                <span>Michigan</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Minnesota"
                  type="radio"
                  name="State"
                />
                <span>Minnesota</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Mississippi"
                  type="radio"
                  name="State"
                />
                <span>Mississippi</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Missouri"
                  type="radio"
                  name="State"
                />
                <span>Missouri</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="Montana"
                  type="radio"
                  name="State"
                />
                <span>Montana</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Nebraska"
                  type="radio"
                  name="State"
                />
                <span>Nebraska</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Nevada"
                  type="radio"
                  name="State"
                />
                <span>Nevada</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="New Hampshire"
                  type="radio"
                  name="State"
                />
                <span>New Hampshire</span>
              </label>
              <label>
                <input
                  onChange={this.changeUsState}
                  value="New Jersey"
                  type="radio"
                  name="State"
                />
                <span>New Jersey</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="New Mexico"
                  type="radio"
                  name="State"
                />
                <span>New Mexico</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="New York"
                  type="radio"
                  name="State"
                />
                <span>New York</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="North Carolina"
                  type="radio"
                  name="State"
                />
                <span>North Carolina</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="North Dakota"
                  type="radio"
                  name="State"
                />
                <span>North Dakota</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Ohio"
                  type="radio"
                  name="State"
                />
                <span>Ohio</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Oklahoma"
                  type="radio"
                  name="State"
                />
                <span>Oklahoma</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Oregon"
                  type="radio"
                  name="State"
                />
                <span>Oregon</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Pennsylvania"
                  type="radio"
                  name="State"
                />
                <span>Pennsylvania</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Rhode Island"
                  type="radio"
                  name="State"
                />
                <span>Rhode Island</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="South Carolina"
                  type="radio"
                  name="State"
                />
                <span>South Carolina</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="South Dakota"
                  type="radio"
                  name="State"
                />
                <span>South Dakota</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Tennessee"
                  type="radio"
                  name="State"
                />
                <span>Tennessee</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Texas"
                  type="radio"
                  name="State"
                />
                <span>Texas</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Utah"
                  type="radio"
                  name="State"
                />
                <span>Utah</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Vermont"
                  type="radio"
                  name="State"
                />
                <span>Vermont</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Virginia"
                  type="radio"
                  name="State"
                />
                <span>Virginia</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Washington"
                  type="radio"
                  name="State"
                />
                <span>Washington</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="West Virginia"
                  type="radio"
                  name="State"
                />
                <span>West Virginia</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Winsconsin"
                  type="radio"
                  name="State"
                />
                <span>Winsconsin</span>
              </label>

              <label>
                <input
                  onChange={this.changeUsState}
                  value="Wyoming"
                  type="radio"
                  name="State"
                />
                <span>Wyoming</span>
              </label>
            </div>
          </div>
          <p id="statestatement">{this.state.state_statement}</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <a href="#signup">
            <span></span>
          </a>
        </div>

        <div style={{ backgroundColor: "black" }}>
          <img id="topimage" class="topimage" src={mainimage}></img>
        </div>

        <center>
          <div class="bg-image"></div>
          <div class="bg-text">
            <div>
              <center>
                <div className="App" id="signup">
                  {/*<button
                    class="toggle-button"
                    onClick={(e) => {
                      this.showModal(e);
                    }}
                  >
                    show Modal
                  </button> */}

                  <Modal onClose={this.showModal} show={this.state.show}>
                    <h2>Sign Up</h2>
                    <p>
                      We're almost done. Please fill in these details to
                      continue!
                    </p>
                    <div class="input-container">
                      <input
                        type="text"
                        required=" "
                        onChange={this.nameChanged}
                      />
                      <label>Full Name</label>
                    </div>

                    <div class="input-container">
                      <input
                        type="mail"
                        required="@"
                        onChange={this.emailChanged}
                      />
                      <label>Email</label>
                    </div>

                    <div class="input-container">
                      <input
                        type="password"
                        required=" "
                        onChange={this.passChanged}
                      />
                      <label>Password</label>
                    </div>

                    <div class="input-container">
                      <input
                        type="password"
                        required=" "
                        onChange={this.passChanged2}
                      />
                      <label>Confirm Password</label>
                    </div>

                    <div>
                      <button
                        onClick={this.loginProceed}
                        class="ghost-round full-width"
                      >
                        Create Account
                      </button>
                      <p class="registerdone">{this.state.loginProceed}</p>
                    </div>

                    <a href="#applogo" class="downscroller">
                      <span></span>
                    </a>
                  </Modal>
                </div>
              </center>
            </div>
          </div>
        </center>

        <center>
          <br></br>
          <br></br>
          <img src={logo} width="200" height="200" id="applogo" />
          <hr />
        </center>
        <center>
          <p id="sectionheading"> PRE-MADE FOOD ITEMS </p>
        </center>
        <FadeIn delay="500">
          <div class="container">
            <div class="column-item">
              <center>
                <img id="divimage" src={image1}></img>
                <hr></hr>
                <p id="itemheading">THE PIZZA</p>
                <p id="itemdescription">
                  Pepper-barbecued chicken along with chicken meatballs filled
                  with creamy cheese and veggies, all in a crispy crust. 10.26$
                </p>
                <button onClick={this.removePizza}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changePizzaQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.pizza_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_pizza_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image2}></img>
                <hr></hr>
                <p id="itemheading">THE BURGER</p>
                <p id="itemdescription">
                  Flame-grilled chicken topped with juicy tomatoes, lettuce,
                  crunchy pickles, tasty mayonnaise, enclosed with fresh sesame
                  seed bun. $3.67
                </p>
                <button onClick={this.removeBurger}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeBurgerQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.burger_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_burger_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image3}></img>
                <hr></hr>
                <p id="itemheading">THE FALOODA</p>
                <p id="itemdescription">
                  Fresh fruits surrounded by vanilla ice cream with cornflakes,
                  choco chips, and all types of flavours of ice cream. $28.42
                </p>
                <button onClick={this.removeFalooda}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeFaloodaQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.falooda_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_falooda_price}</strong>
                </p>
              </center>
            </div>
          </div>
        </FadeIn>
        <hr></hr>
        <center>
          <p id="sectionheading2"> FARM ITEMS </p>
        </center>
        <FadeIn delay="500">
          <div class="container">
            <div class="column-item">
              <center>
                <img id="divimage" src={image4}></img>
                <hr></hr>
                <p id="itemheading">EGGS</p>
                <p id="itemdescription">
                  Fresh eggs directly from the chickens in our farm, pack of six
                  for $5.49
                </p>
                <button onClick={this.removeEgg}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeEggQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.egg_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_egg_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image5}></img>
                <hr></hr>
                <p id="itemheading"> CHEESE </p>
                <p id="itemdescription">
                  Fresh cheese, made from cow milk, 0.25 pound for $2.99
                </p>
                <button onClick={this.removeCheese}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeCheeseQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.cheese_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_cheese_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image6}></img>
                <hr></hr>
                <p id="itemheading">FRESH MILK</p>
                <p id="itemdescription">
                  Farm-fresh milk, no added preservatives or chemicals. Half a
                  gallon for $3.31
                </p>
                <button onClick={this.removeMilk}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeMilkQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.milk_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_milk_price}</strong>
                </p>
              </center>
            </div>
          </div>
        </FadeIn>
        <hr></hr>
        <center>
          <p id="sectionheading3"> BAKERY ITEMS </p>
        </center>
        <FadeIn delay="500">
          <div class="container">
            <div class="column-item">
              <center>
                <img id="divimage" src={image7}></img>
                <hr></hr>
                <p id="itemheading">MUFFINS</p>
                <p id="itemdescription">
                  Freshly baked eggless cupcakes with choco chips and flavors of
                  pineapple, vanilla, and chocolate. $6.11 (Please note that
                  each pack contains 6 muffins, with two of each flavours)
                </p>
                <button onClick={this.removeMuffin}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeMuffinQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.muffin_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_muffin_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image8}></img>
                <hr></hr>
                <p id="itemheading"> BREAD </p>
                <p id="itemdescription">
                  Freshly made milk bread for sandwich, 16 ounce for $3.03
                </p>
                <button onClick={this.removeBread}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeBreadQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.bread_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_bread_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image9}></img>
                <hr></hr>
                <p id="itemheading"> DOUGHNUTS </p>
                <p id="itemdescription">
                  Freshly made soft and crispy bagel with chocolate, sprinkles
                  and other flavours. One box for $17.33
                </p>
                <button onClick={this.removeDonut}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeDonutQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.donut_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_donut_price}</strong>
                </p>
              </center>
            </div>
          </div>
        </FadeIn>
        <hr></hr>
        <center>
          <p id="sectionheading4"> FRUITS AND VEGETABLES </p>
        </center>
        <FadeIn delay="500">
          <div class="container">
            <div class="column-item">
              <center>
                <img id="divimage" src={image10}></img>
                <hr></hr>
                <p id="itemheading">APPLE RED DELICIOUS </p>
                <p id="itemdescription">
                  Farm-fresh red apples handpicked from Washington, no chemicals
                  added. Pack of six for $5.99
                </p>
                <button onClick={this.removeApple}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeAppleQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.apple_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_apple_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image11}></img>
                <hr></hr>
                <p id="itemheading"> ORANGES </p>
                <p id="itemdescription">
                  Sweet and tasty oranges, pack of six for $6.99
                </p>
                <button onClick={this.removeOrange}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeOrangeQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.orange_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_orange_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image12}></img>
                <hr></hr>
                <p id="itemheading"> STRAWBERRIES </p>
                <p id="itemdescription">
                  Fresh and sweet strawberries, pack of 12 for $7.99
                </p>
                <button onClick={this.removeStrawberry}>
                  Remove from Cart
                </button>
                <input
                  type="number"
                  onChange={this.changeStrawberryQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.strawberry_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_strawberry_price}</strong>
                </p>
              </center>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay="500">
          <div class="container">
            <div class="column-item">
              <center>
                <img id="divimage" src={image13}></img>
                <hr></hr>
                <p id="itemheading">POTATOES</p>
                <p id="itemdescription">
                  Farm-fresh potatoes, hand picked in farms. A pound for $0.48
                </p>
                <button onClick={this.removePotato}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changePotatoQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.potato_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_potato_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image14}></img>
                <hr></hr>
                <p id="itemheading"> CARROTS </p>
                <p id="itemdescription">
                  Healthy organic carrots, 5 packs for $4.99
                </p>
                <button onClick={this.removeCarrot}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeCarrotQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.carrot_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_carrot_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image15}></img>
                <hr></hr>
                <p id="itemheading"> AVOCADO </p>
                <p id="itemdescription">Avocado, for each, $2.65</p>
                <button onClick={this.removeAvocado}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeAvocadoQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.avocado_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_avocado_price}</strong>
                </p>
              </center>
            </div>
          </div>
        </FadeIn>
        <hr></hr>
        <center>
          <p id="sectionheading5">MEAT AND SEAFOOD</p>
        </center>
        <FadeIn delay="500">
          <div class="container">
            <div class="column-item">
              <center>
                <img id="divimage" src={image16}></img>
                <hr></hr>
                <p id="itemheading">SALMON FILLETS</p>
                <p id="itemdescription">
                  Freshly caught Canadian salmon fillets, with no chemicals or
                  preservatives. Cleaned pieces for $19.34
                </p>
                <button onClick={this.removeSalmon}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeSalmonQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.salmon_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_salmon_price}</strong>
                </p>
              </center>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image17}></img>
                <hr></hr>
                <p id="itemheading"> CHICKEN </p>
                <p id="itemdescription">Farm chicken for $8.00</p>
                <button onClick={this.removeChicken}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeChickenQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.chicken_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_chicken_price}</strong>
                </p>
              </center>
              <br></br>
            </div>
            <div class="column-item">
              <center>
                <img id="divimage" src={image18}></img>
                <hr></hr>
                <p id="itemheading"> BRANZINO </p>
                <p id="itemdescription">
                  Fresh European Seabass(Branzino), for $24.53
                </p>
                <button onClick={this.removeBranzino}>Remove from Cart</button>
                <input
                  type="number"
                  onChange={this.changeBranzinoQuantity}
                  id="itemQuantity"
                ></input>
                <p id="itemquantity">
                  Quantity: <strong>{this.state.branzino_quantity}</strong>
                </p>
                <p id="itemprice">
                  Price: <strong>${this.state.final_branzino_price}</strong>
                </p>
              </center>
            </div>
          </div>
        </FadeIn>

        <p style={{ color: "white" }}>Error:</p>

        <div class="container">
          <br></br>
          <div class="column-item">
            <center>
              <button onClick={this.calculateTotal}>Confirm Items</button>
            </center>
          </div>

          <div class="column-item">
            <center>
              <button onClick={this.togglePopup.bind(this)}>Review Cart</button>
            </center>
          </div>
          <div class="column-item">
            <center>
              <button onClick={this.togglePopup2.bind(this)}> Payment </button>
            </center>
          </div>
        </div>
        <div>
          {this.state.showPopup ? (
            <Popup
              text="  "
              closePopup={this.togglePopup.bind(this)}
              div={
                <div>
                  <div class="form__group">
                    <input
                      type="text"
                      class="form__input"
                      id="name"
                      placeholder="Enter a coupon code, eg: 3a9k0f2z"
                      required=""
                      onChange={this.couponChange}
                    />
                    <label for="name" class="form__label">
                      Coupon Code
                    </label>
                  </div>

                  <p class="couponstatement">{this.state.coupon_statement}</p>
                  <p class="totalprice">Total: ${this.state.total}</p>
                </div>
              }
              h5={
                "Burger : " +
                "Quantity - " +
                this.state.burger_quantity +
                ", Price -  $" +
                this.state.final_burger_price +
                " \n \n Pizza : " +
                "Quantity - " +
                this.state.pizza_quantity +
                ", Price - $" +
                this.state.final_pizza_price +
                " \n \n Falooda : " +
                " Quantity - " +
                this.state.falooda_quantity +
                ", Price - $" +
                this.state.final_falooda_price +
                " \n \n Bread : " +
                " Quantity -  " +
                this.state.bread_quantity +
                ", Price -  $" +
                this.state.final_bread_price +
                " \n \n Milk : " +
                " Quantity - " +
                this.state.milk_quantity +
                ", Price - $" +
                this.state.final_milk_price +
                " \n \n Muffins : " +
                " Quantity - " +
                this.state.muffin_quantity +
                " Price - $" +
                this.state.final_muffin_price +
                " \n \n Cheese : " +
                " Quantity -  " +
                this.state.cheese_quantity +
                ", Price - $" +
                this.state.final_cheese_price +
                " \n \n Apple : " +
                " Quantity - " +
                this.state.apple_quantity +
                ", Price - $" +
                this.state.final_apple_price +
                " \n \n Orange : " +
                " Quantity - " +
                this.state.orange_quantity +
                ", Price - $" +
                this.state.final_orange_price +
                " \n \n Doughnuts :  " +
                " Quantity -  " +
                this.state.donut_quantity +
                ", Price -  $" +
                this.state.final_donut_price +
                " \n \n Strawberries : " +
                " Quantity - " +
                this.state.strawberry_quantity +
                ", Price -  $" +
                this.state.final_strawberry_price +
                " \n \n Potatoes: " +
                " Quantity - " +
                this.state.potato_quantity +
                ", Price - $" +
                this.state.final_potato_price +
                "\n \n Carrots: " +
                " Quantity - " +
                this.state.carrot_quantity +
                ", Price - $" +
                this.state.final_carrot_price +
                " \n \n Avocado: " +
                " Quantity - " +
                this.state.avocado_quantity +
                ", Price - $" +
                this.state.final_avocado_price +
                " \n \n Salmon: " +
                " Quantity - " +
                this.state.salmon_quantity +
                ", Price - $" +
                this.state.final_salmon_price +
                " \n \n Branzino: " +
                " Quantity -  " +
                this.state.branzino_quantity +
                ", Price - $" +
                this.state.final_branzino_price +
                "\n \n Chicken: " +
                " Quantity - " +
                this.state.chicken_quantity +
                ", Price - $" +
                this.state.final_chicken_price +
                "\n \n Eggs: " +
                " Quantity - " +
                this.state.egg_quantity +
                ", Price - $" +
                this.state.final_egg_price
              }
            />
          ) : null}
        </div>
        <div>
          {this.state.showPopup2 ? (
            <Popup2
              text="  "
              closePopup2={this.togglePopup2.bind(this)}
              div={
                <div>
                  <div>
                    <div class="input-container2">
                      <input
                        type="mail"
                        required="@"
                        onChange={this.addressChanged}
                      />
                      <label>Address</label>
                    </div>

                    <div class="input-container2">
                      <input
                        type="text"
                        required="@"
                        onChange={this.cityChanged}
                      />
                      <label>City</label>
                    </div>

                    <div class="input-container2">
                      <input
                        type="text"
                        required="@"
                        maxlength="6"
                        onChange={this.zipChanged}
                      />
                      <label>Zip Code</label>
                    </div>
                  </div>
                  <div class="card">
                    <img src={visalogo} class="logo-card" />
                    <label class="label99">Card number:</label>
                    <input
                      id="user"
                      type="tel"
                      maxLength="16"
                      minLength="16"
                      class="input99 cardnumber"
                      placeholder="1234 5678 9101 1121"
                      onChange={this.creditCardNumberChanged}
                    />
                    <label class="label99">Name:</label>
                    <input class="input99 name" placeholder="Amey Vijeesh" />
                    <label class="toleft label99">CVV:</label>
                    <input
                      class="input99 toleft ccv"
                      placeholder="123"
                      type="tel"
                      maxlength="3"
                      onChange={this.cvvChanged}
                    />
                  </div>

                  <p id="deliveringto">Delivering to: {this.state.address}</p>
                  <p id="deliveringto">{this.state.thanksmessage}</p>
                  <div
                    style={{
                      position: "relative",
                      left: "30%",
                    }}
                  >
                    <p id="userdetails">Email: {this.state.email}</p>
                    <p id="userdetails">State: {this.state.us_state}</p>
                    <p id="userdetails">City: {this.state.city}</p>
                    <p id="userdetails">Zip Code: {this.state.zip}</p>
                  </div>

                  <button onClick={this.handlePayment}>Confirm Payment!</button>
                </div>
              }
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
