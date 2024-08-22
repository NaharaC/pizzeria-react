import { useState } from "react";
import { AlertForm } from "../components/AlertForm";
import { Login } from "../components/Login";

export const LoginLayout = () => { 
    const [formData, setFormData] = useState({
    email:'', 
    password: '',
  });

  const [formStatus, setFormStatus] = useState({
    color: '',
    msg: '',
});

  const [showAlert, setShowAlert] = useState (false);

  const handleOnChange = (event) => {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const {email, password} = event.target;
    const form = {
      email: email.value,
      password: password.value,
    };
    handleValidateForm(form)

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleValidateForm = ({email, password}) => {
    if (!email || !password ) {
      setFormStatus({color:'danger', msg:'Todos los campos son obligatorios'})
    }else if ( password.length < 6 ){
      setFormStatus({color:'danger', msg:'Contraseña incorrecta'})
    } else if (email && password) {
      setFormStatus({color: 'success', msg:'Ingreso exitoso', });
      // setFormData({ email: '', password: '' });
    }
  };

  return  (  
  <>
  <Login 
      handleOnChange={handleOnChange} 
      handleOnSubmit={handleOnSubmit}/>

  <AlertForm
    color= {formStatus.color}
    msg= {formStatus.msg}
    show = {showAlert}
    setShow = {setShowAlert}
    />
  </>
  );
}