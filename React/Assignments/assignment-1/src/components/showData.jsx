export default function ShowData({ data }) {
  return (
    <section className="header">
      <div>
        <h2>Fetched Data</h2>
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Company:</strong> {data.company}
        </p>
        <p>
          <strong>Location:</strong> {data.location}
        </p>
        <p>
          <strong>Bio:</strong> {data.bio}
        </p>
      </div>
    </section>
  );
}
