import CreateBlogForm from "@/blogs/create";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/supabase";
import qs from "qs";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
// import underscore from "underscore";
import { useDebounce } from "@uidotdev/usehooks";
import dayjs from "dayjs";

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

type BlogsFilterFormValues = {
  searchText: string;
};

// const blogsFilterFormatDefaultValues = {
//   searchText: "",
// };
const BlogsView = () => {
  const { i18n } = useTranslation();
  const [blogs, setBlogs] = useState<SingleBlog[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const parsedQueryParams = qs.parse(searchParams.toString());
  const { control, watch } = useForm<BlogsFilterFormValues>({
    defaultValues: parsedQueryParams,
  });
  const watchedSearchText = watch("searchText");

  const debouncedSearchText = useDebounce(watchedSearchText, 1000);

  useEffect(() => {
    const parsedSearchParams = qs.parse(searchParams.toString());
    const searchText = parsedSearchParams?.searchText;
    supabase
      .from("Blogs")
      .select("*")
      .ilike(`title_${i18n.language}`, `%${searchText ?? ""}%`)
      .throwOnError()
      .then((res) => {
        const blogsList = res.data as unknown as SingleBlog[];
        setBlogs(blogsList || []);
        console.log(i18n.language);
      });
  }, []);

  // useEffect(()=>)
  // const fetchBlogs = useCallback(
  //   underscore.debounce((watchedSearchText: string) => {
  //     supabase
  //       .from("Blogs")
  //       .select("*")
  //       .ilike(`title_${i18n.language}`, `%${watchedSearchText}%`)
  //       .throwOnError()
  //       .then((res) => {
  //         const blogsList = res.data as unknown as SingleBlog[];
  //         setBlogs(blogsList || []);
  //         // console.log(blogs);
  //       });
  //   }, 1000),
  //   [],
  // );
  useEffect(() => {
    if (debouncedSearchText?.length > 2) {
      setSearchParams({ searchText: debouncedSearchText });

      supabase
        .from("Blogs")
        .select("*")
        .ilike(`title_${i18n.language}`, `%${watchedSearchText}%`)
        .throwOnError()
        .then((res) => {
          const blogsList = res.data as unknown as SingleBlog[];
          setBlogs(blogsList || []);
          // console.log(blogs);
        });
      // fetchBlogs(watchedSearchText);
    } else {
      setSearchParams({ searchText: "" });
      supabase
        .from("Blogs")
        .select("*")
        .throwOnError()
        .then((res) => {
          const blogsList = res.data as SingleBlog[];
          setBlogs(blogsList || []);
        });
    }
  }, [debouncedSearchText, setSearchParams]);

  // const onSubmit = (searchFormValues: BlogsFilterFormValues) => {
  //   const searchText = searchFormValues.searchText;

  //   setSearchParams(
  //     qs.stringify(searchFormValues, {
  //       skipNulls: true,
  //       filter: (_, value) => {
  //         return value || undefined;
  //       },
  //     }),
  //   );

  // console.log(user);

  return (
    <>
      <div className="flex flex-col items-center">
        <CreateBlogForm />
      </div>
      <div className="mx-auto my-20 flex w-1/3 flex-col items-center justify-center gap-5">
        <Controller
          control={control}
          name="searchText"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChange={onChange}
                value={value || ""}
                placeholder="Enter Search Text..."
              />
            );
          }}
        />
        {/* <Button onClick={handleSubmit(onSubmit)}>Search</Button> */}
      </div>
      <div className="mt-7 flex flex-col items-center gap-y-4 border-gray-400">
        {blogs.map((blog) => {
          const blogImageUrl = blog?.image_url
            ? `${
                import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL
              }/${blog?.image_url}`
            : "";
          const creationDate = dayjs(blog.created_at);
          const isOlderThanOneDay = creationDate.isBefore(
            dayjs().subtract(1, "day"),
          );

          const relativeCreationTime = isOlderThanOneDay
            ? creationDate.format("HH:mm - DD/MM/YYYY") // If older than 24 hours
            : creationDate.fromNow(); // If within the last 24 hours
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
              <div className="flex justify-end">
                <p>Created: {relativeCreationTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BlogsView;
