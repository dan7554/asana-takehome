import React, { Component } from 'react'
import './PhotoViewer.scss'
import { connect } from 'react-redux'
import { closePhotoViewer } from '@ducks/PhotoViewer'

class PhotoViewer extends Component { 
    render() {
        const { imageSrc, visable, closePhotoViewer } = this.props
        if (!visable) {
            return <div />
        }
        return (
            <div className="photo-viewer" onClick={closePhotoViewer}>
                <div className="photo-viewer__underlay" />
                <img className="photo-viewer__photo" src={imageSrc} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.photoViewer })

const mapDispatchToProps = dispatch => ({
    closePhotoViewer: value => dispatch(closePhotoViewer(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoViewer)