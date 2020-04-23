import React, { Component } from "react";

class Attandence extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="ui form">
                        <div className="inline fields">
                            <label htmlFor="attanded">
                                Are You Attanding This Event ?
                            </label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="attaded"
                                        checked=""
                                        tabIndex="0"
                                        className="hidden"
                                    />
                                    <label>Attanded</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="attanded"
                                        tabIndex="0"
                                        className="hidden"
                                    />
                                    <label>Maybe</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name="attanded"
                                        tabIndex="0"
                                        className="hidden"
                                    />
                                    <label>Not Attanded</label>
                                </div>
                            </div>
                        </div>
                        <div className="ui form">
                            <div className="field">
                                <label>Text</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <hr />
                        <div className="ui buttons">
                            <button className="ui positive button">Save</button>
                            <div className="or"></div>
                            <button className="ui button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Attandence;
