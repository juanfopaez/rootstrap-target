import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, InputField, TextAreaField } from 'components/common';

import { contactFields } from 'types/contactTypes';
import { nosmilies, smilies } from 'assets';
import questionService from 'services/questionService';

const Contact = () => {
  const [formSubmitAttempted, setFormSubmitAttempted] =
    useState<boolean>(false);
  const [formSent, setFormSent] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<contactFields>();

  const onSubmitForm: SubmitHandler<contactFields> = async (
    data: contactFields
  ) => {
    try {
      setFormSubmitAttempted(true);
      await questionService.sendQuestion(data);
      setFormSent(true);
    } catch (error) {
      setFormSent(false);
    }
  };

  const isLoading = false;

  return (
    <div className="contactWrapper">
      <img
        src={
          formSubmitAttempted && formSent !== undefined && !formSent
            ? nosmilies
            : smilies
        }
        alt="Target mvd"
      />
      {!formSubmitAttempted ? (
        <>
          <h2>Don’t be shy, drop us a line!</h2>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <InputField
              label="email"
              id="email-contact"
              register={register('email', {
                required: 'Your email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format'
                }
              })}
              error={errors.email ? errors.email.message : ''}
              type="email"
            />
            <TextAreaField
              label="message"
              id="message"
              register={register('body', {
                required: 'Please provide a message'
              })}
              error={errors.body ? errors.body.message : ''}
            />
            <Button type="submit" disabled={isLoading}>
              Send
            </Button>
          </form>
        </>
      ) : (
        <div className="contactWrapper__info">
          {formSent !== undefined && (
            <>
              <h3>{formSent ? 'Thanks for getting in touch!' : 'Opps! '}</h3>
              <p>
                {formSent
                  ? 'We’ll get back to you as soon as we can.'
                  : 'An error has occured while sending your message.'}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Contact;
