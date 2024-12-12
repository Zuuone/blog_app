import { supabase } from "@/supabase";
import { FillProfileInfoPayload } from "@/supabase/account/index.types";

export const fillProfileInfo = async (payload: FillProfileInfoPayload) => {
  const response = await supabase
    .from("profiles")
    .upsert(payload as FillProfileInfoPayload)
    .throwOnError();

  return response.data;
};

export const getProfileInfo = (id: string | number) => {
  return supabase.from("profiles").select("*").eq("id", id);
};
