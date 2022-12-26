    $(function () {
      $('.smart-basket__wrapper').smbasket({
        productElement: 'card',
        buttonAddToBasket: 'btn-dark',
        productPrice: 'product__price-number',
        productSize: 'product__size-element',

        productQuantityWrapper: 'product__quantity',
        smartBasketMinArea: 'buscet',
        countryCode: '+38',
        smartBasketCurrency: '₴',
        smartBasketMinIconPath: '../img/shop-icon.png',

        agreement: {
          isRequired: true,
          isChecked: true,
        },
        nameIsRequired: false,
      });
    });