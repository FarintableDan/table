export const getInNested = (el, arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, item) => {
    if (!acc) {
      acc = el[item]
    } else {
      acc = acc[item]
    }
    return acc;
  }, '')
};

export const getCurrentPage = (data, page) => {
  const offset = (page) * ITEMS_ON_PAGE;

  return data.slice(offset, offset + ITEMS_ON_PAGE)
}

export const fieldsToRender = ['name', 'inner_product_id', ['brand', 'name'], ['seller', 'name'], 'last_price', 'sold_money', 'sold_number'];

export const ITEMS_ON_PAGE = 4;

export const getMaxPage = (data, pages) => Math.ceil(data.length / pages)