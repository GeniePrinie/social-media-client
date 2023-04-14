import { save } from "../../storage/save";
import { remove } from "../../storage/remove";

const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();
const mockLocalStorage = {
  setItem: mockSetItem,
  removeItem: mockRemoveItem,
};
global.localStorage = mockLocalStorage;

describe("Testing logout functionality", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Value is added to local storage", () => {
    save("accessToken", 12345);
    expect(mockSetItem).toHaveBeenCalledWith("accessToken", "12345");
  });

  test("Value is removed from local storage", () => {
    remove("accessToken");
    expect(mockRemoveItem).toHaveBeenCalledWith("accessToken");
  });
});
