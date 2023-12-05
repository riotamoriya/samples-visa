import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>

        
        <h4>LINE登録</h4>
        <p>
          こちらから、ANZZA公式LINEに登録ください。
        </p>
        <p>登録後、実際に制作担当します職人からご連絡があります。(AI・ボットではありません)</p>
      </div>

      <div className={styles.section}>
        <h4>Phone</h4>
        <p>+08 90 6034 6142</p>
        <p>月曜日 から 金曜日 - 9am - 5pm </p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          氏名・電話番号・メールアドレスを入力し、ご連絡をください。<br/>
          
          職人が、入力いただいたアドレスにご返信いたします。<br/>
  
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'氏名'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={'電話番号'}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'メールアドレス'}
              required
            />
            
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'メール内容'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            送信
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
