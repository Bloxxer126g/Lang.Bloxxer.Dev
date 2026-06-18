import { createClient } from '@supabase/supabase-js'
const API_SECRET = process.env.SECRET
const supabase = createClient('https://qwwxjxsfcomnetognqai.supabase.co/', API_SECRET)

async function addPost(Val) {
    const { error } = await supabase.from('Dictionary').insert(Val);

    if (error) {
        console.error('Error fetching posts:', error.message);
        throw error;
    }

    return data;
}

export default async function handler(req, res) {
    try {
        const data = await addPost(req.body);
        res.status(200).json(JSON.stringify(req.body));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
