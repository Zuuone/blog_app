// import React from "react";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { userAtom } from "@/store/auth";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
// import { FillProfileInfoPayload } from "@/supabase/account/index.types";
import { useMutation } from "@tanstack/react-query";
// import { t } from "i18next";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

type ProfileInfoVlaues = {
  avatar_url: string;
  full_name_en: string;
  full_name_ka: string;
  phone_number: string;
};

const ProfileInfoValuesDefaults: ProfileInfoVlaues = {
  avatar_url: "",
  full_name_en: "",
  full_name_ka: "",
  phone_number: "",
};

const ProfileView = () => {
  const user = useAtomValue(userAtom);

  const { t, i18n } = useTranslation();

  const { control, handleSubmit, formState, trigger, reset } =
    useForm<ProfileInfoVlaues>({
      defaultValues: ProfileInfoValuesDefaults,
    });

  useEffect(() => {
    reset(ProfileInfoValuesDefaults);
  }, [reset]);
  // console.log(user);
  // const [profilePayload, setProfilePayload] = useState<FillProfileInfoPayload>({
  //   avatar_url: "",
  //   full_name_en: "",
  //   full_name_ka: "",
  //   phone_number: "",
  // });

  useEffect(() => {
    if (user) {
      getProfileInfo(user?.user.id).then((res) => console.log(res));
    }
  }, [user]);

  useEffect(() => {
    trigger();
  }, [i18n.language]);

  //

  //

  //
  const { mutate: handleFillProfileInfo } = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo,
  });

  // const handleSubmit = () => {
  //   handleFillProfileInfo({ ...profilePayload, id: user?.user?.id });

  //   setProfilePayload({
  //     avatar_url: "",
  //     full_name_en: "",
  //     full_name_ka: "",
  //     phone_number: "",
  //   });
  // };

  // const handleProfileSubmit = () => {
  //   if (user?.user?.id) {
  //     handleFillProfileInfo({
  //       ...profilePayload,
  //       id: user.user.id,
  //     } as FillProfileInfoPayload & { id: string });
  //   }
  //   setProfilePayload({
  //     avatar_url: "",
  //     full_name_en: "",
  //     full_name_ka: "",
  //     phone_number: "",
  //   });
  // };

  const handleProfileSubmit = (data: ProfileInfoVlaues) => {
    handleFillProfileInfo(data);
  };

  // const handleSubmit = () => {
  //   if (user?.user?.id) {
  //     handleFillProfileInfo({
  //       ...profilePayload,
  //       id: user.user.id,
  //     });
  //   } else {
  //     console.error("User ID not found.");
  //   }
  // };
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
      <div className="h-max w-[448px] max-w-md rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col items-center justify-center space-y-1.5 p-6">
          <CardTitle className="text-center text-2xl font-bold tracking-tight">
            My Profile
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Check your profile info and make changes
          </CardDescription>
        </div>
        {/* <label></label> */}
        <div className="p-6 pt-0">
          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Avatar URL
            </Label>
            <Controller
              name="avatar_url"
              control={control}
              rules={{
                required: t("profile_avatar_url"),
                minLength: {
                  value: 8,
                  message: t("profile_avatar_url_length"),
                },
              }}
              render={({ field: { onChange, value } }) => (
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  name="avatar_url"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </FormItem>
          <div className="mt-2">
            {formState?.errors?.avatar_url && (
              <span>{formState.errors.avatar_url.message}</span>
            )}
          </div>
          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name En
            </Label>
            <Controller
              name="full_name_en"
              control={control}
              rules={{
                required: t("profile_full_name_en"),
                minLength: {
                  value: 2,
                  message: t("profile_full_name_en_length"),
                },
              }}
              render={({ field: { onChange, value } }) => (
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  name="full_name_En"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </FormItem>
          <div className="mt-2">
            {formState?.errors?.full_name_en && (
              <span>{formState.errors.full_name_en.message}</span>
            )}
          </div>
          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name Ka
            </Label>

            <Controller
              name="full_name_ka"
              control={control}
              rules={{
                required: t("profile_full_name_ka"),
                minLength: {
                  value: 2,
                  message: t("profile_full_name_ka_length"),
                },
              }}
              render={({ field: { onChange, value } }) => (
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  name="full_name_ka"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </FormItem>
          <div className="mt-2">
            {formState?.errors?.full_name_ka && (
              <span>{formState.errors.full_name_ka.message}</span>
            )}
          </div>
          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Phone Number
            </Label>
            <Controller
              name="phone_number"
              control={control}
              rules={{
                // required: t("profile_phone_number"),
                minLength: {
                  value: 9,
                  message: t("profile_phone_number_length"),
                },
                maxLength: {
                  value: 15,
                  message: t("profile_phone_number_max_length"),
                },
              }}
              render={({ field: { onChange, value } }) => (
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  name="phone_number"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </FormItem>
          <div className="mt-2">
            {formState?.errors?.phone_number && (
              <span>{formState.errors.phone_number.message}</span>
            )}
          </div>
          <button
            className="mt-4 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            onClick={handleSubmit(handleProfileSubmit)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
