import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class GuardRouter extends Component {
    render() {
        return (
            <div>
                <this.props.component {...this.props}></this.props.component>
            </div>
        )
    }
    componentDidMount() {
    }
}
export default withRouter(GuardRouter);