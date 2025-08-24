'use client';
import { useEffect } from 'react';
import Modal from 'react-modal';

export default function ModalSetup() {
  useEffect(() => {
    Modal.setAppElement('#__next'); // Important for accessibility
  }, []);

  return null; // This renders nothing on screen
}