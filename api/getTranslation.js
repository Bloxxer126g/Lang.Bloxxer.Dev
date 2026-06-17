import { createClient } from '@supabase/supabase-js'
const API_SECRET = process.env.SECRET
const supabase = createClient('https://qwwxjxsfcomnetognqai.supabase.co/', API_SECRET)

export async function getAllPosts() {
    const { data, error } = await supabase.from('Dictionary').select('*');
    
    if (error) {
        console.error('Error fetching posts:', error.message);
        throw error;
    }

    return data;
}
