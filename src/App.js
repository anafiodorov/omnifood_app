import './css/general.css';
import './css/queries.css';
import './css/styles.css';
import Customer1 from './img/customers/customer-1.jpg';
import Customer2 from './img/customers/customer-2.jpg';
import Customer3 from './img/customers/customer-3.jpg';
import Customer4 from './img/customers/customer-4.jpg';
import Customer5 from './img/customers/customer-5.jpg';
import Customer6 from './img/customers/customer-6.jpg';
import Logo from './img/omnifood-logo.png';
import Woman from './img/hero.png';
import TechCrunch from './img/logos/techcrunch.png';
import BusinessInsider from './img/logos/business-insider.png';
import TheNewYorkTimes from './img/logos/the-new-york-times.png';
import Forbes from './img/logos/forbes.png';
import UsaToday from './img/logos/usa-today.png';
import AppScreen1 from './img/app/app-screen-1.png';
import AppScreen2 from './img/app/app-screen-2.png';
import AppScreen3 from './img/app/app-screen-3.png';
import Meal1 from './img/meals/meal-1.jpg';
import Meal2 from './img/meals/meal-2.jpg';
import Dave from './img/customers/dave.jpg';
import Ben from './img/customers/ben.jpg';
import Steve from './img/customers/steve.jpg';
import Hannah from './img/customers/hannah.jpg';
import Gallery1 from './img/gallery/gallery-1.jpg';
import Gallery2 from './img/gallery/gallery-2.jpg';
import Gallery3 from './img/gallery/gallery-3.jpg';
import Gallery4 from './img/gallery/gallery-4.jpg';
import Gallery5 from './img/gallery/gallery-5.jpg';
import Gallery6 from './img/gallery/gallery-6.jpg';
import Gallery7 from './img/gallery/gallery-7.jpg';
import Gallery8 from './img/gallery/gallery-8.jpg';
import Gallery9 from './img/gallery/gallery-9.jpg';
import Gallery10 from './img/gallery/gallery-10.jpg';
import Gallery11 from './img/gallery/gallery-11.jpg';
import Gallery12 from './img/gallery/gallery-12.jpg';

import { useState } from 'react';

