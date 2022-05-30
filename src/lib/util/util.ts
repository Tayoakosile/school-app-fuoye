import { ClassStatus, StudentLevelOptionsProp } from "../types/types";

export const StudentLevelOptions: StudentLevelOptionsProp[] = [
  { value: "100", label: "100" },
  { value: "200", label: "200" },
];

export const StudentFalcultyOptions: StudentLevelOptionsProp[] = [
  { value: "Social Sci", label: "Social Science" },
  { value: "Science", label: "Science" },
  { value: "Others", label: "Others" },
];

export const StudentDepartmentOptions: StudentLevelOptionsProp[] = [
  { value: "Political Science", label: "Political Science" },
  { value: "Sociology", label: "Sociology" },
  { value: "Criminology", label: "Criminology" },
  { value: "Economics", label: "Economics" },
  { value: "Mass Communication", label: "Mass Communication" },
  { value: "Others", label: "Others" },
  { value: "Science", label: "Science" },
];

export const imageArrayProps = [
  {
    courseCode: "POL 106",
    status: ClassStatus.Started,
    courseTitle: "Introduction to Political Science",
    time: "Now: 01:00pm, 10th Friday",
    author: "Gabby",
    image: "school-image-2.jpeg",
  },
  {
    courseCode: "POL 106",
    status: ClassStatus.Started,
    courseTitle: "Introduction to Political Science",
    time: "Now: 01:00pm, 10th Friday",
    author: "Gabby",
    image: "school-image.jpeg",
  },
  {
    courseCode: "POL 106",
    status: ClassStatus.Ongoing,
    courseTitle: "Introduction to Political Science",
    time: "Now: 01:00pm, 10th Friday",
    author: "Gabby",
    image: "school-image-3.jpeg",
  },
  {
    courseCode: "POL 106",
    status: ClassStatus.Ongoing,
    courseTitle: "Introduction to Political Science",
    time: "Now: 01:00pm, 10th Friday",
    author: "Gabby",
    image: "school-image.jpeg",
  },
  {
    courseCode: "POL 106",
    status: ClassStatus.Ongoing,
    courseTitle: "Introduction to Political Science",
    time: "Now: 01:00pm, 10th Friday",
    author: "Gabby",
    image: "school-image-2.jpeg",
  },
  {
    courseCode: "POL 106",
    status: ClassStatus.Ongoing,
    courseTitle: "Introduction to Political Science",
    time: "Now: 01:00pm, 10th Friday",
    author: "Gabby",
    image: "school-image.jpeg",
  },
  {
    courseCode: "POL 106",
    status: ClassStatus.Ended,
    courseTitle: "Introduction to Political Science",
    time: "Now: 01:00pm, 10th Friday",
    author: "Gabby",
    image: "school-image-3.jpeg",
  },
  {
    courseCode: "POL 106",
    status: ClassStatus.Ongoing,
    courseTitle: "Introduction to Political Science",
    time: "Now: 01:00pm, 10th Friday",
    author: "Gabby",
    image: "school-image-3.jpeg",
  },
];
export const responsive = {
  0: {
    items: 1,
  },
  750: {
    items: 2,
  },
};

export const fileCategory = [
  { courseFileName: "Pol 102", numberOfFiles: "100" },
  { courseFileName: "Pol 104", numberOfFiles: "200" },
  { courseFileName: "GST 105", numberOfFiles: "300" },
  { courseFileName: "SOC 106", numberOfFiles: "400" },
  { courseFileName: "SOC 107", numberOfFiles: "500" },
  { courseFileName: "SOC 104", numberOfFiles: "600" },
];
