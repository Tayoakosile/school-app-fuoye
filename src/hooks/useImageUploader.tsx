import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import useFileUpload from 'react-use-file-upload';
import randomatic from 'randomatic';
import useHandleUploadImage from 'stores/upload_file';
const useImageUploader = () => {
 const {addFile,file} =  useHandleUploadImage()
  const {
    files,
    fileTypes,
    clearAllFiles,
    setFiles,
    createFormData
  } = useFileUpload()
  // console.log(file,'filessss')


  const [avatarSrc, setAvatarSrc] = useState<any>('')
  const [fileType,setFileType] = useState("")


  const { mutateAsync: handleuploadImage, isLoading: isSubmittingForm } = useMutation(
    async () => {
      
      
      const storageRef = ref(storage, `images/${randomatic('0',12)}.${file?.type.split("/")[1]}`);
      const uploadedByte = await uploadBytes(storageRef, file)

      const downloadURL = await getDownloadURL(uploadedByte.ref)

      return downloadURL;


    }, {

    

  }
  );


  
  useEffect(() => {
    const fr = new FileReader();

    if (files.length <= 0) return;
    const readBlobs = URL.createObjectURL(files[0])
    
    
    localStorage.setItem('files',JSON.stringify(files[0]))
    addFile(files[0])
    setAvatarSrc(readBlobs)



   
  }, [files])


  return { setFiles, clearAllFiles, avatarSrc, handleuploadImage,files }
}

export default useImageUploader