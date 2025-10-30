import { renderHook, act } from "@testing-library/react";
import { useCart } from "../use-cart";
import {
  cartItemsVar,
  addToCart,
  removeFromCart,
} from "../../state/cart-state";

describe("useCart", () => {
  beforeEach(() => {
    cartItemsVar([]);
  });

  test("should return empty cart initially", () => {
    const { result } = renderHook(() => useCart());
    expect(result.current.items).toHaveLength(0);
    expect(result.current.total).toBe(0);
    expect(result.current.itemCount).toBe(0);
  });

  test("should reflect cart state when item is added", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      addToCart({
        id: "1",
        variantId: "v1",
        title: "Test Product",
        price: 100,
        quantity: 2,
      });
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.total).toBe(200);
    expect(result.current.itemCount).toBe(2);
  });

  test("should reflect cart state when item is removed", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      addToCart({
        id: "1",
        variantId: "v1",
        title: "Test Product",
        price: 100,
        quantity: 2,
      });
    });

    act(() => {
      removeFromCart("1");
    });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.total).toBe(0);
  });

  test("should calculate multiple items correctly", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
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
        quantity: 3,
      });
    });

    expect(result.current.items).toHaveLength(2);
    expect(result.current.total).toBe(350);
    expect(result.current.itemCount).toBe(5);
  });
});
