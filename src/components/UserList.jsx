import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../actions";

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        let usersData = [];
        for (let i in this.props.users.data) {
            usersData.push(this.props.users.data[i]);
        }
        if (this.props.users === null) {
            return <div>Loading</div>;
        }
        return (
            <div>
                <br/>
                <h2 className="ui header">Users List</h2>
                <table className="ui inverted grey table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {usersData.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>

                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {users: state.users};

}
export default connect(mapStateToProps, {fetchUsers: fetchUsers})(UserList);