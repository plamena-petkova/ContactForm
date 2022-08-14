import styles from './ContactForm.module.css';
import { useState } from "react";
import * as formService from '../service/formService'

const ContactForm = () => {

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: 'Bulgaria',
    city: '',
    address: '',
    phone: '',
    height: '',
    weight: '',
    birthday: '',
    terms: false,
    allergie: 'no',
    image: ''
  }

  const [values, setValues] = useState(initialState);
  const [details, setDetails] = useState([])
  const [errors, setErrors] = useState(false);


  const errorHandler = (e) => {
    e.preventDefault();

    if (values.firstName === ''
      || values.lastName === ''
      || values.email === ''
      || values.password === ''
      || values.city === ''
      || values.address === ''
      || values.phone === ''
      || values.height === ''
      || values.weight === ''
      || values.birthday === ''
      || values.image === ''
      || values.terms === false) {
      setErrors(true)
    } else {
      setErrors(false)
    }

  }


  const changeHandler = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(values)

    formService.submitForm(values)
              .then(data => setDetails(data))

    console.log(details)

    setValues(initialState)

  };

 
  const alertMessage = (
    <div className={styles["alert"]}>
      <p>All fields should be filled to submit the form!</p>
    </div>
  )


  return (

    <form action="submit" onSubmit={submitHandler} >
      <article className={styles["names"]}>
        <div className={styles["firstName"]}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" 
                 className={styles["first-name"]} 
                 onBlur={errorHandler} 
                 name="firstName" 
                 value={values.firstName} 
                 onChange={changeHandler} 
                 id="firstName" 
                 alt="name" 
            />
        </div>
        <div className={styles["lastName"]}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" 
                 className={styles["last-name"]} 
                 onBlur={errorHandler} 
                 name="lastName" 
                 value={values.lastName} 
                 onChange={changeHandler} 
                 id="lastName" 
                 alt="name" 
            />
        </div>
      </article>
      <article className={styles["email"]}>
        <div className={styles["wrapper-email"]} >
          <label htmlFor="email">Email:</label>
          <input type="email" 
                 id="email" 
                 name="email" 
                 onBlur={errorHandler} 
                 value={values.email} 
                 onChange={changeHandler} 
          />
        </div>
        <div className={styles["wrapper-secret"]}>
          <label htmlFor="password">Secret word:</label>
          <input type="password" 
                 name="password" 
                 id="password" 
                 onBlur={errorHandler} 
                 value={values.password} 
                 onChange={changeHandler} 
          />
        </div>
      </article>
      <article className={styles["address"]}>
        <div className={styles["wrapper-city-country"]}>
          <div className={styles["wrapper-country"]}>
            <label htmlFor="countries">Choose a country:</label>
            <select name="country" 
                    id="countries" 
                    value={values.country} 
                    onChange={changeHandler}
            >
              <option value="Bulgaria">Bulgaria</option>
              <option value="USA">USA</option>
              <option value="France">France</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className={styles["wrapper-city"]}>
            <label htmlFor="city">City:</label>
            <input type="text" 
                   className={styles["city"]} 
                   name="city" onBlur={errorHandler} 
                   value={values.city} 
                   onChange={changeHandler} 
                   id="city" 
            />
          </div>
        </div>
        <label htmlFor="address-text">Full Address:</label>
        <textarea
          name="address"
          id="address-text"
          cols={30}
          rows={3}
          onBlur={errorHandler}
          value={values.address}
          onChange={changeHandler}
        />
      </article>
      <article className={styles["phone"]}>
        <label htmlFor="phone">Phone number:</label>
        <input type="tel" 
               className={styles["phone-number"]} 
               name="phone" 
               value={values.phone} 
               onChange={changeHandler} 
               id="phone" 
        />
      </article>
      <article className={styles["physical-info"]}>
        <label htmlFor="height">Height:</label>
        <input type="number" 
               value={values.height} 
               onBlur={errorHandler} 
               onChange={changeHandler} 
               id="height" 
               name="height" 
        />
        <label htmlFor="weight">Weight:</label>
        <input type="number" 
               value={values.weight} 
               onBlur={errorHandler} 
               onChange={changeHandler} 
               id="weight" 
               name="weight" 
        />
      </article>
      <article className={styles["birthday"]}>
        <label htmlFor="birthday">Date of birth:</label>
        <input type="date" 
               className={styles["birthday"]} 
               name="birthday" 
               onBlur={errorHandler} 
               value={values.birthday} 
               onChange={changeHandler} 
               id="birthday"
        />
      </article>
      <article className={styles["allergies"]}>
        <p className={styles["allergies-text"]}>Do you have any allergies?</p>
        <label htmlFor="allergie-yes">Yes</label>
        <input
          type="radio"
          id="allergie-yes"
          name="allergie"
          value="yes"
          checked={values.allergie === 'yes'}
          onChange={changeHandler}
        />
        <label htmlFor="allergie-no">No</label>
        <input type="radio" 
               id="allergie-no" 
               name="allergie" 
               value="no" 
               onChange={changeHandler} 
               checked={values.allergie === 'no'} />
      </article>
      <article className={styles["image"]}>
        <p className={styles["url-image"]}>Your url image link:</p>
        <input type="url" 
               name="image" 
               value={values.image} 
               onBlur={errorHandler} 
               onChange={changeHandler} 
               id="imageUrl" 
        />
      </article>
      <div className={styles["terms"]}>
        <label htmlFor="terms">Are you agree with our terms and conditions</label>
        <input type="checkbox" 
               name="terms" 
               checked={values.terms} 
               onBlur={errorHandler} 
               onChange={changeHandler} 
               id="terms" 
        />
      </div>
      <div className={styles["btn"]}>
        <input type="submit" 
               value="Submit"
               disabled={errors} 
               className={styles["submit-btn"]} 
        />
      </div>
      {errors ? alertMessage : null}
    </form>
  );
}

export default ContactForm;