import React from 'react'

const ModalForm = () => {
  return (
<section>
  <form>
    <h3>New user</h3>
    <i className='bx bx-x'></i>
    <div><label htmlFor=""></label><input type="text" /></div>
    <div><label htmlFor=""></label><input type="text" /></div>
    <div><label htmlFor=""></label><input type="email" /></div>
    <div><label htmlFor=""></label><input type="password" /></div>
    <div><label htmlFor=""></label><input type="date" /></div>
    <button>Add new user</button>
  </form>
</section>
  )
}

export default ModalForm
