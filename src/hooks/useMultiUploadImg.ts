import { useCallback, useState } from "react";

type onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;
type onDeleteType = (idx: number) => void;

const useMultiUploadImg = (NumOfPhoto: number) => {
  const [imgBase64, setImgBase64] = useState<string[]>([]);
  const [imgFile, setImgFile] = useState<FileList | null | undefined>();

  const handleChangeFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileArr = event.target.files;

      setImgBase64([]);
      if (fileArr) {
        if (fileArr?.length > NumOfPhoto) {
          alert(`사진은 ${NumOfPhoto}장 까지입니다.`);
          return;
        }
        setImgFile(fileArr);
        for (let i = 0; i < fileArr.length; i++) {
          if (fileArr[i]) {
            const reader = new FileReader();
            reader.readAsDataURL(fileArr[i]);
            reader.onloadend = () => {
              const base64 = reader.result;
              if (base64) {
                const base64Sub = base64.toString();
                setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
              }
            };
          }
        }
      }
    },
    [],
  );

  const onDeleteFile = (idx: number) => {
    const copy = imgBase64.filter((ib, i) => ib[i] !== ib[idx]);
    setImgBase64(copy);
  };

  return [imgBase64, handleChangeFile, onDeleteFile, imgFile] as [
    string[],
    onChangeType,
    onDeleteType,
    FileList,
  ];
};

export default useMultiUploadImg;
