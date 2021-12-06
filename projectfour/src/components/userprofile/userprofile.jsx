import React, { Component } from 'react'
import './userprofile.css'
import Weather from './weather';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uiavatars: '',
            avatarURL: '',
            loggedUser: ''
        };
    }
    componentDidMount() {
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
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

        this.setState({
            uiavatars: uiavatars,
            avatarURL: avatarURL,
            loggedUser: loggedUser
        })
    }

    renderTableData = () => {
        // return this.state.students.map((student, index) => {
        //     const { id, name, age, email } = student //destructuring
        //     return (
        //         <tr key={id}>
        //             <td>{id}</td>
        //             <td>{name}</td>
        //             <td>{age}</td>
        //             <td>{email}</td>
        //         </tr>
        //     )
        // })
    }

    renderTableHeader = () => {
        // let header = Object.keys(this.state.students[0])
        // return header.map((key, index) => {
        //     return <th key={index}>{key.toUpperCase()}</th>
        // })
    }
    render() {
        return (
            <div className="all-profile">
                <div className="profile-container">
                    <h2>Profile</h2>
                    <img src={this.state.avatarURL} alt="user avatar" />
                    <form className="user-info">
                        <div className="left-grid">
                            <label> First name
                                <input type="text" name="" id="" value={this.state.loggedUser.fname} readOnly />
                            </label>
                            <label> Last name
                                <input type="text" name="" id="" value={this.state.loggedUser.lname} readOnly />
                            </label>
                            <label> Email
                                <input type="text" name="" id="" value={this.state.loggedUser.email} readOnly />
                            </label>
                        </div>

                        <div className="right-grid">
                            <label> City
                                <input type="text" name="" id="" value="" readOnly />
                            </label>
                            <label> Address
                                <input type="text" name="" id="" value="" readOnly />
                            </label>
                            <label> Phone number
                                <input type="text" name="" id="" value="" readOnly />
                            </label>
                        </div>
                    </form>
                </div>

                <div className="orders-wrapper">
                    <table id='orders'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>


                <Weather />
            </div>
        )
    }

}

// export function UserProfile(props) {
//     // user profile
//     const uiavatars = require("ui-avatars");
//     const avatarURL = uiavatars.generateAvatar({
//         uppercase: true,
//         name: `${JSON.parse(localStorage.getItem('loggedUser')).fname} ${JSON.parse(localStorage.getItem('loggedUser')).lname}`,
//         background: "64b5f6",
//         fontsize: 0.5,
//         bold: true,
//         length: 2,
//         rounded: true
//     });
//     const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

//     return (
//         <div className="all-profile">
//             <div className="profile-container">
//                 <h2>Profile</h2>
//                 <img src={avatarURL} alt="user avatar" />
//                 <form className="user-info">
//                     <div className="left-grid">
//                         <label> First name
//                             <input type="text" name="" id="" value={loggedUser.fname} readOnly />
//                         </label>
//                         <label> Last name
//                             <input type="text" name="" id="" value={loggedUser.lname} readOnly />
//                         </label>
//                         <label> Email
//                             <input type="text" name="" id="" value={loggedUser.email} readOnly />
//                         </label>
//                     </div>

//                     <div className="right-grid">
//                         <label> City
//                             <input type="text" name="" id="" value="" readOnly />
//                         </label>
//                         <label> Address
//                             <input type="text" name="" id="" value="" readOnly />
//                         </label>
//                         <label> Phone number
//                             <input type="text" name="" id="" value="" readOnly />
//                         </label>
//                     </div>
//                 </form>
//             </div>

//             <div className="orders-wrapper">
//                 <table id='students'>
//                     <tbody>
//                         {renderTableData()}
//                     </tbody>
//                 </table>
//             </div>
//             <Weather />
//         </div>
//     )
// }


export default UserProfile
