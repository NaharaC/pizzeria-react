import { useState } from "react";
import { Register } from "../components/Register";
import { AlertForm } from "../components/AlertForm";

export const RegisterLayout = () => { 
    const [formData, setFormData] = useState({
    email:'', 
    password: '',
    repeatPassword: '',
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

    const {email, password, repeatPassword} = event.target;
    const form = {
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value,
    };
    handleValidateForm(form)

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleValidateForm = ({email, password, repeatPassword}) => {
    if (!email || !password || !repeatPassword) {
      setFormStatus({color:'danger', msg:'Todos los campos son obligatorios'})
    }else if ( password.length < 6 ){
      setFormStatus({color:'danger', msg:'La contraseña debe tener al menos 6 caracteres'})
    } else if (password !== repeatPassword){
      setFormStatus({color:'warning', msg:'las contraseñas no coinciden'})
    }else if (email && password && repeatPassword) {
      setFormStatus({color: 'success', msg:'Registro exitoso'})
    }
  };

  return  (  
  <>
  <Register 
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