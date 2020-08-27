import React, {useEffect} from 'react';

import * as fx from '../../tasks/Animation';

import img1 from '../../assets/imgs/models.jpg';
import img2 from '../../assets/imgs/girl.jpg';
import img3 from '../../assets/imgs/models2.jpg';
import img4 from '../../assets/imgs/guy.jpg';

const Gallery = () => {

  
  useEffect(() => {
    fx.animateGallery();
  }, []);

  /* TODO::: make gallery animation start whenever / ROUTE is visited
  import { useHistory } from 'react-router-dom';
  const history = useHistory();
  useEffect(() => {
    console.log(history);
    console.log('location changed!')
  }, [history]);
  */

  return (
    <section className='photo'>
      <div className='photo__container' id='gallery'>
        <img src={img1} alt='clothing' className='photo__img selected'/>
        <img src={img2} alt='clothing' className='photo__img'/>
        <img src={img3} alt='clothing' className='photo__img'/>
        <img src={img4} alt='clothing' className='photo__img'/>
      </div>
    </section>
  );
}

export default Gallery;
