import useACAPI from "api/useACAPI";
import schoolFacultiesAndDepartment from "../config/faculties_and_department.json";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

const useSearchFiles = () => {
  const { AC_BASE_URL } = useACAPI();
  const queryClient =useQueryClient()
  const [allFiles, setAllFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading: isGettingFiles } = useQuery(
    ["files"],
    async () => {
      const { data } = await AC_BASE_URL.get(`/files`);
      return data;
    },
    {
      onSuccess(data) {
        const files = data?.data?.map((file: any) => {
          const department = schoolFacultiesAndDepartment.departments?.find(
            (department) => department.id === Number(file.department_id)
          );

          const faculty = schoolFacultiesAndDepartment.faculties?.find(
            (faculty) => faculty.id === Number(file.faculty_id)
          );

          return {
            ...file,
            faculty: faculty?.name,
            department: department?.name,
          };
        });

        setAllFiles(files);
      },
    }
  );

  useEffect(() => {
    queryClient.invalidateQueries('files')
  }, []);

  return { setSearchTerm, searchTerm, allFiles, isGettingFiles };
};

export default useSearchFiles;
