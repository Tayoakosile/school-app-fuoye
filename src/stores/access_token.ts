import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAccessToken = create(
  persist<{
    access_token:{
        date:string,
        token:string
    },
    addAccessToken:any;
}>(
    (set, get) => ({
      access_token: {
        date:"",
        token:'',
      },
      addAccessToken: (access_token:any) => set({access_token}),
    }),
    {
      name: 'token', // name of the item in the storage (must be unique)
    }
  )
)

export default useAccessToken;