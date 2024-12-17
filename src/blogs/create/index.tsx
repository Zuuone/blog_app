import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { supabase } from "@/supabase";
import { useAtom } from "jotai";
import { Controller, useForm } from "react-hook-form";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type BlogsListCreateValue = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_file: null | File;
};
const BlogsFilterFormatDefaultValues = {
  title_ka: "",
  title_en: "",
  description_ka: "",
  description_en: "",
  image_file: null,
};

const CreateBlogForm = () => {
  const [user] = useAtom(userAtom);
  const { control, handleSubmit } = useForm<BlogsListCreateValue>({
    defaultValues: BlogsFilterFormatDefaultValues,
  });

  const onSubmit = (formValues: BlogsListCreateValue) => {
    const creationDate = dayjs();

    if (formValues?.image_file) {
      return supabase.storage
        .from("blog_images")
        .upload(formValues?.image_file?.name, formValues?.image_file)
        .then((res) => {
          return supabase.from("Blogs").insert({
            title_ka: formValues.title_ka,
            title_en: formValues.title_en,
            description_ka: formValues.description_ka,
            description_en: formValues.description_en,
            image_url: res.data?.fullPath,
            user_id: user?.user?.id,
            created_at: creationDate.toISOString(),
          });
        })
        .then((res) => console.log("Successfully created blog: ", res));
    }
    console.log("form values", formValues);
  };
  return (
    <div className="mt-14 flex w-1/3 flex-col items-center justify-center gap-x-4 gap-y-10 rounded-md border-2 border-solid border-black px-44 py-24">
      <Controller
        control={control}
        name="title_ka"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              onChange={onChange}
              value={value}
              placeholder="სათაური ქართულად"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="title_en"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              onChange={onChange}
              value={value}
              placeholder="Title in English"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="description_ka"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              onChange={onChange}
              value={value}
              placeholder="აღწერა ქართულად"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="description_en"
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              onChange={onChange}
              value={value}
              placeholder="Description in English"
            />
          );
        }}
      />
      <Controller
        control={control}
        name="image_file"
        render={({ field: { onChange } }) => {
          return (
            <Input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
              }}
              placeholder="file"
            />
          );
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>Create Blog</Button>
    </div>
  );
};

export default CreateBlogForm;
