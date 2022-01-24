export const Publication = ({ item }) => {
  return (
    <article>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </article>
  );
};
