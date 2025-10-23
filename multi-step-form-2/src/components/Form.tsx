import React, {
  Children,
  createContext,
  useContext,
  type PropsWithChildren,
} from "react";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import type { formSchemaType } from "@/schemas/form.schema";
//Form Context

type FormContextProps = {
  title?: string;
  description?: string;
  form: UseFormReturn<formSchemaType>;
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

function useFormContext() {
  const context = useContext(FormHeaderContext);
  if (!context)
    throw new Error(
      "The useFormContext Context must be declared within the Form component"
    );
  return context;
}



type FormProps = PropsWithChildren & {
  formTitle?: string;
  formDescription?: string;
};
export default function Form({
  formTitle,
  formDescription,
  children,
}: FormProps) {
  return (
    <div className="bg-amber-200 w-[400px] h-[800px] border-2 border-amber-600 rounded-3xl p-6 flex flex-col gap-6">
      <div className="bg-amber-50 border border-amber-600 rounded-2xl p-3">
        <h1 className="">{formTitle}</h1>
        <p>{formDescription}</p>
      </div>
      {children}
    </div>
  );
}


// //Form Header Context

// type FormHeaderContextProps = {
//   formTitle?: string;
//   formDescription?: string;
// };

// const FormHeaderContext = createContext<FormHeaderContextProps | undefined>(
//   undefined
// );

// function useFormHeaderContext() {
//   const context = useContext(FormHeaderContext);
//   if (!context)
//     throw new Error(
//       "The useFormContext Context must be declared within the Form component"
//     );
//   return context;
// }
// Form.Header = function FormHeader() {
//   const { formTitle, formDescription } = useFormHeaderContext();
//   return (
//     <div className="bg-amber-50 border border-amber-600 rounded-2xl p-3">
//       <h1 className="">{formTitle}</h1>
//       <p>{formDescription}</p>
//     </div>
//   );
// };
