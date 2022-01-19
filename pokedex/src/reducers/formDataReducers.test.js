import { formDataReducer, initialState } from './formDataReducer';

describe('formData Reducers', () => {
  // quando eu recebo CHANGE_SE_VALU com um valor "pika" isso altera meu estado?

  describe('when receive CHANGE_SEARCH_VALUE action', () => {
    it('should change the search value', () => {
      const result = formDataReducer(initialState, {
        type: 'CHANGE_SEARCH_VALUE',
        payload: { search: 'pikachu' },
      });
      const expected = {
        ...initialState,
        search: 'pikachu',
      };

      expect(result).toEqual(expected);
    });
  });

  describe('when receive CHANGE_LIMIT_VALUE action', () => {
    it('should change the limit value', () => {
      const result = formDataReducer(initialState, {
        type: 'CHANGE_LIMIT_VALUE',
        payload: { limit: 10 },
      });
      const expected = {
        ...initialState,
        limit: 10,
      };

      expect(result).toEqual(expected);
    });
  });

  describe('when receive CHANGE_OFFSET_VALUE action', () => {
    it('should increment the offset value', () => {
      const initialStateCopy = {
        ...initialState,
        offset: 10,
      };

      const result = formDataReducer(initialStateCopy, {
        type: 'CHANGE_OFFSET_VALUE',
        payload: { offset: 20 },
      });

      const expected = {
        ...initialState,
        offset: 30,
      };

      expect(result).toEqual(expected);
    });
  });
});
