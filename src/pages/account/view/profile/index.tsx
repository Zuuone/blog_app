// import React from "react";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { userAtom } from "@/store/auth";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
import { FillProfileInfoPayload } from "@/supabase/account/index.types";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const ProfileView = () => {
  const user = useAtomValue(userAtom);
  console.log(user);
  console.log(user);
  const [profilePayload, setProfilePayload] = useState<FillProfileInfoPayload>({
    avatar_url: "",
    full_name_en: "",
    full_name_ka: "",
    phone_number: "",
  });

  useEffect(() => {
    if (user) {
      getProfileInfo(user?.user.id).then((res) => console.log(res));
    }
  }, [user]);

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

  const handleSubmit = () => {
    if (user?.user?.id) {
      handleFillProfileInfo({
        ...profilePayload,
        id: user.user.id,
      } as FillProfileInfoPayload & { id: string });
    }
    setProfilePayload({
      avatar_url: "",
      full_name_en: "",
      full_name_ka: "",
      phone_number: "",
    });
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
      <div className="h-[500px] w-[448px] max-w-md rounded-xl border bg-card text-card-foreground shadow">
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
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              value={profilePayload.avatar_url}
              onChange={(e) => {
                setProfilePayload({
                  avatar_url: e.target.value,
                  full_name_en: profilePayload.full_name_en,
                  full_name_ka: profilePayload.full_name_ka,
                  phone_number: profilePayload.phone_number,
                });
              }}
            />
          </FormItem>
          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name En
            </Label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              value={profilePayload.full_name_en}
              onChange={(e) => {
                setProfilePayload({
                  avatar_url: profilePayload.avatar_url,
                  full_name_en: e.target.value,
                  full_name_ka: profilePayload.full_name_ka,
                  phone_number: profilePayload.phone_number,
                });
              }}
            />
          </FormItem>
          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name Ka
            </Label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              value={profilePayload.full_name_ka}
              onChange={(e) => {
                setProfilePayload({
                  avatar_url: profilePayload.avatar_url,
                  full_name_en: profilePayload.full_name_en,
                  full_name_ka: e.target.value,
                  phone_number: profilePayload.phone_number,
                });
              }}
            />
          </FormItem>
          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Phone Number
            </Label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              value={profilePayload.phone_number}
              onChange={(e) => {
                setProfilePayload({
                  avatar_url: profilePayload.avatar_url,
                  full_name_en: profilePayload.full_name_en,
                  full_name_ka: profilePayload.full_name_ka,
                  phone_number: e.target.value,
                });
              }}
            />
          </FormItem>

          <button
            className="mt-4 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
