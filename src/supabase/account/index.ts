import { supabase } from "@/supabase";
import { FillProfileInfoPayload } from "@/supabase/account/index.types";

export const fillProfileInfo = async (payload: FillProfileInfoPayload) => {
  return supabase
    .from("profiles")
    .upsert(payload as any)
    .throwOnError();
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};
