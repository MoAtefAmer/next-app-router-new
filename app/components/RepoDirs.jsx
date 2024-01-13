import Link from 'next/link';
async function fetchRepoContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/MoAtefAmer/${name}/contents`,
    { next: { revalidate: 60 } } // reinvalidate built in cache every 60 seconds
  );
  await new Promise((resolve) => setTimeout(resolve, 3000)); // wait 3 second to show the suspense
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir');
  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
