import { loginSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFormStore } from "@/store";

const usernameSchema = loginSchema.pick({
  firstName: true,
  lastName: true,
});

type usernameSchemaType = z.infer<typeof usernameSchema>;
type UsernameFormProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export default function UsernameForm({ step, setStep }: UsernameFormProps) {
  const firstName = useFormStore((state) => state.firstName);
  const lastName = useFormStore((state) => state.lastName);
  const password = useFormStore((state) => state.password);
  const confirmPassword = useFormStore((state) => state.confirmPassword);
  const form = useForm<usernameSchemaType>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      firstName: useFormStore.getState().firstName,
      lastName: useFormStore.getState().lastName,
    },
  });
  const { setData, resetData } = useFormStore();
  function onSubmit(data: usernameSchemaType) {
    console.log({ ...data, password, confirmPassword });
    setStep(step + 1);
    setData(data);
  }
  return (
    <form id="username" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="firstName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="first-name">First name</FieldLabel>
              <Input
                {...field}
                id="first-name"
                aria-invalid={fieldState.invalid}
                placeholder="Enter first name"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="lastName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="last-name">Last name</FieldLabel>
              <Input
                {...field}
                id="last-name"
                aria-invalid={fieldState.invalid}
                placeholder="Login button not working on mobile"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
                firstName: "",
                lastName: "",
              });
            }}
          >
            Reset
          </Button>
          {/* <Button
              type="button"
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button> */}
          <Button type="submit" form="username">
            Next
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
