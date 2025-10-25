import { createContext, useContext, type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import UsernameForm from "./Username.form";
import {
  Controller,
  useForm,
  type ControllerFieldState,
  type ControllerRenderProps,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/store";

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

type FormStepDataContextProps = {
  formstepdata: FormStepItem;
};

const FormStepDataContext = createContext<FormStepDataContextProps | undefined>(
  undefined
);

function useFormStepDataContext() {
  const context = useContext(FormStepDataContext);
  if (!context) {
    throw new Error(
      "useFormStepDataContext must be used within the Form component."
    );
  }
  return context;
}

type FormFieldContext = {
  id: number;
  label: string;
  name: string;
  inputType: string;
  placeholder?: string;
  form: UseFormReturn<any>;
};

const FormFieldContext = createContext<FormFieldContext | undefined>(undefined);

function useFormFieldContext() {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error(
      "useFormFieldContext must be used within the Form component."
    );
  }
  return context;
}
/* ---------------- MAIN FORM  --------------------- */

export default function Form({ formdata, children }: Form) {
  return (
    <FormDataContext.Provider value={{ formdata }}>
      {children}
    </FormDataContext.Provider>
  );
}

/* ---------------- SUBCOMPONENTS ---------------- */
type FormStepProps = PropsWithChildren & {
  id: number;
  formstepdata: FormStepItem;
  className?: string;
};
export function FormStep({ className, children, formstepdata }: FormStepProps) {
  return (
    <FormStepDataContext.Provider value={{ formstepdata }}>
      <div
        className={cn(
          "bg-amber-200 w-[400px] h-[800px] border-2 border-amber-600 rounded-3xl p-6 flex flex-col gap-6",
          className
        )}
      >
        {children}
      </div>
    </FormStepDataContext.Provider>
  );
}
/* ----------------------- FORM HEADER ------------------------- */

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
  const { formstepdata } = useFormStepDataContext();
  return <h1 className={cn("", className)}>{formstepdata.formName}</h1>;
}

export function FormHeaderDescription({ className }: { className?: string }) {
  const { formstepdata } = useFormStepDataContext();
  return <p className={cn("", className)}>{formstepdata.formDescription}</p>;
}

/* ------------------ FORM CONTENT ------------------- */
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

/* ------------------ FORM FIELD ------------------- */
type FormFieldProps = PropsWithChildren & {
  className?: string;
  id: number;
  label: string;
  name: string;
  inputType: string;
  placeholder?: string;
};

export function FormField({
  id,
  label,
  name,
  inputType,
  className,
  children,
  placeholder,
}: FormFieldProps) {
  const form = useForm({
    // resolver: zodResolver(usernameSchema),
    // defaultValues: {
    //   firstName: useFormStore.getState().firstName,
    //   lastName: useFormStore.getState().lastName,
    // },
  });
  function onSubmit() {
    // console.log({ ...data, password, confirmPassword });
    // setData(data);
  }
  return (
    <FormFieldContext.Provider
      value={{ id, name, label, inputType, form, placeholder }}
    >
      <form
        id="username"
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("", className)}
      >
        {children}
      </form>
    </FormFieldContext.Provider>
  );
}

export function FormFieldInput() {
  const { form, name, inputType, placeholder } = useFormFieldContext();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <Input
            {...field}
            id={name}
            type={inputType}
            placeholder={placeholder}
            autoComplete="off"
            aria-invalid={fieldState.invalid}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

export function FormFieldLabel({ className }: { className?: string }) {
  const { label, name } = useFormFieldContext();
  return (
    <FieldLabel htmlFor={name} className={cn("", className)}>
      {label}
    </FieldLabel>
  );
}


export function StepOneButtons(){
  
}