import cuid from 'cuid';

export const Cuid = () => cuid();
export const saveStatePlugin = (store) =>
  store.subscribe((mutation, state) => {
    localStorage.setItem('board', JSON.stringify(state.board));
  });
