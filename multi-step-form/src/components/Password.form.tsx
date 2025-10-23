import { loginSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./ui/field";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFormStore } from "@/store";

const passwordSchema = loginSchema.pick({
  password: true,
  confirmPassword: true,
});

type passwordSchemaType = z.infer<typeof passwordSchema>;
type PasswordFormProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export default function PasswordForm({ step, setStep }: PasswordFormProps) {
  const firstName = useFormStore((state) => state.firstName);
  const lastName = useFormStore((state) => state.lastName);
  const password = useFormStore((state) => state.password);
  const confirmPassword = useFormStore((state) => state.confirmPassword);
  const form = useForm<passwordSchemaType>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: useFormStore.getState().password,
      confirmPassword: useFormStore.getState().confirmPassword,
    },
  });
  const { setData, resetData } = useFormStore();
  function onSubmit(data: passwordSchemaType) {
    console.log({ ...data, firstName, lastName });
    setStep(step + 1);
    setData(data);
  }
  return (
    <div className="border border-amber-500 bg-amber-200 w-[300px] h-[500px] flex flex-col gap-6 rounded-3xl p-4">
      <form id="password-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  {...field}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>

                <FieldDescription>
                  Include steps to reproduce, expected behavior, and what
                  actually happened.
                </FieldDescription>
                <Input
                  {...field}
                  id="confirmPassword"
                  aria-invalid={fieldState.invalid}
                  placeholder="Confirm Password"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={async () => {
                 resetData(); 
                form.reset({
                  password: "",
                  confirmPassword: "",
                });
              }}
            >
              Reset
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
            <Button type="submit" form="password-form">
              Next
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
