import mongoose from 'mongoose';

interface ISignUp {
    first_name: string;
    last_name: string;
    department_id: number;
    faculty_id: number;
    email: string;
    level: number;
    phone:number
    
  }

  const SignUPSchema = new mongoose.Schema<ISignUp>({
    faculty_id: { type: Number, required: true },
    department_id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    level: { type: Number, required: true },
    phone: { type: Number, required: true },
    
    
    
  }, { timestamps: true });

  
  const SignupModel = mongoose.models.SignUP || mongoose.model('SignUP', SignUPSchema);
  


  export default SignupModel 
