import React, { useState } from 'react';
import { Modal, Alert } from 'react-bootstrap';

import Button from '../Button';
import ToggleSection from '../ToggleSection';

import * as styles from './FlashMessageModal.module.scss';


const FlashMessageModal = () => {

  const [showMessage, setShowMessage] = useState(true);

  const handleClose = () => setShowMessage(false);

  return (
    <Modal show={showMessage} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header className={styles.header}>
        <Modal.Title>Cookie ポリシー</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div className={styles.sentence}>
          このサイトではCookieを使用しています。
          Cookie の種類に関する詳細を確認し、それぞれのカテゴリのCookie を有効/無効にすることができます。ホームページのフッターにあるリンクから、いつでも設定を調整できます。
        </div>
        <div className={styles.okButtonsContainer}>
          <Button onClick={handleClose} level={'levelGreen'} size={'thin'}>同意</Button>
          <Button onClick={handleClose} level={'levelBlack'} size={'thin'}>同意しない</Button>
        </div>
      </Modal.Body>

      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

export default FlashMessageModal;
