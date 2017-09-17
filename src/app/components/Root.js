import React from "react";

import {Header} from "./Header";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-2">
                        <Header />
                    </div>
                    <div className="col-xs-10 ">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
