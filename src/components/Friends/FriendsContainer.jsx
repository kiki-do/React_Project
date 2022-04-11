import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { follow, unfollow,    setUser, setCurrentPage, setTotalCount, toogleIsFetching } from '../../redux/friendsReducer';
import Friends from './Friends';
import Preloader from '../common/Preloader/Preloader';



class FriendsContainer extends React.Component{
    
    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.toogleIsFetching(false);
            this.props.setUser(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
         
        })
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.toogleIsFetching(false);
            this.props.setUser(response.data.items);
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null} 
            <Friends  totalFriendsCount={this.props.totalFriendsCount}
            pageSize={this.props.pageSize} currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged} friends={this.props.friends}
            follow={this.props.follow} unfollow={this.props.unfollow}/>
        </>
        
    }
}

let mapStateToProps = (state) =>{
    return{
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage, 
        totalFriendsCount:state.friendsPage.totalFriendsCount,
        isFetching: state.friendsPage.isFetching,
    }
}


export default connect(mapStateToProps,{follow, unfollow,setUser,setCurrentPage,
    setTotalCount,toogleIsFetching})(FriendsContainer)