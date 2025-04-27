import { useState } from 'react'
import './App.css'
import { set, useForm } from 'react-hook-form';


function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();


  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()

      }, d * 1000);
    })
  }
  const onsubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {method : "POST",headers: {
      "Content-Type": "application/json", } ,body: JSON.stringify(data)},)
    let res = await r.test
    console.log(data, res)
    if (data.username !== "vivek") {
      setError("myform ", { message: "Your form is not in good order because credential are invalid" })
    }
    if (data.username === "tony") {
      setError("blocked ", { message: "sorry this user is blocked" })
    }
  }


  return (
    <>
      {isSubmitting && <div>loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onsubmit)}>
          <input placeholder='username'{...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max  length is 8" } })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password'  {...register("password", { minLength: { value: 7, message: "min length is 7" } })} type="text" />{errors.password && <div className='red'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
