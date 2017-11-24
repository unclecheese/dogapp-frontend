import React from 'react';

const noop = () => {};

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.username || !this.state.password) {
            this.props.onError();
        } else {
            this.props.onSubmit && this.props.onSubmit(this.state.username, this.state.password);
        }
    }
    handleUserNameChange = (e) => {
        this.setState({
            username: e.target.value,
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    render () {
        return (<form style={{ float: 'right' }} onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={this.handleUserNameChange} value={this.state.username} />
            <label>Password</label>
            <input type="password" onChange={this.handlePasswordChange} value={this.state.password} />
            <button type="submit">Log in</button>
        </form>);
    }
}
LoginForm.defaultProps = {
    onSubmit: noop,
    onError: noop
}
export default LoginForm;