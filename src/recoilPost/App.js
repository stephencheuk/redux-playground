import { Suspense } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  selectorFamily,
  useRecoilValue,
  //useSetRecoilState,
  useRecoilCallback,
} from "recoil";

const postsQuery = selector({
  key: "PostsQuery",
  get: async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    return data.posts;
  },
});

const currentPostIdState = atom({
  key: "CurrentPostIdState",
  default: "",
});

const postInfoQuery = selectorFamily({
  key: "PostInfoQuery",
  get: (postId) => async () => {
    if (postId === "") return undefined;

    const response = await fetch(
      `https://dummyjson.com/posts/${postId}/comments`
    );

    const data = await response.json();
    console.log("postInfoQuery get comment", data.comments);
    return data.comments;
  },
});

const currentPostQuery = selector({
  key: "CurrentPostQuery",
  get: ({ get }) => get(postInfoQuery(get(currentPostIdState))),
});

function Posts() {
  const posts = useRecoilValue(postsQuery);
  //const setPostId = useSetRecoilState(currentPostIdState)

  const changePost = useRecoilCallback(({ snapshot, set }) => (postId) => {
    console.log("Posts changePost", postId);
    snapshot.getLoadable(postInfoQuery(postId));
    set(currentPostIdState, postId);
  });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <a
            href={"#" + post.id}
            onClick={(e) => {
              e.preventDefault();
              //setPostId(post.id)
              changePost(post.id);
            }}
          >
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function CurrentPostPick() {
  const post = useRecoilValue(currentPostQuery);

  return (
    <>
      {post === undefined ? (
        <p>Please choose a post.</p>
      ) : (
        <ul>
          {post.map((i) => (
            <li key={i.id}>{i.body}</li>
          ))}
        </ul>
      )}
    </>
  );
}

function CurrentPostIdValue() {
  const postId = useRecoilValue(currentPostIdState);
  return <span>{postId}</span>;
}

const App = () => (
  <RecoilRoot>
    <h1>Recoild Post App (2 level structure)</h1>
    <Suspense fallback={<div>Loading posts...</div>}>
      <Posts />
      <Suspense
        fallback={
          <div>
            Loading <CurrentPostIdValue /> info...
          </div>
        }
      >
        <div>
          <CurrentPostPick />
        </div>
      </Suspense>
    </Suspense>
  </RecoilRoot>
);

export default App;
