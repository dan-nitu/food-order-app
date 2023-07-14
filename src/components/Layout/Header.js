import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  const onShowCart = () => {
    props.onShowCart();
  };

  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicios food!' />
      </div>
    </>
  );
};
export default Header;
