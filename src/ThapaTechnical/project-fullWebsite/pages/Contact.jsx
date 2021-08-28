import { Form, submitHandler, TextArea } from './Form';

const Contact = () => (
    <>
        <div className="my-5">
            <h1 className="text-center">CONTACT</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={(e) => submitHandler(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Enter Name
                            </label>
                            <Form
                                type="text"
                                placeholder="Enter Name"
                                id="name"
                                nameVal="fullName"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Enter Email
                            </label>
                            <Form
                                type="email"
                                placeholder="Enter Email"
                                id="email"
                                nameVal="email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <Form
                                type="number"
                                placeholder="Enter mobile number"
                                id="phone"
                                nameVal="phone"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="textarea" className="form-label">
                                Message
                            </label>
                            <TextArea id="textarea" rows="3" nameVal="message" />
                        </div>

                        <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
);
export default Contact;
