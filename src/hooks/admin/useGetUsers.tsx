import useACAPI from "api/useACAPI";
import React, { useState } from "react";
import { useQuery } from "react-query";
import schoolFacultiesAndDepartmentsList from "../../config/faculties_and_department.json";
import dayjs from "dayjs";

const useGetUsers = () => {
  const [all_acUsers, setAllACUsers] = useState([]);
  const { AC_BASE_URL } = useACAPI();
  const { isLoading: isFetchingUsers, data: allUsers } = useQuery(
    [""],
    async () => {
      const { data } = await AC_BASE_URL.get("/admin/users");

      return data;
    },
    {
      onSuccess(data) {
        const users = data?.data

        
        const updatedUsers = users?.map((user:any)=>{
            return {...user,
                faculty:schoolFacultiesAndDepartmentsList.faculties.find((faculty)=>faculty.id ===user.faculty_id),
                department:schoolFacultiesAndDepartmentsList.departments.find((department)=>department.id ===user.department_id),
                date_joined:dayjs(user?.createAt ?? user?.updatedAt).format('DD,MM,YYYY')
            }
        })

        setAllACUsers(updatedUsers)

      },
    }
  );
  return { isFetchingUsers, allUsers,all_acUsers };
};

export default useGetUsers;
