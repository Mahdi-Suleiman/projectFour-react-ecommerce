import React, { Component } from 'react'

export function UserProfile (props) {
// user profile
            const uiavatars = require("ui-avatars");
            const avatarURL = uiavatars.generateAvatar({
              uppercase: true,
              name: `${JSON.parse(localStorage.getItem('loggedUser')).fname} ${JSON.parse(localStorage.getItem('loggedUser')).lname}`,
              background: "64b5f6",
              fontsize: 0.5,
              bold: true,
              length: 2,
              rounded: true
            });
          
        // this.state = {
        //     name : '',
        //     name2 : '',
        //     email: '',
        // }

    // inputTracker = (e) => {
    //     const {name,value} = e.target;   
    //     this.setState({[name]:value})
    // }

        return (
            <div>
                {/* <form>
                    <label /> {this.props.loggedUser.fname}
                    <input type="text" name="name" value={this.state.name} onChange={this.inputTracker} placeholder={this.props.loggedUser.fname} />
                    <input type="text" name="name2" value={this.state.name2} onChange={this.inputTracker} placeholder={this.props.loggedUser.lname}/>fasfsaf
                    <label /> {this.props.loggedUser.email}
                    <input type="text" name="email" value={this.state.email} onChange={this.inputTracker} placeholder={this.props.loggedUser.email}/>safasfa
                    <button onClick={(e) => this.props.editUserData(e)}>TEST</button>
                </form> */}
                <form>
                    <label /> {JSON.parse(localStorage.getItem('loggedUser')).fname} 
                    <label /> {JSON.parse(localStorage.getItem('loggedUser')).lname}
                    <img src={avatarURL} alt="user avatar"/>
                    {/* <button onClick={(e) => this.props.editUserData(e)}>TEST</button> */}
                </form>
            </div>
        )
}

export default UserProfile
