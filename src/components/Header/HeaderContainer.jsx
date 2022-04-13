import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setUserData} from './../../redux/auth-reducer'

class HeaderContainer extends React.Component{
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        {withCredentials: true})
        .then(response => {
            debugger
            if(response.data.resultCode === 0){
                let {email, id, login} = response.data.data 
                this.props.setUserData(email, id, login)
            }
        })
    }    

    render(){
        return <Header {...this.props}/>

    }
    
    
}

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth, 
    login : state.auth.login
})

export default connect (mapStateToProps, {setUserData})(HeaderContainer)