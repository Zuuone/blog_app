import { CardDescription, CardTitle } from "@/components/ui/card";
import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
// import { FillProfileInfoPayload } from "@/supabase/account/index.types";
import { register, SignUpPayload } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t, i18n } = useTranslation(); // Add i18n for language change detection

  // console.log(t("signUp-name"));

  const {
    register: hookForRegister,
    handleSubmit,
    formState,
  } = useForm<SignUpPayload>();

  const [registerPayload, setRegisterPayload] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register, // This is the mutation function (ensure it's correctly implemented)
  });

  const onSubmit = (fieldValues: SignUpPayload) => {
    // e.preventDefault();
    const isEmailFilled = !!registerPayload.email;
    const isPasswordFilled = !!registerPayload.password;
    const isNameFilled = !!registerPayload.name;
    const isConfirmPassowrdFilled = !!registerPayload.confirmPassword;

    if (
      isEmailFilled &&
      isPasswordFilled &&
      isNameFilled &&
      isConfirmPassowrdFilled &&
      isPasswordFilled === isConfirmPassowrdFilled
    ) {
      handleRegister(fieldValues);
      console.log(fieldValues);
    } else {
      // Handle validation error (optional)

      console.log("Name, Email, password and confirm password must be filled.");
    }
  };

  // console.log(formState.errors);

  useEffect(() => {
    // Trigger re-validation of the form when language changes
    if (formState.errors.name) {
      formState.errors.name.message = t("signUp-name"); // Update error message dynamically
    }
    if (formState.errors.email) {
      formState.errors.email.message = t("signUp-email"); // Update error message dynamically
    }
    if (formState.errors.password) {
      formState.errors.password.message = t("signUp-password"); // Update error message dynamically
    }
    if (formState.errors.confirmPassword) {
      formState.errors.confirmPassword.message = t("signUp-confirmPassword"); // Update error message dynamically
    }
  }, [i18n.language]);

  return (
    <div className="flex min-h-screen flex-grow flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow">
        {/* Outer flex container */}
        <div className="flex flex-col space-y-1.5 p-6">
          {/* Heading and subheading */}
          <CardTitle className="text-center text-2xl font-bold tracking-tight">
            Sign Up for BitBlogs
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Enter your credentials to access your account
          </CardDescription>
        </div>

        {/* Form content */}
        <div className="p-6 pt-0">
          <form className="space-y-4">
            {/* Name input field */}
            <div className="space-y-2">
              <FormItem className="flex flex-col gap-1">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name
                </Label>

                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...hookForRegister("name", {
                    required: t("signUp-name"),
                    minLength: {
                      value: 2,
                      message: t("signUp-nameMinLength"),
                    },
                  })}
                  placeholder="John Doe"
                  value={registerPayload.name}
                  onChange={(e) => {
                    setRegisterPayload({
                      name: e.target.value,
                      email: registerPayload.email,
                      password: registerPayload.password,
                      confirmPassword: registerPayload.confirmPassword,
                    });
                  }}
                />
              </FormItem>
            </div>
            <div>
              {formState.errors?.name ? (
                <span>{formState.errors.name.message}</span>
              ) : null}
            </div>
            {/* Email input field */}
            <div className="space-y-2">
              <FormItem className="flex flex-col gap-1">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </Label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...hookForRegister("email", {
                    required: t("signUp-email"),
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: t("SignUp-valid-email-text"),
                    },
                    minLength: {
                      value: 15,
                      message: t("signUp-emailMinLength"),
                    },
                    maxLength: {
                      value: 30,
                      message: t("passowrd-maxLength"),
                    },
                  })}
                  placeholder="John@examle.com"
                  value={registerPayload.email}
                  onChange={(e) => {
                    setRegisterPayload({
                      name: registerPayload.name,
                      email: e.target.value,
                      password: registerPayload.password,
                      confirmPassword: registerPayload.confirmPassword,
                    });
                  }}
                />
              </FormItem>
            </div>{" "}
            <div>
              {formState.errors?.email ? (
                <span>{formState.errors.email.message}</span>
              ) : null}
            </div>
            {/* Password input field */}
            <div className="space-y-2">
              <FormItem className="flex flex-col gap-1">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </Label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...hookForRegister("password", {
                    required: t("signUp-password"),
                    minLength: {
                      value: 8,
                      message: t("signUp-passwordLength"),
                    },
                    maxLength: {
                      value: 30,
                      message: t("passowrd-maxLength"),
                    },
                  })}
                  type="password"
                  placeholder="*******"
                  value={registerPayload.password}
                  onChange={(e) => {
                    setRegisterPayload({
                      name: registerPayload.name,
                      email: registerPayload.email,
                      password: e.target.value,
                      confirmPassword: registerPayload.confirmPassword,
                    });
                  }}
                />
              </FormItem>
            </div>
            <div>
              {formState.errors?.password ? (
                <span>{formState.errors.password.message}</span>
              ) : null}
            </div>
            {/* Confirm Password input field */}
            <div className="space-y-2">
              <FormItem className="flex flex-col gap-1">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Confirm Password
                </Label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...hookForRegister("confirmPassword", {
                    required: t("signUp-confirm-password"),
                    minLength: {
                      value: 8,
                      message: t("signUp-confirm-password-Length"),
                    },
                    maxLength: {
                      value: 30,
                      message: t("passowrd-maxLength"),
                    },
                  })}
                  type="password"
                  placeholder="*******"
                  value={registerPayload.confirmPassword}
                  onChange={(e) => {
                    setRegisterPayload({
                      name: registerPayload.name,
                      email: registerPayload.email,
                      password: registerPayload.password,
                      confirmPassword: e.target.value,
                    });
                  }}
                />
              </FormItem>
            </div>
            <div>
              {formState.errors?.confirmPassword ? (
                <span>{formState.errors.confirmPassword.message}</span>
              ) : null}
            </div>
            {/* Submit Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Footer-like section for login redirect */}
        <div className="flex items-center justify-center p-6 pt-0">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signIn">
              <a className="text-primary hover:underline" href="/login">
                Log in
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
