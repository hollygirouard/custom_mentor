import React from "react";

export class Root extends React.Component {
    render() {
      console.log("roots", this.props)
        return (
                    <div>
                        {this.props.children}
                    </div>
        );
    }
}
