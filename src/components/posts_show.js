/**
 * Created by mostafazahran on 10/7/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {FetchPost, DeletePost} from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        if(!this.props.post) {
            this.props.FetchPost(this.props.match.params.id);
        }
    }

    onDeleteClick = () => {
        this.props.DeletePost(this.props.match.params.id, () => this.props.history.push('/'));
    };

    render() {
        const {post} = this.props;
        if(!post){
            return(<div>Loading...</div>);
        }
        return (
            <div>
                <Link to="/"> Back to index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}
function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {FetchPost, DeletePost})(PostsShow);