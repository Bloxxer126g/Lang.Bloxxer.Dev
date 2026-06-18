import { createClient } from '@supabase/supabase-js'
const API_SECRET = process.env.SECRET
const supabase = createClient('https://qwwxjxsfcomnetognqai.supabase.co/', API_SECRET)

async function addPost(Val) {
    let Dict = await fetch("/api/getTranslation.js");
    Dict = await Dict.json();
    let Info = JSON.parse(Val);
    let Gibberish_Word = Info.gibberish_word;
    Dict.body.forEach(element => {
        if (element.gibberish_word == Gibberish_Word) {
            console.error("Assignment already exists!")
            throw "Assignment already exists!";
            return error;
        }
    });

    const { error } = await supabase.from('Dictionary').insert(Val);

    if (error) {
        console.error('Error fetching posts:', error.message);
        throw error;
    }

    return error;
}

export default async function handler(req, res) {
    try {
        const data = await addPost(req.body);
        res.status(200).json("Added successfully");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
