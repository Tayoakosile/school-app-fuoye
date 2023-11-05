import mongoose from 'mongoose';

interface IFiles {
    faculty_id: number;
    department_id: number;
    course_title: string;
    course_short_name: string;
    course_short_name_slug: string;
    course_code: string;
    level: number;
    semester: string;
    file: string;
    
  }

  const FilesSchema = new mongoose.Schema<IFiles>({
    faculty_id: { type: Number, required: true },
    department_id: { type: Number, required: true },
    course_title: { type: String, required: true },
    course_short_name: { type: String, required: true },
    course_short_name_slug: { type: String, },
    course_code: { type: String, required: true },
    level: { type: Number, required: true },
    file: { type: String, required: true },
    semester: { type: String, required: true },
    
  });

  // @ts-ignore
  const FileUpload = mongoose.models.Files || mongoose.model('Files', FilesSchema);
  


  export default FileUpload 
