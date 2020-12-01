const get = key => JSON.parse(localStorage.getItem(key)) || null;

const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const remove = key => localStorage.removeItem(key);

export default { get, set, remove };
