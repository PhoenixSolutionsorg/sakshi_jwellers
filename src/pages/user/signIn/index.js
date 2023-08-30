import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AccountServices } from "../../../services";
import { UserAuth, WithoutCategory, Footer } from '../../../components'
import messageNotification from "../../../common/message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../redux/user";
import { useNavigate } from "react-router-dom";
import routesMap from "../../../routeControl/userRouteMap";
function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = async (formData) => {
    try {
      console.log(formData);
      const response = await AccountServices.userSignIn(formData);
      if (response?.success) {
        dispatch(setUserData(response?.data));
        messageNotification({
          type: "success",
          message: response?.message
        });
        navigate(routesMap.HOME.path)
      }
    } catch (error) {

    }
  }

  return (
    <>
      <WithoutCategory />
      <UserAuth
        signIn={signIn}
      />
      <Footer />
    </>
  );
}
export default SignIn;
