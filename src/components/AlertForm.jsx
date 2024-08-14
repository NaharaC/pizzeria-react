import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export const AlertForm = ({color, msg, show, setShow}) => {
      return (
    <div className='mt-5'>
      <Alert 
        show={show} 
        variant={color}>
        <Alert.Heading>{color.toUpperCase()}</Alert.Heading>
        <p>
            {msg}
        </p>
      </Alert>
    </div>
  );
}

AlertForm.prototype = {
    color: PropTypes.oneOf(['success', 'warning', 'danger', '']).isRequired,
    msg: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};