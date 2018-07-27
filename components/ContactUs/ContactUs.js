import React from 'react';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            name: "",
            phoneNumber: "",
            description: ""
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({emailAddress: event.target.value});
    }

    handleName(event) {
        this.setState({name: event.target.value});
    }

    handlePhone(event) {
        this.setState({phoneNumber: event.target.value});
    }

    handleDescription(event) {
        this.setState({description: event.target.value});
    }

    handleSubmit(event) {
        alert('Info submitted: \n   E-mail: ' + this.state.emailAddress + ' \n   Name: ' + this.state.name + ' \n   Phone Number: ' + this.state.phoneNumber + ' \n   Description of the Problem: ' + this.state.description);
    }

    render() {
        return (
            <div className="container my-5 card">
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>E-mail Address</label>
                            <input className="form-control" aria-describedby="emailHelp" placeholder="Enter your e-mail here." value={this.state.emailAddress} onChange={this.handleEmail}/>
                            <small className="form-text text-muted">Please enter your e-mail here.</small>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" aria-describedby="nameHelp" placeholder="Enter your name here." value={this.state.name} onChange={this.handleName}/>
                            <small className="form-text text-muted">Please enter your name here.</small>
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input className="form-control" aria-describedby="phoneHelp" placeholder="Enter your phone number here." value={this.state.phoneNumber} onChange={this.handlePhone}/>
                            <small className="form-text text-muted">Please enter your phone number here.</small>
                        </div>
                        <div className="form-group">
                            <label>Description of Problem</label>
                            <textarea className="form-control" aria-describedby="problemDescription" rows="8" placeholder="Enter the description of your problem here." value={this.state.description} onChange={this.handleDescription}/>
                            <small className="form-text text-muted">Please enter the description of your problem here.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button className="btn btn-secondary">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUs;