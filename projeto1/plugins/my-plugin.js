export default (context, inject) => {
  // inject('name', 'JOSE')
  inject('name', (name) => `Olá ${name}`)
}
