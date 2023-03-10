function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    deleteFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li class='collection-item'>
      {name} x
      <button class='small material-icons' onClick={() => decQuantity(id)}>
        remove
      </button>
      {quantity}
      <button class='material-icons' onClick={() => incQuantity(id)}>
        add
      </button>
      = {price * quantity}
      <span class='secondary-content'>
        <i
          class='material-icons icon-close'
          onClick={() => deleteFromBasket(id)}
        >
          cancel
        </i>
      </span>
    </li>
  );
}

export { BasketItem };
