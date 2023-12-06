import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button';
import * as styles from './FlashMessageModal.module.scss';

const cookie_key = 'cookie-consent';

const FlashMessageModal = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // localStorage.setItem(cookie_key, '');
    const consentValue = localStorage.getItem(cookie_key);
    console.log(`Your Cookie consent value: ${consentValue} => ${consentValue==='true'?'Any':'Not all'} contents are displayed on this site.`);

    if (consentValue === 'true' || consentValue === 'false') {
      setShowMessage(false);
    }
  }, []);

  const handleAllow = () => {
    localStorage.setItem(cookie_key, 'true');
    setShowMessage(false);
  };

  const handleRefuse = () => { 
    localStorage.setItem(cookie_key, 'false');
    setShowMessage(false);
  };

  return (
    <Modal show={showMessage} backdrop="static" keyboard={false}>
      <Modal.Header className={styles.header}>
        <Modal.Title>Cookie ポリシー</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div className={styles.sentence}>
          このサイトではCookieを使用しています。
          Cookie の種類に関する詳細を確認し、それぞれのカテゴリのCookie を有効/無効にすることができます。ホームページのフッターにあるリンクから、いつでも設定を調整できます。
        </div>
        <div className={styles.okButtonsContainer}>
          <Button onClick={handleAllow} level={'levelGreen'} size={'thin'}>同意</Button>
          <Button onClick={handleRefuse} level={'levelBlack'} size={'thin'}>同意しない</Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default FlashMessageModal;
