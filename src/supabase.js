import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://imeshptcjakjpctcspye.supabase.co"
const SUPABASE_KEY = "sb_publishable_MyKu_e3KSDhra2rSew6ZQw_nw1pcupE"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)