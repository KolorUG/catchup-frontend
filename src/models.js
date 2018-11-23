const delay = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

export const count = {
  state: 0,
  reducers: {
    bar(state, payload) {
      return state + payload
    }
  },
  effects: (dispatch) => ({
    async foo(payload, state) {
      await delay(1000)
      dispatch.count.bar(1)
    }
  })
};
