import React, { useState, useEffect, useRef } from 'react'
import '../../scss/components/contact.scss'
import { useLocation } from "react-router-dom";
import { global }  from '../../data/global';

interface Props {
    title: string,
}

type formDataType = {
    [key: string]: {
        text: string,
        hasError: boolean
    }
}
/** TODO: Redirect with a success screen */
function Contact(props: Props) {
    const { title } = props;
  const iframeRef = useRef<HTMLIFrameElement>(null);

    const fields = ['name', 'email', 'message', 'challenge'];
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
        message: {
            text: "",
            hasError: false,
        },
        challenge: {
            text: "",
            hasError: false
        },
    });
    // Use the `useLocation` hook to get the current location object
    const location = useLocation();

    // Get the search string (the part of the URL after the `?`)
    const search = location.search;

    // Create a `URLSearchParams` object from the search string
    const searchParams = new URLSearchParams(search);

    // Use the `get` method to get the value of a specific query parameter
    const paramValue = searchParams.get('action');


    /**
     * Builds the form data
     * @param event 
     * @return void
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

    function onBlur(event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>): void {
        const { name } = event.target;
        validateField(name);
    }

    /**
     * Validate each form
     * @param event 
     * @return void
     */
    function validateField(name: string): void {
        if (name === 'name' && !isNameValid(formData.name.text)) {
            setFormErrorMessage('name');
        }
        
        if (name === 'email' && !isEmailValid(formData.email.text)) {
            setFormErrorMessage('email');
        }

        if (name === 'message' && !isMessageValid(formData.message.text)) {
            setFormErrorMessage('message');
        }

        if (name === 'challenge' && !isChallengeValid(formData.challenge.text)) {
            setFormErrorMessage('challenge');
        }
    }

    /**
     * Check if name is valid
     * @param value 
     * @returns boolean
     */
    function isNameValid(value: string): boolean {
        if (value.length < validationCharacters.name) {
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
     * @returns boolean
     */
    function isMessageValid(value: string): boolean {
        if (value.length < validationCharacters.message) {
            return false;
        }

        return true;
    }

    /**
     * Check if challenge is valid
     * TODO: Maybe rotate these around with different questions/answers
     * @param value 
     * @returns boolean
     */
    function isChallengeValid(value: string): boolean {
        if (value !== "4") {
            return false;
        }

        return true;
    }

    /**
     * Checks if whole form is valid
     * @returns boolean
     */
    function isFormValid(): boolean {
        if (!isNameValid(formData.name.text)) {
            return false;
        }
        
        if (!isEmailValid(formData.email.text)) {
            return false;
        }

        if (!isMessageValid(formData.message.text)) {
            return false;
        }

        if (!isChallengeValid(formData.challenge.text)) {
            return false;
        }

        return true;
    }

    function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        if (!isFormValid()) {
            fields.forEach((item) => {
                validateField(item);
            });
            event.preventDefault();
            return;
        }
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

    useEffect(() => {
        const handleIframeMessage = (event: MessageEvent) => {
            if (event.data.iframeHeight && iframeRef.current) {
                iframeRef.current.style.height = `${event.data.iframeHeight}px`;
            }
        };

        window.addEventListener('message', handleIframeMessage);

        return () => {
            window.removeEventListener('message', handleIframeMessage);
        };
    }, []);

    return (

        <section id="contact" className="contact section-container">
            <img className="svg-border contact-top" src="data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='-4.5 3018.5 1448.5 48' width='1448.5' height='48'><path d=' M 0 3023 L 722 3062 L 1439.5 3023.464 L 0 3023 Z ' fill='rgb(255,255,255)' vector-effect='non-scaling-stroke' stroke-width='3' stroke='rgb(255,255,255)' stroke-linejoin='miter' stroke-linecap='square' stroke-miterlimit='3'/></svg>" alt="section divider" />

            <h2 className="featured">{title}</h2>
            <div className="form container wpjs slide-bottom">
                <iframe src={global.Forms.action} ref={iframeRef} style={{ border: 'none', overflow: 'hidden', width: '100%', height: 'auto' }} title="Iframe Example"></iframe>
            </div>
        </section>

    )
}

export default Contact
