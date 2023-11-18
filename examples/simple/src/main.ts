import initExample from '../../init';

const { a, b } = await import('@folder');

console.info(a);
console.info(b);

if (import.meta.hot) {
  initExample(import.meta, 'Simple');
}
