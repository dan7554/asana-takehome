import React, { Component } from 'react'
import './Home.scss'
import { connect } from 'react-redux'
import testPng from '@assets/images/test.png'

class Home extends Component {
    render() {
        return (
            <div className="home">
                You are home
                <img src={testPng} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.page })

export default connect(mapStateToProps, null)(Home)