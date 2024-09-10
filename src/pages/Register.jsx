import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Register = ({handleOnChange, handleOnSubmit}) => {
  return (
    <>
    <h1>Registro</h1>
    <Form onSubmit = {handleOnSubmit}>
        
        <Form.Group 
            className="mb-3" 
            controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
            onChange = {handleOnChange}
            type="email"
            name='email' 
            placeholder="Ingresa tu email" />
        </Form.Group>
      
        <Form.Group 
            className="mb-3" 
            controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
            onChange = {handleOnChange}
            type="password"
            name='password'
            placeholder="Ingresa tu contraseña" />
        </Form.Group>

        <Form.Group 
            className="mb-3" 
            controlId="formBasicPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control 
            onChange = {handleOnChange}
            type="password"
            name='repeatPassword' 
            placeholder="Repite tu contraseña" />
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