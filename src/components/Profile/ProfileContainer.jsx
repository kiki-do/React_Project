import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profilePageReducer";
import * as axios from "axios";


class ProfileContainer extends React.Component{
    componentDidMount() { 

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response =>{
            this.props.getProfile(response.data);
         
        })
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>)
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilesPage.profile
})


export default connect (mapStateToProps, {getProfile})(ProfileContainer);