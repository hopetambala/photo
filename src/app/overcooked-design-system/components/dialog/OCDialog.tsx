"use client";
import { Ref } from "react";
import styles from "./OCDialog.module.css";

interface OCDialogProps {
  isOpen: boolean;
  children: React.ReactNode;
  dialogRef?: Ref<HTMLDialogElement>;
}

const OCDialog = ({ children, dialogRef, isOpen, ...props }: OCDialogProps) => {

  return (
    <>
      {isOpen && (
        <dialog open ref={dialogRef} className={styles["oc-dialog"]} {...props}>
          {children}
          <button>Close</button>
        </dialog>
      )}
    </>
  );
};

export default OCDialog;
