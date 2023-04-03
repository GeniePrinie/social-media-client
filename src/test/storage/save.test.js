import { save } from '../../js/storage/save';

const mockSetItem = jest.fn();

const mockLocalStorage = {
  setItem: mockSetItem,
};

global.localStorage = mockLocalStorage;

test('It adds value to local storage', () => {
  save('dummy-key', 'dummy-value');

  expect(mockSetItem).toHaveBeenCalled();
});
