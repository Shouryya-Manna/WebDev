import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { cn } from "@/lib/utils";
import UsernameForm from "./Username.form";
import PasswordForm from "./Password.form";
import AgreementForm from "./Agreement.form";

/* ---------------- TYPES ---------------- */

export type FormField = {
  id: number;
  label: string;
  name: string;
  inputType: string;
};

export type FormFields = {
  fields: FormField[];
};

export type FormStepItem = {
  id: number;
  formName: string;
  formDescription: string;
  form: FormFields;
};

export type Form = PropsWithChildren & {
  className?: string;
  formdata: FormStepItem[];
};

/* ---------------- CONTEXT ---------------- */

type FormDataContextProps = {
  formdata: FormStepItem[];
};

const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

function useFormDataContext() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error(
      "useFormDataContext must be used within the Form component."
    );
  }
  return context;
}

/* ---------------- MAIN FORM ROOT ---------------- */

export default function Form({ formdata, children, className }: Form) {
  const [step, setStep] = useState(1);

  return (
    <FormDataContext.Provider value={{ formdata }}>
      <div
        className={cn(
          "bg-amber-200 w-[400px] h-[800px] border-2 border-amber-600 rounded-3xl p-6 flex flex-col gap-6",
          className
        )}
      >
        {children}

        <div>
          {step === 1 && <UsernameForm step={step} setStep={setStep} />}
          {step === 2 && <PasswordForm step={step} setStep={setStep} />}
          {step === 3 && <AgreementForm step={step} setStep={setStep} />}
        </div>
      </div>
    </FormDataContext.Provider>
  );
}

/* ---------------- SUBCOMPONENTS ---------------- */

export function FormStep(){
  
}
/* ----------------- FORM HEADER ----------------- */

type FormHeaderProps = PropsWithChildren & {
  className?: string;
};

export function FormHeader({ className, children }: FormHeaderProps) {
  return (
    <div
      className={cn(
        "bg-amber-50 border border-amber-600 rounded-2xl p-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function FormHeaderTitle({ className }: { className?: string }) {
  const { formdata } = useFormDataContext();
  return <h1 className={cn("", className)}>{formdata[0].formName}</h1>;
}

export function FormHeaderDescription({ className }: { className?: string }) {
  const { formdata } = useFormDataContext();
  return <p className={cn("", className)}>{formdata[0].formDescription}</p>;
}

/* ----------------- FORM CONTENT ----------------- */
type FormContentProps = PropsWithChildren & {
  className?: string;
};
export function FormContent({ className, children }: FormContentProps) {
  return (
    <div
      className={cn(
        "border border-amber-500 bg-amber-200 w-[300px] h-[500px] flex flex-col gap-6 rounded-3xl p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
