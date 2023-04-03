import { remove } from '../../js/storage/remove';

const mockRemoveItem = jest.fn();

const mockLocalStorage = {
  removeItem: mockRemoveItem,
};

global.localStorage = mockLocalStorage;

test('It removes value from local storage', () => {
  remove('dummy-key');

  expect(mockRemoveItem).toHaveBeenCalledWith('dummy-key');
});
