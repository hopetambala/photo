"use client";
import Masonry, { MasonryProps } from "@mui/lab/Masonry";
import { useEffect, useState } from "react";

interface OCMasonryGalleryProps {
  columns?: MasonryProps["columns"];
  defaultHeight?: MasonryProps["defaultHeight"];
  defaultColumns?: MasonryProps["defaultColumns"];
  children: MasonryProps["children"];
}

const DEFAULT_COLUMNS = 2;

const OCMasonryGallery = ({
  columns = DEFAULT_COLUMNS,
  children,
  defaultHeight = 800,
  defaultColumns,
  ...props
}: OCMasonryGalleryProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading</div>;
  }
  return (
    <Masonry
      columns={columns}
      defaultHeight={defaultHeight}
      defaultColumns={defaultColumns}
      defaultSpacing={2}
      spacing={0}
      {...props}
    >
      {children}
    </Masonry>
  );
};

export default OCMasonryGallery;
