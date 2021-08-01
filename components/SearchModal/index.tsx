import Link from "next/link";
import React from "react";
import Modal from "react-modal";
import styles from "./SearchModal.module.css";

type Props = {
  isOpen: boolean;
};

const SearchModal = ({ isOpen }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.searchModalContainer}
      className={styles.searchModal}
    >
      <div className="d-flex justify-content-between align-content-center bg-light px-4 py-3">
        <h2 className="mb-0">DIRECT REQUEST</h2>
        <Link href="/">
          <a>
            <svg
              width="24"
              height="24"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </a>
        </Link>
      </div>
    </Modal>
  );
};

export default SearchModal;
