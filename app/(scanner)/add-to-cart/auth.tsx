import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "@/lib/store/cartSlice";
import ApiService from "@/lib/service";

const AuthPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      ApiService.authGuest((data) => {
        dispatch(setToken(data.token));

        // console.log(data.token);
      });
    }

    // console.log(token);
  }, []);
  return <></>;
};

export default AuthPage;
