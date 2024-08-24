import { useContext } from "react";
import AuthContext from "../context/Auth-context";

const Auth = () => {
  const { statusLogin, login } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h1 className="title">kullanıcı giriş yaptı mı ?</h1>

      <p className="mb-4">
        {statusLogin ? "Giriş yapıldı" : "Giriş yapılmadı"}
      </p>

      <button className={`button ${!statusLogin ? "is-primary" : "is-danger"}`} onClick={login}>
        {!statusLogin ? "Giriş yap" : "Çıkış yap"}
      </button>
    </div>
  );
};

export default Auth;
