import React, {Component} from 'react';
import FormInput from '../Form-input'
import CustomButton from '../Custom-button'
import './sign-in.style.scss';

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onhandleSubmit = this.onhandleSubmit.bind(this)
    };

    onhandleSubmit(event){
        event.preventDefault();
        this.setState(
            {
                email :' ',
                password: ''
            }
        )
    }

    handleChange(event){
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with email and password</span>
                <form>
                    <FormInput 
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        label='email'
                        value={this.state.email}
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        label='password'
                        value={this.state.password}
                        required
                    />
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        );
    };
};

export default SignIn