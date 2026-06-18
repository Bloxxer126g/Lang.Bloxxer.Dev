import { createClient } from '@supabase/supabase-js'
const API_SECRET = process.env.SECRET
const supabase = createClient('https://qwwxjxsfcomnetognqai.supabase.co/', API_SECRET)

async function addPost(Val) {
    const { data, error } = await supabase.from('Dictionary').select('*');

    if (error) {
        console.error('Error fetching posts:', error.message);
        throw error;
    }

    return data;
}

export default async function handler(req, res) {
    try {
        console.log(req);
        const data = await addPost(req);
        res.status(200).json(JSON.stringify(req));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
