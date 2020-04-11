import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  console.log("fetching user...");
  console.log(data);
  const user = data && data.user;
  return [user, { mutate }];
}