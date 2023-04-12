import { login } from "./login";

const mockFetchSuccess = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () =>
      Promise.resolve({
        name: "test",
        email: "test@email.com",
        banner: "",
        avatar: "",
        accessToken: 12345,
      }),
  })
);
const mockSetItem = jest.fn();
const mockLocalStorage = {
  setItem: mockSetItem,
};

global.fetch = mockFetchSuccess;
global.localStorage = mockLocalStorage;

describe("Testing login functionality", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Fetch provides profile data and saves to local storage", async () => {
    const profile = await login();
    expect(mockSetItem).toHaveBeenCalledWith("token", "12345");
    expect(profile).toEqual({
      name: "test",
      email: "test@email.com",
      banner: "",
      avatar: "",
    });
  });
});
