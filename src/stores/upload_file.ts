import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useHandleUploadImage = create(
  persist<{
    file:any,
    addFile:any;
}>(
    (set) => ({
      file:null,
      addFile: (file:any) => set({file}),
    }),
    {
      name: 'files', 
    }
  )
)

export default useHandleUploadImage;