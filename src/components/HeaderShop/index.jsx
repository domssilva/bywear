import React from 'react'

import { Link } from 'react-router-dom';

export default function HeaderShop(props) {

  const {
    setFilters
  } = props;

  const handleClick = (event) => {
    const selectedFilter = event.target.id;

    if (selectedFilter === 'all') {
      setFilters('');
    } else {
      setFilters(selectedFilter);
    }
  }

  return (
  <header className='header'>
    <div className='header__top'>
      <Link to='/' className='header__logo'>
        bywear
      </Link>
      <section className="header__filter">
        <fieldset>
          <input type="radio" id="winter" name="filter" onClick={handleClick}/>
          <label htmlFor="winter">winter</label>
        </fieldset>

        <fieldset>
          <input type="radio" id="accessory" name="filter" onClick={handleClick}/>
          <label htmlFor="accessory">accessories</label>
        </fieldset>

        <fieldset>
          <input type="radio" id="tshirt" name="filter" onClick={handleClick}/>
          <label htmlFor="tshirt">t-shirt</label>
        </fieldset>

        <fieldset>
          <input type="radio" id="all" name="filter" onClick={handleClick}/>
          <label htmlFor="all">all</label>
        </fieldset>
      </section>
    </div>
  </header>
  );
}
