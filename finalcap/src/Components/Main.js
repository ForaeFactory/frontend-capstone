import React from 'react';
import '../Main.css';
import HeroImage from '../Images/restauranfood.jpg';
import SaladCard from '../Images/greek salad.jpg';
import Bruschetta from '../Images/bruchetta.svg';
import LemonCake from '../Images/lemon dessert.jpg';


function Main() {
  return (
    <>
      <section className="hero-container">
        <div className='hero-container-left'>
          <h1 className="ll-heading">
            Little Lemon
          </h1>
          <h3>
            Chicago
          </h3>
          <p className='hero-description'>
            We are a family-owned Mediterranean restaurant,
            focused on traditionaal recipes served with a modern twist!
          </p>
          <button className='reserve-table'>Reserve a Table</button>
        </div>
        <div className='hero-container-right'>
          <img id="hero-image" src={HeroImage} alt='chef carrying delicious Mediterranean food' width='300px'  height='380px' />
        </div>
      </section>
      <section className='specials-container-top'>
        <div className='specials-top'>
            <h1 className='specials-title'>This Week's Specials</h1>
            <button className='online-menu'>Online Menu</button>
        </div>
      </section>
      <section className='specials-container-bottom'>
        <div className='specials-cards'>
          <div className='card-container'>
            <img src={SaladCard} alt="Greek Salad" width='250px' />
            <div className="card">
            <div className='card-top'>
              <h4 className='specials-name'>Greek Salad</h4>
              <h4 className='specials-price'>$12.99</h4>
            </div>
              <p className='specials-desc'>
                The famous greek salad of crispy lettuce, peppers, olives
                and our Chicago style feta cheese, garnished with crunchy
                garlic and rosemary croutons.
              </p>
              <button className='specials-order'>Order a delivery</button>
            </div>
          </div>
          <div className='card-container'>
            <img src={Bruschetta} alt="Bruschetta" width='250px' />
            <div className="card">
            <div className='card-top'>
              <h4 className='specials-name'>Bruchetta</h4>
              <h4 className='specials-price'>$5.99</h4>
            </div>
              <p className='specials-desc'>
                Our Bruchetta is made from grilled breaad that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <button className='specials-order'>Order a delivery</button>
            </div>
          </div>
          <div className='card-container'>
            <img src={LemonCake} alt="Lemon Cake" width='250px' />
            <div className="card">
            <div className='card-top'>
              <h4 className='specials-name'>Lemon Dessert</h4>
              <h4 className='specials-price'>$5.00</h4>
            </div>
              <p className='specials-desc'>
                This comes straight from grandma's recipe book, every last 
                ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <button className='specials-order'>Order a delivery</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
