import { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      password: props.password,
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.validateForm);
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.validateForm);
  }

  validateForm() {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 8;
    
    this.setState({ enableSubmit: isValidEmail && isValidPassword });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="App-body border-t-[3px] border-[var(--main-color)] p-5 md:p-10 min-h-[300px]">
        <p className="text-base md:text-lg mb-5">Login to access the full dashboard</p>
        <form 
          className="flex flex-col gap-4 md:flex-row md:gap-5 md:items-center"
          onSubmit={this.handleLoginSubmit}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2">
            <label htmlFor="email" className="font-medium">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={this.handleChangeEmail}
              className="border border-gray-300 px-3 py-2 rounded w-full md:w-auto" 
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2">
            <label htmlFor="password" className="font-medium">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={this.handleChangePassword}
              className="border border-gray-300 px-3 py-2 rounded w-full md:w-auto" 
            />
          </div>
          <input 
            type="submit" 
            value="OK"
            disabled={!enableSubmit}
            className={`bg-white border border-gray-400 px-6 py-2 rounded cursor-pointer transition-colors w-16 md:w-auto ${
              !enableSubmit ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

Login.defaultProps = {
  logIn: () => {},
  email: '',
  password: '',
};

export default Login;
