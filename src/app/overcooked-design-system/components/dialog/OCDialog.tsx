"use client";
import { Ref } from "react";
import styles from "./OCDialog.module.css";

interface OCDialogProps {
  children: React.ReactNode;
  dialogRef: Ref<HTMLDialogElement>;
  classnames?: string;
}

const OCDialog = ({
  children,
  dialogRef,
  classnames,
  ...props
}: OCDialogProps) => {
  const classNames = [styles["oc-dialog"], classnames].join(" ");

  return (
    <dialog ref={dialogRef} className={classNames} {...props}>
      {children}
    </dialog>
  );
};

export default OCDialog;
