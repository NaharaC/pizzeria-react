import PropTypes from 'prop-types';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../context/UserProvider';

export const Register = () => {
    
    const {handleRegister, handleChangeRegister} = useContext(UserContext)

  return (
    <>
    <h1>Registro</h1>
    <Form onSubmit = {handleRegister}>
        
        <Form.Group 
            className="mb-3" 
            controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
            onChange = {handleChangeRegister}
            type="email"
            name='email' 
            placeholder="Ingresa tu email" />
        </Form.Group>
      
        <Form.Group 
            className="mb-3" 
            controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
            onChange = {handleChangeRegister}
            type="password"
            name='password'
            placeholder="Ingresa tu contraseña" />
        </Form.Group>

        <Button
            variant="primary" 
            type="submit">
            Registrarme
        </Button>

    </Form>
    </>
  );
};

Register.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
};