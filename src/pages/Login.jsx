import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext} from '../context/UserProvider';
import { useContext } from 'react';


export const Login = () => {

    const {handleLogin, handleChangeLogin} = useContext(UserContext)

  return (
    <>
    <h1>Login</h1>
    <Form onSubmit = {handleLogin}>
        
        <Form.Group 
            className="mb-3" 
            controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
            onChange={handleChangeLogin}
            type="email"
            name='email' 
            placeholder="Ingresa tu email" />
        </Form.Group>
      
        <Form.Group 
            className="mb-3" 
            controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
            onChange={handleChangeLogin}
            type="password"
            name='password'
            placeholder="Ingresa tu contraseña" />
        </Form.Group>

        <Button
            variant="primary" 
            type="submit">
            Ingresar
        </Button>

    </Form>
    </>
  );
};

Login.propTypes = {
	handleOnChange: PropTypes.func.isRequired,
	handleOnSubmit: PropTypes.func.isRequired,
};