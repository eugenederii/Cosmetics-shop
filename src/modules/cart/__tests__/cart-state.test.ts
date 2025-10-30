import { cartItemsVar, addToCart, getCartTotal } from "../state/cart-state";

describe("Cart State", () => {
  beforeEach(() => {
    // Очищаємо кошик перед кожним тестом
    cartItemsVar([]);
  });

  test("should add item to empty cart", () => {
    const item = {
      id: "1",
      variantId: "variant-1",
      title: "Test Product",
      price: 100,
      quantity: 1,
    };

    addToCart(item);

    expect(cartItemsVar()).toHaveLength(1);
    expect(cartItemsVar()[0]).toEqual(item);
  });

  test("should calculate total correctly", () => {
    addToCart({
      id: "1",
      variantId: "v1",
      title: "Product A",
      price: 100,
      quantity: 2,
    });
    addToCart({
      id: "2",
      variantId: "v2",
      title: "Product B",
      price: 50,
      quantity: 1,
    });

    expect(getCartTotal()).toBe(250); // 100*2 + 50*1 = 250
  });
});
