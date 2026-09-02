export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  const promises = postIds.map(async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const data: PostItem = await response.json();
    return data;
  });

  const results = await Promise.all(promises);
  return results;
}