import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        //let data= Object.assign({}, this.props.posts.data);
        let data = [];
        for (let i in this.props.posts.data) {
            data.push(this.props.posts.data[i]);
        }
        if (this.props.posts === null) {
            return <div>Loading</div>;
        }
        return (
            <div>
                <h2>Posts List</h2>
                <table className="ui inverted grey table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(post => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
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
    return {
        posts: state.posts,
    };
}
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList);