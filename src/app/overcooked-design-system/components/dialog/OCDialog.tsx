"use client";
// import Masonry, { MasonryProps } from "@mui/lab/Masonry";
import styles from "./OCDialog.module.css";

interface OCDialogProps {
  open: boolean;
  children: React.ReactNode;
  dialogRef: React.RefObject<HTMLDialogElement | null> | null;
}

const OCDialog = ({ children, dialogRef, ...props }: OCDialogProps) => {
  return (
    <dialog ref={dialogRef} className={styles["oc-dialog"]} {...props}>
      {children}
    </dialog>
  );
};

export default OCDialog;
