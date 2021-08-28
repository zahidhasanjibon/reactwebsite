import React from 'react';

export default class Form extends React.Component {
    state = { title: 'jibon', inpVal: 'Javascript i Awesome', library: 'react', isCheck: false };

    eventHandler = (e) => {
        if (e.target.type === 'text') {
            this.setState({ title: e.target.value });
        } else if (e.target.type === 'textarea') {
            this.setState({ inpVal: e.target.value });
        } else if (e.target.type === 'select-one') {
            this.setState({ library: e.target.value });
        } else if (e.target.type === 'checkbox') {
            this.setState({ isCheck: e.target.checked });
        } else console.log('nothing here');
    };

    submitHandler = (e) => {
        const { title, inpVal, library, isCheck } = this.state;
        e.preventDefault();
        console.log(title, inpVal, library, isCheck);
    };

    render() {
        const { title, inpVal, library, isCheck } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Name : &nbsp;
                        <input
                            onChange={this.eventHandler}
                            type="text"
                            placeholder="Enter Title"
                            value={title}
                        />
                        <br />
                        <br />
                    </label>

                    <textarea onChange={this.eventHandler} name="text" value={inpVal} />
                    <br />
                    <br />
                    <select onChange={this.eventHandler} value={library}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                    <br />
                    <br />
                    <label>
                        agree
                        <input onChange={this.eventHandler} type="checkbox" checked={isCheck} />
                        <br />
                        <br />
                    </label>

                    <input type="submit" />
                </form>
            </div>
        );
    }
}
