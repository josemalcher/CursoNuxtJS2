// export default (context) => {
//   console.log('auth middleware')
//   console.log(context)
// }
export default ({redirect}) => {
  console.log('auth middleware')
  const loggedIn = false;
  if (!loggedIn) {
    return redirect('/')
  }
}
