import React, { Component } from 'react'
import $ from "jquery"
import './Root.scss'
import { connect } from 'react-redux'
import { updateWidth } from '@ducks/Page'
import { Router, Switch, Route } from 'react-router'
import { Home } from '@pages'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'

class Root extends Component {
    updatePageWidth = () => {
        const { updateWidth, forcedWidth, width } = this.props
        const newWidth = forcedWidth > 0 ? forcedWidth : $(window).width()

        if (width !== newWidth) {
            updateWidth(newWidth)
        }
    }
    componentWillMount() {
        window.addEventListener('resize', this.updatePageWidth)
        this.updatePageWidth()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePageWidth)
    }
    render() {
        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className="menu-button" color="inherit" aria-label="Menu">
                            <div className="material-icons"> menu </div>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className="grow">
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Router history={this.props.history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.page })

const mapDispatchToProps = dispatch => (
    {
        updateWidth: pixels => dispatch(updateWidth(pixels))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Root)