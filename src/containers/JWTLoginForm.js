import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import LoginForm from '../ui/LoginForm';


class JWTLoginForm extends React.Component {
    
    onSubmit = (Email, Password) => {
        const { mutate } = this.props;
        mutate({
          variables: {
            Email,
            Password
          },
          refetchQueries: [
              `readDogs`
          ]
        })
        .then(response => {
            localStorage.setItem('jwt', response.data.createToken.Token);
        })
    }
    render () {
        return <LoginForm onSubmit={this.onSubmit} />
    }
}
const tokenMutation = gql`
mutation createToken($Email: String!, $Password: String!) {
    createToken(Email: $Email, Password: $Password) {
      ID,
      FirstName,
      Token
    },
}`;
export default graphql(tokenMutation)(JWTLoginForm);