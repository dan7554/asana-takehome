import React, { Component } from 'react'
import './ThumbnailContainer.scss'
import { connect } from 'react-redux'

class ThumbnailContainer extends Component {

    render() {
        return (
            <div className="thumbnail-container">
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.page })

export default connect(mapStateToProps, null)(ThumbnailContainer)