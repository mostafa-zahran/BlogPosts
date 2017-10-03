/**
 * Created by mostafazahran on 9/14/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPosts } from '../actions/index';
import _ from 'lodash';
export class PostsIndex extends Component {

    componentDidMount () {
        this.props.FetchPosts();
    }

    renderPosts () {
        return _.map(this.props.posts, post => {
            return (<li className="list-group-item" key={post.id}>
                {post.title}
            </li>)
        })
    }

    render () {
        return(
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}
export default connect(mapStateToProps, { FetchPosts }) (PostsIndex);