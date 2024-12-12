// / <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare module "*.css";
