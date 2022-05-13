export const header = {
  name: {
    title: 'Наименование',
  },
  inner_product_id: {
    title: 'Артикул'
  },
  brandName: {
    title: 'Производитель',
  },
  sellerName: {
    title: 'Имя продавца'
  },
  last_price: {
    title: 'Последняя цена',
  },
  sold_money: {
    title: 'Цена продажи',
    controller: true,
  },
  sold_number: {
    title: 'Количество продаж',
    controller: true,
  }
};

export const fieldsToRender = ['name', 'inner_product_id', ['brand', 'name'], ['seller', 'name'], 'last_price', 'sold_money', 'sold_number'];

export const ITEMS_ON_PAGE = 4;