function App() {
  // const [entredFullName, setEnteredFullName] = useState('');
  // const [entredEmail, setEnteredEmail] = useState('');
  // const [entredOption, setEnteredOption] = useState('');
  const [userInput, setUserInput] = useState({
    entredFullName: '',
    entredEmail: '',
    entredOption: '',
  });
  const userNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, entredFullName: event.target.value };
    });
  };
  const emailChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, entredEmail: event.target.value };
    });
  };
  const optionChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, entredOption: event.target.value };
    });
  };
  const createClient = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(userInput));
    fetch('http://localhost:3001/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInput),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
      });
    setUserInput({
      entredFullName: '',
      entredEmail: '',
      entredOption: '',
    });
  };
  return (
    <div>
      <header class='header'>
        <a href='#'>
          <img src={Logo} alt='Omnifood logo' class='logo' />
        </a>
        <nav class='main-nav'>
          <ul class='main-nav-list'>
            <li>
              <a class='main-nav-link' href='#'>
                How it works
              </a>
            </li>
            <li>
              <a class='main-nav-link' href='#'>
                Meals
              </a>
            </li>
            <li>
              <a class='main-nav-link' href='#'>
                Testimonials
              </a>
            </li>
            <li>
              <a class='main-nav-link' href='#'>
                Pricing
              </a>
            </li>
            <li>
              <a class='main-nav-link nav-cta' href='#'>
                Try for free
              </a>
            </li>
          </ul>
        </nav>
        <button class='btn-mobile-nav'>
          <ion-icon class='icon-mobile-nav' name='menu'></ion-icon>
          <ion-icon class='icon-mobile-nav' name='close'></ion-icon>
        </button>
      </header>
      <main>
        <section class='section-hero'>
          <div class='hero'>
            <div class='hero-text-box'>
              <h1 class='heading-primary'>
                A healthy meal delivered to your door, every single day
              </h1>
              <p class='hero-description'>
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <a href='#' class='btn btn--full margin-right-sm'>
                Start eating well
              </a>
              <a href='#' class='btn btn--outline'>
                Learn more &darr;
              </a>
              <div class='delivered-meals'>
                <div class='delivered-imgs'>
                  <img src={Customer1} alt='Customer photo' />
                  <img src={Customer2} alt='Customer photo' />
                  <img src={Customer3} alt='Customer photo' />
                  <img src={Customer4} alt='Customer photo' />
                  <img src={Customer5} alt='Customer photo' />
                  <img src={Customer6} alt='Customer photo' />
                </div>
                <p class='delivered-text'>
                  <span> 250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
            <div class='hero-img-box'>
              <img
                src={Woman}
                alt='Woman enjoying food, meals in storage container, and food bowls on a table'
                class='hero-img'
              />
            </div>
          </div>
        </section>

        <section class='section-featured'>
          <div class='container'>
            <h2 class='heading-featured-in'>As featured in</h2>
            <div class='logos'>
              <img src={TechCrunch} alt='techcrunch logo' />
              <img src={BusinessInsider} alt={'business insider logo'} />
              <img src={TheNewYorkTimes} alt='the new york times logo' />
              <img src={Forbes} alt='forbes logo' />
              <img src={UsaToday} alt='usa today logo' />
            </div>
          </div>
        </section>

        <section class='section-how'>
          <div class='container'>
            <span class='subheading'>How it works</span>
            <h2 class='heading-secondary'>
              Your daily dose of health in 3 simple steps
            </h2>
          </div>
          <div class='container grid grid--2-cols grid--center-v'>
            <div class='step-text-box'>
              <p class='step-number'>01</p>
              <h3 class='heading-tertiary'>
                Tell us what you like (and what not)
              </h3>
              <p class='step-description'>
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </p>
            </div>
            <div class='step-img-box'>
              <img
                src={AppScreen1}
                class='step-img'
                alt='Iphone app preferences selection screen'
              />
            </div>

            <div class='step-img-box'>
              <img
                src={AppScreen2}
                class='step-img'
                alt='Iphone app meal approving plan screen'
              />
            </div>
            <div class='step-text-box'>
              <p class='step-number'>02</p>
              <h3 class='heading-tertiary'>Approve your weekly meal plan</h3>
              <p class='step-description'>
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </div>

            <div class='step-text-box'>
              <p class='step-number'>03</p>
              <h3 class='heading-tertiary'>Receive meals at convenient time</h3>
              <p class='step-description'>
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </div>
            <div class='step-img-box'>
              <img
                src={AppScreen3}
                class='step-img'
                alt='Iphone app delivery screen'
              />
            </div>
          </div>
        </section>

        <section class='section-meals'>
          <div class='container center-text'>
            <span class='subheading'>Meals</span>
            <h2 class='heading-secondary'>
              Omnifood AI chooses from 5,000+ recipes**
            </h2>
          </div>
          <div class='container grid grid--3-cols margin-bottom-md'>
            <div class='meal'>
              <img src={Meal1} class='meal-img' alt='Japanese Gyozas' />
              <div class='meal-content'>
                <div class='meal-tags'>
                  <span class='tag tag--vegetarian'>Vegetarian</span>
                </div>
                <p class='meal-title'>Japanese Gyozas</p>
                <ul class='meal-attributes'>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='flame'></ion-icon>
                    <span>
                      <strong> 650 </strong>calories
                    </span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='restaurant'></ion-icon>
                    <span>
                      Nutriscore &reg; <strong>74</strong>
                    </span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='star-outline'></ion-icon>
                    <span>
                      <strong> 4.9</strong> rating(537)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class='meal'>
              <img src={Meal2} class='meal-img' alt='Japanese Gyozas' />
              <div class='meal-content'>
                <div class='meal-tags'>
                  <span class='tag tag--vegan'>Vegan</span>
                  <span class='tag tag--paleo'>Paleo</span>
                </div>
                <p class='meal-title'>Avocado Salad</p>
                <ul class='meal-attributes'>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='flame'></ion-icon>
                    <span>
                      <strong> 400 </strong>calories
                    </span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='restaurant'></ion-icon>
                    <span>
                      Nutriscore &reg; <strong>92</strong>
                    </span>
                  </li>
                  <li class='meal-attribute'>
                    <ion-icon class='meal-icon' name='star-outline'></ion-icon>
                    <span>
                      <strong> 4.8</strong> rating(441)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class='diets'>
              <h3 class='heading-tertiary'>Works with any diet:</h3>
              <ul class='list'>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Vegetarian </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Vegan </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Pescatarian </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Gluten-free </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Lactose-free </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Keto </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Paleo </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Low FODMAP </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Kid-friendly </span>
                </li>
              </ul>
            </div>
          </div>

          <div class='container all-recipies'>
            <a href='#' class='link'>
              See all recipes &rarr;
            </a>
          </div>
        </section>

        <section class='section-testimonials grid'>
          <div class='testimonials-container'>
            <span class='subheading'>Testimonials</span>
            <h2 class='heading-secondary'>
              Once you try it, you can't go back
            </h2>
            <div class='testimonials'>
              <figure class='testimonial'>
                <img
                  class='testimonial-img'
                  src={Dave}
                  alt='Photo of customer Dave Bryson'
                />
                <blockquote class='testimonial-text'>
                  Inexpensive, healthy and great-tasting meals, without even
                  having to order manually! It feels truly magical.
                </blockquote>
                <p class='testimonial-name'>&mdash; Dave Bryson</p>
              </figure>

              <figure class='testimonial'>
                <img
                  class='testimonial-img'
                  src={Ben}
                  alt='Photo of customer Ben Hadley'
                />
                <blockquote class='testimonial-text'>
                  The AI algorithm is crazy good, it chooses the right meals for
                  me every time. It's amazing not to worry about food anymore!
                </blockquote>
                <p class='testimonial-name'>&mdash; Ben Hadley</p>
              </figure>

              <figure class='testimonial'>
                <img
                  class='testimonial-img'
                  src={Steve}
                  alt='Photo of customer Steve Miller'
                />
                <blockquote class='testimonial-text'>
                  Omnifood is a life saver! I just started a company, so there's
                  no time for cooking. I couldn't live without my daily meals
                  now!
                </blockquote>
                <p class='testimonial-name'>&mdash; Steve Miller</p>
              </figure>

              <figure class='testimonial'>
                <img
                  class='testimonial-img'
                  src={Hannah}
                  alt='Photo of customer Hannah Smith'
                />
                <blockquote class='testimonial-text'>
                  I got Omnifood for the whole family, and it frees up so much
                  time! Plus, everything is organic and vegan and without
                  plastic.
                </blockquote>
                <p class='testimonial-name'>&mdash; Hannah Smith</p>
              </figure>
            </div>
          </div>
          <div class='gallery'>
            <figure class='gallery-item'>
              <img src={Gallery1} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery2} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery3} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery4} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery5} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery6} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery7} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery8} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery9} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery10} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery11} alt='Photo of beautifully arranged food' />
            </figure>
            <figure class='gallery-item'>
              <img src={Gallery12} alt='Photo of beautifully arranged food' />
            </figure>
          </div>
        </section>

        <section class='section-pricing'>
          <div class='container'>
            <span class='subheading'>Pricing</span>
            <h2 class='heading-secondary'>
              Eating well without breaking the bank
            </h2>
          </div>

          <div class='container grid grid--2-cols margin-bottom-md'>
            <div class='pricing-plan pricing-plan-starter'>
              <header class='plan-header'>
                <p class='plan-name'>Starter</p>
                <p class='plan-price'>
                  <span>$</span> 399
                </p>
                <p class='plan-text'> That's just $13 per meal!</p>
              </header>
              <ul class='list'>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> 1 meal pe day </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Order from 11am to 9pm </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Delivery is free </span>
                </li>
              </ul>
              <div class='plan-sign-up'>
                <a href='#' class='btn btn--full starter-btn'>
                  Start eating well
                </a>
              </div>
            </div>
            <div class='pricing-plan pricing-plan--complete'>
              <header class='plan-header'>
                <p class='plan-name'>Complete</p>
                <p class='plan-price'>
                  <span>$</span> 649
                </p>
                <p class='plan-text'> That's just $11 per meal!</p>
              </header>
              <ul class='list'>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span>
                    <strong>2 meals</strong> per day
                  </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span>
                    Order <strong>24/7</strong>
                  </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span>Delivery is free </span>
                </li>
                <li class='list-item'>
                  <ion-icon class='list-icon' name='checkmark'></ion-icon>
                  <span> Get access to latest recipes</span>
                </li>
              </ul>
              <div class='plan-sign-up'>
                <a href='#' class='btn btn--full'>
                  Start eating well
                </a>
              </div>
            </div>
          </div>

          <div class='container grid'>
            <aside class='plan-details'>
              Prices include all applicable taxes. Users can cancel at any time.
              Both plans inclide the following:
            </aside>
          </div>

          <div class='container grid grid--4-cols'>
            <div class='feature'>
              <ion-icon class='feature-icon' name='infinite'></ion-icon>
              <p class='feature-title'>Never cook again!</p>
              <p class='feature-text'>
                Our subscriptions cover 365 days per year, even including major
                holidays.
              </p>
            </div>
            <div class='feature'>
              <ion-icon class='feature-icon' name='nutrition'></ion-icon>
              <p class='feature-title'>Local and organic</p>
              <p class='feature-text'>
                Our cooks only use local, fresh, and organic products to prepare
                your meals.
              </p>
            </div>
            <div class='feature'>
              <ion-icon class='feature-icon' name='leaf'></ion-icon>
              <p class='feature-title'>No waste</p>
              <p class='feature-text'>
                All our partners only use reusable containers to package all
                your meals.
              </p>
            </div>
            <div class='feature'>
              <ion-icon class='feature-icon' name='pause'></ion-icon>
              <p class='feature-title'>Pause anytime</p>
              <p class='feature-text'>
                Going on vacation? Just pause your subscription, and we refund
                unused days.
              </p>
            </div>
          </div>
        </section>
        <section class='section-cta'>
          <div class='container'>
            <div class='cta'>
              <div class='cta-text-box'>
                <h2 class='heading-secondary'>Get your first meal for free!</h2>
                <p class='cta-text'>
                  Healthy, tasty and hassle-free meals are waiting for you.
                  Start eating well today. You can cancel or pause anytime. And
                  the first meal is on us!
                </p>
                <form onSubmit={createClient} action='#' class='cta-form'>
                  <div>
                    <label for='full-name'>Full Name</label>
                    <input
                      value={userInput.entredFullName}
                      id='full-name'
                      type='text'
                      placeholder='John Smith'
                      required
                      onChange={userNameChangeHandler}
                    />
                  </div>
                  <div>
                    <label for='email'>Email address</label>
                    <input
                      value={userInput.entredEmail}
                      id='email'
                      type='email'
                      placeholder='me@emample.com'
                      required
                      onChange={emailChangeHandler}
                    />
                  </div>
                  <div>
                    <label for='select-where'>
                      Where did you hear about us?
                    </label>
                    <select
                      name=''
                      id='select-where'
                      required
                      value={userInput.entredOption}
                      onChange={optionChangeHandler}
                    >
                      <option value=''>Please choose one option</option>
                      <option value='friends'>Friends and family</option>
                      <option value='youtube'>Youtube video</option>
                      <option value='podcast'>Podcast</option>
                      <option value='ad'>Facebook ad</option>
                      <option value='others'>Others</option>
                    </select>
                  </div>
                  <button type='submit' class='btn btn--form'>
                    Sign up now
                  </button>
                </form>
              </div>
              <div
                class='cta-img-box'
                role='img'
                aria-label='Women enjoying food'
              ></div>
            </div>
          </div>
        </section>
      </main>
      <footer class='footer'>
        <div class='container grid grid--footer'>
          <div class='logo-col'>
            <a href='#' class='footer-logo'>
              <img src={Logo} alt='Omnifood logo' class='logo' />
            </a>

            <ul class='social-links'>
              <li>
                <a class='footer-link' href='#'>
                  <ion-icon
                    class='social-icon'
                    name='logo-instagram'
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  <ion-icon class='social-icon' name='logo-facebook'></ion-icon>
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  <ion-icon class='social-icon' name='logo-twitter'></ion-icon>
                </a>
              </li>
            </ul>

            <p class='copyright'>
              Copyright &copy; 2027 by Omnifood, Inc. All rights reverved.
            </p>
          </div>
          <div class='address-col'>
            <p class='footer-heading'>Contact us</p>
            <address class='contacts'>
              <p class='address'>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a class='footer-link' href='tel:415-201-6370'>
                  415-201-6370
                </a>
                <br />
                <a class='footer-link' href='mailto:hello@omnifood.com'>
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>
          <nav class='nav-col'>
            <p class='footer-heading'>Account</p>
            <ul class='footer-nav'>
              <li>
                <a class='footer-link' href='#'>
                  Create account
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  Sign in
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  iOS app
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  Android app
                </a>
              </li>
            </ul>
          </nav>
          <nav class='nav-col'>
            <p class='footer-heading'>Company</p>
            <ul class='footer-nav'>
              <li>
                <a class='footer-link' href='#'>
                  About Omnifood
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  For Business
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  Cooking partners
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <nav class='nav-col'>
            <p class='footer-heading'>Resources</p>
            <ul class='footer-nav'>
              <li>
                <a class='footer-link' href='#'>
                  Recipe directory
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  Help center
                </a>
              </li>
              <li>
                <a class='footer-link' href='#'>
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
