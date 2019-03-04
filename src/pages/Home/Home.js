import React, { Component } from 'react'
import './Home.scss'
import { connect } from 'react-redux'
import dogData from '@assets/data/dogs'
import { Thumbnail, ThumbnailContainer, PhotoViewer } from '@components'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <ThumbnailContainer>
                    {dogData.dogs.map((dog, i) => <Thumbnail key={`thumbnail-${i}`} src={dog.image} />)}
                </ThumbnailContainer>
                <PhotoViewer />
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.page })

export default connect(mapStateToProps, null)(Home)