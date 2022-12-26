import React, { useState } from 'react'
import '../../scss/components/contact.scss'


interface Props {
    title: string,
}

type formDataType = {
    [key: string]: {
        text: string,
        hasError: boolean
    }
}
function Contact(props: Props) {
    const { title } = props;
    const validationCharacters = {
        name: 3,
        message: 30
    }
    const [ formData, setFormData ] = useState<formDataType>({
        name: {
            text: "",
            hasError: false,
        },
        email: {
            text: "",
            hasError: false,
        },
        description: {
            text: "",
            hasError: false,
        },
        challenge: {
            text: "",
            hasError: false
        },
    });

    /**
     * Builds the form data
     * @param event 
     */
    function buildFormData(event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>): void {
        setFormData((prevSetFormData) => {
            return {
                ...prevSetFormData,
                [event.target.name]: {
                    ...formData[event.target.name],
                    text: event.target.value,
                    hasError: false,
                }
            }
        });
    }

    /**
     * Validate each form
     * @param event 
     * @return void
     */
    function validateField(event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>): void {
        const { name } = event.target;
        if (name === 'name' && !isNameValid(formData.name.text)) {
            setFormErrorMessage('name');
        }
        
        if (name === 'email' && !isEmailValid(formData.email.text)) {
            setFormErrorMessage('email');
        }

        if (name === 'description' && !isMessageValid(formData.description.text)) {
            setFormErrorMessage('description');
        }

        if (name === 'challenge' && !isChallengeValid(formData.challenge.text)) {
            setFormErrorMessage('challenge');
        }
    }

    /**
     * Check if name is valid
     * @param value 
     * @returns 
     */
    function isNameValid(value: string): boolean {
        if (formData.name.text.length < validationCharacters.name) {
            return false;
        }
        
        return true;
    }

    /**
     * Check if email value is the correct format
     * @param value 
     * @returns 
     */
    function isEmailValid(value: string): boolean {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        return emailRegex.test(value);
    }

    /**
     * Check if message field is valid
     * @param value 
     * @returns 
     */
    function isMessageValid(value: string): boolean {
        if (formData.description.text.length < validationCharacters.message) {
            return false;
        }

        return true;
    }

    /**
     * Check if challenge is valid
     * TODO: Maybe rotate these around with different questions/answers
     * @param value 
     * @returns 
     */
    function isChallengeValid(value: string): boolean {
        if (formData.challenge.text !== "4") {
            return false;
        }

        return true;
    }

    /**
     * Checks if whole form is valid
     * TODO. Why not just loop?
     * @returns boolean
     */
    function isFormValid(): boolean {
        if (!isNameValid(formData.name.text)) {
            return false;
        }
        
        if (!isEmailValid(formData.email.text)) {
            return false;
        }

        if (!isMessageValid(formData.description.text)) {
            return false;
        }

        if (!isChallengeValid(formData.challenge.text)) {
            return false;
        }

        return true;
    }

    function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!isFormValid()) {
            return;
        }

        // TODO: Axios post
        console.log('send to back end');
    }

    /**
     * Set Form Error Messages
     * @param objectName 
     */
    function setFormErrorMessage(objectName: string): void {
        setFormData((prevSetFormData) => {
            return {
                ...prevSetFormData,
                [objectName]: {
                    ...formData[objectName],
                    hasError: true,
                }
            }
        });
    }

    return (

        <section className="contact section-container">
            <img className="svg-border contact-top" src="data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='-4.5 3018.5 1448.5 48' width='1448.5' height='48'><path d=' M 0 3023 L 722 3062 L 1439.5 3023.464 L 0 3023 Z ' fill='rgb(255,255,255)' vector-effect='non-scaling-stroke' stroke-width='3' stroke='rgb(255,255,255)' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/></svg>" />

            <h2 className="featured">{title}</h2>

            <div className="form container wpjs slide-bottom">
                <form onSubmit={handleSubmit} id="contact">
                    <div className="row">
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="Name"
                            className={formData.name.hasError ? 'error' : ''}
                            onBlur={validateField}
                            onChange={(event) => buildFormData(event)} 
                            value={formData.name.text} 
                        />
                        {formData.name.hasError && <span className="error">Your name is invalid. It needs to be at least {validationCharacters.name} characters long.</span> }
                    </div>
                    <div className="row">
                        <input 
                            id="email" 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            className={formData.email.hasError ? 'error' : ''}
                            onBlur={validateField}
                            onChange={(event) => buildFormData(event)} 
                            value={formData.email.text} 
                        />
                        {formData.email.hasError && <span className="error">Your email is invalid.</span> }
                    </div>
                    <div className="row">
                        <textarea 
                            name="description" 
                            id="message" 
                            cols={30} 
                            rows={10} 
                            placeholder="Your Message"
                            className={formData.description.hasError ? 'error' : ''}
                            onBlur={validateField}
                            onChange={(event) => buildFormData(event)} 
                            value={formData.description.text}></textarea>
                        {formData.description.hasError && <span className="error">Your description is invalid. It needs to be at least {validationCharacters.message} characters</span> }
                    </div>
                    <div className="row">
                        <input 
                            id="challenge" 
                            name="challenge" 
                            type="text" 
                            placeholder="What is 1+3?"
                            className={formData.challenge.hasError ? 'error' : ''}
                            onBlur={validateField}
                            onChange={(event) => buildFormData(event)} 
                            value={formData.challenge.text} 
                        />
                        {formData.challenge.hasError && <span className="error">Your challenge is invalid.</span> }
                    </div>
                    
                    <div className="row">
                        <input type="submit" id="submit" className="btn secondary" value="Submit" />
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Contact