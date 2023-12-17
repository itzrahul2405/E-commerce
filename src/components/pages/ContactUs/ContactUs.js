import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { json } from 'react-router-dom';

const ContactUs = () => {
    

    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const phoneRef = useRef(null);

    const contactInfoHandler = async (event) => {
        try{
            event.preventDefault()
            const obj = {
                name: nameRef.current.value,
                mail: mailRef.current.value,
                phone: phoneRef.current.value
            };
            console.log(obj)

            const resp = await fetch('https://e-commerce-544d1-default-rtdb.firebaseio.com/contact-info.json', {
                method: 'POST',
                body: JSON.stringify(obj),
                header: {
                    'Content-Type': 'application/json'
                }
            })

            if(resp.ok){
                console.log('data successfully sent!')
            }
            else{
                throw new Error ('something went wrong!')
            }

            const data = await resp.json();
            console.log(data)

        }
        catch(error){
            console.log(error.message)
        }

        nameRef.current.value = ''
        mailRef.current.value = ''
        phoneRef.current.value = ''
    };

    return (
        <form className="contactform m-5 border border-2 border-warning p-3" onSubmit={contactInfoHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name: </label>
                <input type="text" className="form-control" id="name" ref={nameRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="mail" className="form-label">Email: </label>
                <input type="email" className="form-control" id="mail" ref={mailRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">PhoneNo: </label>
                <input type="text" className="form-control" id="phone" ref={phoneRef} />
            </div>
            <button type="submit" className="btn btn-primary">SUBMIT</button>
        </form>
    );
};

export default ContactUs;
