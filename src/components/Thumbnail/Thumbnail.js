import React, { Component } from 'react'
import $ from "jquery"
import './Thumbnail.scss'
import { connect } from 'react-redux'
import getHash from '@utility/getHash'

class Thumbnail extends Component {

    constructor(props) {
        super(props)
        this.id = `thumbnail-container-${getHash(props.src)}`
    }

    loadPhoto = () => {
        const imageElement = new Image()

        // Set the source
        imageElement.src = this.props.src

        imageElement.onload = () => {
            let previewArea = window.currentDocument.querySelector(`#${this.id}`)

            console.log('onload', this.props.src, `#${this.id}`, previewArea)

            if (previewArea) {
                // Show the image
                imageElement.className = 'thumbnail__image'
                const previewAreaChildren = previewArea.childNodes
                if (previewAreaChildren.length === 0) {
                    // Add the image
                    previewArea.appendChild(imageElement)
                }

            }
        }
    }

    componentDidMount() {
        this.loadPhoto()
    }

    viewImage = img => {
        // this.props.viewImage(img)
    }

    render() {
        const { breakpoint } = this.props

        return (
            <div className={`thumbnail`} onClick={this.viewImage}>
                <div className="thumbnail__container" id={this.id} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.page })

const mapDispatchToProps = dispatch => ({
    viewImage: value => dispatch(viewImage(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail)