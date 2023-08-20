import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {UserAuth,WithoutCategory,Footer} from '../../../components'
function SignIn() {
  return (
    <>
      <WithoutCategory/>
      <UserAuth/>
      <Footer/>
    </>
  );
}
export default SignIn;
