import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    deleteFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul class='collection basket-list'>
      <li class='collection-item active basket-close'>
        Cart{' '}
        <i class='material-icons icon-close' onClick={handleBasketShow}>
          cancel
        </i>
      </li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            deleteFromBasket={deleteFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li class='collection-item'>Cart empty</li>
      )}
      <li class='collection-item active'>
        Summury Cart: {totalPrice} rub
        <button className='secondary-content' style={{ color: 'black' }}>
          Zamowic{' '}
        </button>
      </li>
    </ul>
  );
}

export { BasketList };
