import { useCallback, useState } from "react";

type onChangeType = (e: React.ChangeEvent<HTMLInputElement>) => void;

const useMultiUploadImg = (NumOfPhoto: number) => {
  const [imgBase64, setImgBase64] = useState<string[]>([]);
  const imagestate = useState<FileList | null | undefined>();
  const setImgFile = imagestate[1];

  const handleChangeFile = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileArr = event.target.files;

      setImgFile(fileArr);
      setImgBase64([]);
      if (fileArr) {
        if (fileArr?.length > NumOfPhoto) {
          alert(`사진은 ${NumOfPhoto}장 까지입니다.`);
          return;
        }
        for (let i = 0; i < fileArr.length; i++) {
          if (fileArr[i]) {
            const reader = new FileReader();
            reader.readAsDataURL(fileArr[i]);
            reader.onloadend = () => {
              const base64 = reader.result;
              if (base64) {
                const base64Sub = base64.toString();
                //console.log(base64Sub);
                setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
              }
            };
          }
        }
      }
    },
    [],
  );

  return [imgBase64, handleChangeFile] as [string[], onChangeType];
};

export default useMultiUploadImg;
