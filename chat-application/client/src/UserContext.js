import React, { Component, createContext } from "react";
export const UserContext = createContext({ user: null });
class UserProvider extends Component {

    state = {
        user: {
            name: '',
            room: '',
            id: ''
        },
        setUser: (inputUser) => {
            this.setState({ user: inputUser })
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default UserProvider;