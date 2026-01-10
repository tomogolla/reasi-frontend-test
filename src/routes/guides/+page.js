export async function load({ fetch }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Error('Could not fetch posts');
    }

    const posts = await res.json();

    return {
        posts
    };
}
