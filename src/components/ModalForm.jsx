import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import "./styles/ModalForm.css"

const defaultValues =
{
  "first_name": "",
  "last_name": "",
  "email": "",
  "password": "",
  "birthday": ""
};

const ModalForm = ({
  isShowModal,
  handleClickShowModal,
  createUser,
  updatingUser,
  updateUser,
  setUpdatingUser
}) => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const submit = (data) => {
    if(updatingUser){
      updateUser(data, updatingUser.id)
    } else {
    createUser(data);
    }
    reset(defaultValues);
    setUpdatingUser()
  }

  const handleClickClose = () => {
    handleClickShowModal()
    reset(defaultValues)
    setUpdatingUser()
  }

  //* Fields validation

  //Patern regex email
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  //Validations
  const nameValidatedField = {
    required: "* This field required",
    maxLength: {
      value: 25,
      message: "Text is to long"
  }};

  const emailValidated = {
    required: "* This field required",
    maxLength: {
      value: 150,
      message: "Text is to long"
  },
  pattern: {
    value: regexEmail,
    message: "Not valid email address"
  }
  }

  const passwordValidated = {
    required: "* This field required",
    maxLength: {
      value: 128,
      message: "Text is to long"
  }};

  const birthdayValidated = {
    required: "* This field required",
};

  useEffect(() => {
    if(updatingUser) {
      reset(updatingUser);
    }
  }, [updatingUser]);
  

  return (
    <section className={`modalForm ${isShowModal ? 'activeForm' : ''}`}>
      <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
        <h3 className='modalForm__title'>{updatingUser ? "Edit user" : "New user"}</h3>
        <i onClick={handleClickClose} className='bx bx-x modalForm__x'></i>
       <div className='modalForm__divflex'>
       <i className='bx bxs-user modalForm__icon'></i>
        <div className='modalForm__divname'>
          <label className='modalForm__label' htmlFor="">First Name</label>
          <input className='modalForm__input' placeholder='First Name' type="text" {...register("first_name",nameValidatedField)} />
          {
            errors.first_name && <p className='fields-validated'>{errors.first_name.message}</p>
          }
        </div>
        <div className='modalForm__divname'>
          <label className='modalForm__label' htmlFor="">Last Name</label>
          <input className='modalForm__input' placeholder='Last Name' type="text" {...register("last_name", nameValidatedField)}  />
          {
            errors.last_name && <p className='fields-validated'>{errors.last_name.message}</p>
          }
        </div>
        </div>
        <div className='modalForm__div row'>
          <label className='modalForm__label' htmlFor="">Email</label>
          <i className='bx bxs-envelope modalForm__icon2'></i><input className='modalForm__input' placeholder='Email' type="email" {...register("email", emailValidated)}  />
          </div>
          {
            errors.email && <p className='fields-validated'>{errors.email.message}</p>
          }
        <div className='modalForm__div row'>
          <label className='modalForm__label' htmlFor="">Password</label>
          <i className='bx bxs-lock modalForm__icon2'></i><input className='modalForm__input' placeholder='Password' type="password" {...register("password", passwordValidated)} />
          </div>
          {
            errors.password && <p className='fields-validated'>{errors.password.message}</p>
          }
        <div className='modalForm__div row'>
          <label className='modalForm__label' htmlFor="">Birthday</label>
          <i className='bx bxs-gift modalForm__icon2'></i><input className='modalForm__input' type="date" {...register("birthday", birthdayValidated)} />
          </div>
          {
            errors.birthday && <p className='fields-validated'>{errors.birthday.message}</p>
          }
        <div className='modalForm__center'>
        <button className='modalForm__btn'>{updatingUser ? "Save changes" : "Add new user"}</button>
        </div>
        
      </form>
    </section>
  );
}

export default ModalForm