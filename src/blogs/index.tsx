import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userAtom } from "@/store/auth";
import { supabase } from "@/supabase";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type SingleBlog = {
  created_at: string;
  description_en: string;
  description_ka: string;
  id: number;
  image_url: string;
  title_en: string;
  title_ka: string;
  user_id: string;
};

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

const BlogsView = () => {
  const [user] = useAtom(userAtom);
  const [blogs, setBlogs] = useState<SingleBlog[]>([]);
  const { control, handleSubmit } = useForm<BlogsListCreateValue>({
    defaultValues: BlogsFilterFormatDefaultValues,
  });

  useEffect(() => {
    supabase
      .from("Blogs")
      .select("*")
      .throwOnError()
      .then((res) => {
        const blogsList = res.data as unknown as SingleBlog[];
        setBlogs(blogsList || []);
        // console.log(blogs);
      });
  }, []);

  const onSubmit = (formValues: BlogsListCreateValue) => {
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
          });
        })
        .then((res) => console.log("Successfully created blog: ", res));
    }
    console.log("form values", formValues);
  };
  // console.log(user);

  return (
    <>
      <div className="flex flex-col items-center">
        {/* <CreateBlogForm /> */}
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
      </div>
      <div className="mt-7 flex flex-col items-center gap-y-4 border-gray-400">
        {blogs.map((blog) => {
          const blogImageUrl = blog?.image_url
            ? `${
                import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL
              }/${blog?.image_url}`
            : "";
          return (
            <div
              key={blog.id}
              className="border-grey-500 flex w-1/2 flex-col gap-y-4 border p-6"
            >
              <div>
                <img src={blogImageUrl} alt="" />
              </div>
              <div>{blog?.title_ka}</div>
              <div>{blog?.title_en}</div>
              <div>{blog?.description_ka}</div>
              <div>{blog?.description_en}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BlogsView;
