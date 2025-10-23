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
import { Checkbox } from "./ui/checkbox";

const agreementSchema = loginSchema.pick({
  username: true,
  terms: true,
});

type passwordSchemaType = z.infer<typeof agreementSchema>;
type PasswordFormProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export default function AgreementForm({ step, setStep }: PasswordFormProps) {
  const firstName = useFormStore((state) => state.firstName);
  const lastName = useFormStore((state) => state.lastName);
  const password = useFormStore((state) => state.password);
  const confirmPassword = useFormStore((state) => state.confirmPassword);
  const form = useForm<passwordSchemaType>({
    resolver: zodResolver(agreementSchema),
    defaultValues: {
      username: useFormStore.getState().username,
      terms: useFormStore.getState().terms,
    },
  });
  const { setData, resetData } = useFormStore();
  function onSubmit(data: passwordSchemaType) {
    console.log({ ...data, firstName, lastName, password, confirmPassword });
    setStep(step + 1);
    setData(data);
  }
  return (
    <div className="border border-amber-500 bg-amber-200 w-[300px] h-[500px] flex flex-col gap-6 rounded-3xl p-4">
      <form id="password-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="username">username</FieldLabel>
                <Input
                  {...field}
                  id="username"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter username"
                  autoComplete="off"
                  value={field.value ?? ""}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="terms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="terms">Terms</FieldLabel>

                <FieldDescription>
                  Check to agree to the terms of the org
                </FieldDescription>
                <Checkbox
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                  id="terms"
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
                  username: "",
                  terms: false,
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
